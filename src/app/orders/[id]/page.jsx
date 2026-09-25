"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { orders } from "@/data/orders";

// ---- status colors (handles both "out-for-delivery" and "out_for_delivery") ----
const STATUS_STYLES = {
  processing: { label: "Processing", text: "text-amber-700", bg: "bg-amber-50", ring: "ring-amber-200", dot: "bg-amber-500", line: "#E8983D", pulse: true },
  shipped: { label: "Shipped", text: "text-blue-700", bg: "bg-blue-50", ring: "ring-blue-200", dot: "bg-blue-500", line: "#3B6FE0", pulse: false },
  out_for_delivery: { label: "Out for Delivery", text: "text-violet-700", bg: "bg-violet-50", ring: "ring-violet-200", dot: "bg-violet-500", line: "#8B5CF6", pulse: true },
  delivered: { label: "Delivered", text: "text-emerald-700", bg: "bg-emerald-50", ring: "ring-emerald-200", dot: "bg-emerald-500", line: "#1F9E64", pulse: false },
  cancelled: { label: "Cancelled", text: "text-rose-700", bg: "bg-rose-50", ring: "ring-rose-200", dot: "bg-rose-500", line: "#E8604C", pulse: false },
};

function getStatusStyle(status) {
  const key = (status || "").replace(/-/g, "_");
  return STATUS_STYLES[key] || STATUS_STYLES.processing;
}

// "Sep 24, 6:00 PM" -> Date, or null if unparsable (e.g. "—", "Delivered Sep 20")
function parseEta(etaStr) {
  if (!etaStr) return null;
  const match = etaStr.match(/^([A-Za-z]{3,9} \d{1,2}),\s*(.+)$/);
  if (!match) return null;
  const [, datePart, timePart] = match;
  const year = new Date().getFullYear();
  const parsed = new Date(`${datePart}, ${year} ${timePart}`);
  return isNaN(parsed.getTime()) ? null : parsed;
}

function isDelayed(order) {
  if (!order || order.status === "delivered" || order.status === "cancelled") return false;
  const eta = parseEta(order.eta);
  return eta ? eta.getTime() < Date.now() : false;
}

export default function OrderDetailsPage() {
  const { id } = useParams();
  const order = orders[id];
  const [confirmState, setConfirmState] = useState("idle"); // idle | confirmed | not_received | reported

  const delayed = useMemo(() => isDelayed(order), [order]);
  const hasTracking = Array.isArray(order?.timeline) && order.timeline.length > 0;
  const style = order ? getStatusStyle(order.status) : null;

  if (!order) {
    return (
      <main className="mx-auto flex min-h-dvh w-full max-w-md flex-col items-center justify-center gap-3 px-5 text-center">
        <p className="font-mono text-xs text-slate-500">{id}</p>
        <h1 className="text-xl font-semibold text-slate-900">Order not found</h1>
        <p className="max-w-[260px] text-sm text-slate-500">
          We couldn&apos;t find an order with this ID. Double check the link or search again.
        </p>
        <Link href="/" className="mt-2 rounded-2xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90">
          Back to orders
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-md flex-col gap-5 px-5 pb-16 pt-10">
      {/* Back link */}
      <Link href="/" className="inline-flex w-fit items-center gap-1.5 text-sm text-slate-500 transition hover:text-slate-900">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Back
      </Link>

      {/* Header */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="font-mono text-xs text-slate-500">{order.id}</p>
            <h1 className="truncate text-xl font-semibold text-slate-900">{order.product.name}</h1>
          </div>
          <span className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium ring-1 ${style.bg} ${style.text} ${style.ring}`}>
            <span className="relative flex h-1.5 w-1.5">
              {style.pulse && (
                <motion.span
                  className={`absolute inline-flex h-full w-full rounded-full ${style.dot}`}
                  animate={{ scale: [1, 2.4], opacity: [0.6, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
                />
              )}
              <span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${style.dot}`} />
            </span>
            {order.statusLabel}
          </span>
        </div>
        <p className="mt-3 text-sm text-slate-500">
          Estimated arrival <span className="font-medium text-slate-900">{order.eta}</span>
        </p>
      </div>

      {/* Special case: delayed */}
      {delayed && (
        <div className="flex gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="2" className="mt-0.5 shrink-0">
            <circle cx="12" cy="12" r="9" />
            <path strokeLinecap="round" d="M12 7v5l3 2" />
          </svg>
          <div>
            <p className="text-sm font-medium text-amber-900">This delivery is running late</p>
            <p className="mt-1 text-xs leading-relaxed text-amber-800">
              It was expected by {order.eta} — that&apos;s passed. We&apos;re checking with the courier now; no action needed from you yet.
            </p>
          </div>
        </div>
      )}

      {/* Product summary */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <p className="mb-3 text-sm font-medium text-slate-900">Product</p>
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm text-slate-900">{order.product.name}</p>
            <p className="text-xs text-slate-500">Qty {order.product.quantity}</p>
          </div>
          <p className="font-mono text-sm text-slate-900">৳{(order.product.price * order.product.quantity).toLocaleString()}</p>
        </div>
      </div>

      {/* Timeline, or "tracking not available yet" */}
      {hasTracking ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <p className="mb-4 text-sm font-medium text-slate-900">Route</p>
          <ol className="relative">
            {order.timeline.map((step, i) => {
              const isLast = i === order.timeline.length - 1;
              const isDone = step.complete || step.current;
              return (
                <li key={step.label} className="relative flex gap-4 pb-7 last:pb-0">
                  {!isLast && (
                    <span
                      className="absolute left-[7px] top-4"
                      style={{
                        width: "1px",
                        height: "calc(100% - 0.5rem)",
                        backgroundColor: step.complete ? style.line : "transparent",
                        backgroundImage: step.complete ? "none" : "linear-gradient(#D6D9E2 60%, transparent 40%)",
                        backgroundSize: "1px 6px",
                        backgroundRepeat: "repeat-y",
                      }}
                    />
                  )}
                  <span className="relative mt-1 flex h-3.5 w-3.5 shrink-0 items-center justify-center">
                    {step.current && (
                      <motion.span
                        className="absolute h-full w-full rounded-full"
                        style={{ backgroundColor: style.line }}
                        animate={{ scale: [1, 2.1], opacity: [0.35, 0] }}
                        transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
                      />
                    )}
                    <span
                      className="relative h-3.5 w-3.5 rounded-full border-2"
                      style={{ borderColor: isDone ? style.line : "#C7CAD6", backgroundColor: step.complete ? style.line : "white" }}
                    />
                  </span>
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${isDone ? "text-slate-900" : "text-slate-400"}`}>{step.label}</p>
                    <p className="text-xs text-slate-500">{step.description}</p>
                    {step.time && <p className="mt-0.5 font-mono text-[11px] text-slate-500">{step.time}</p>}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      ) : (
        <div className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B7086" strokeWidth="2" className="mt-0.5 shrink-0">
            <circle cx="12" cy="12" r="9" strokeDasharray="2 3" />
            <path strokeLinecap="round" d="M12 8v4l2.5 1.5" />
          </svg>
          <div>
            <p className="text-sm font-medium text-slate-900">Tracking isn&apos;t available yet</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-500">
              Your order is confirmed. Tracking details will appear here as soon as the courier picks it up — usually within a few hours.
            </p>
          </div>
        </div>
      )}

      {/* Special case: delivered but not received */}
      {order.status === "delivered" ? (
        confirmState === "idle" ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm font-medium text-slate-900">Did this arrive?</p>
            <p className="mt-1 text-xs text-slate-500">This order is marked delivered. Let us know it reached you.</p>
            <div className="mt-3 flex gap-3">
              <button onClick={() => setConfirmState("confirmed")} className="flex-1 rounded-2xl bg-slate-900 py-2.5 text-sm font-medium text-white transition hover:opacity-90">
                Yes, I got it
              </button>
              <button onClick={() => setConfirmState("not_received")} className="flex-1 rounded-2xl border border-slate-200 py-2.5 text-sm font-medium text-slate-900 transition hover:border-slate-400">
                I didn&apos;t receive this
              </button>
            </div>
          </div>
        ) : confirmState === "confirmed" ? (
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-900">
            Glad it arrived safely — thanks for confirming.
          </motion.div>
        ) : confirmState === "not_received" ? (
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="flex gap-3 rounded-2xl border border-rose-200 bg-rose-50 p-4">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#BE123C" strokeWidth="2" className="mt-0.5 shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M10.29 3.86l-8.18 14.14A1.5 1.5 0 003.5 20.5h17a1.5 1.5 0 001.39-2.5L13.71 3.86a1.5 1.5 0 00-2.42 0z" />
            </svg>
            <div>
              <p className="text-sm font-medium text-rose-900">We&apos;re sorry this didn&apos;t arrive</p>
              <p className="mt-1 text-xs leading-relaxed text-rose-800">
                We&apos;ve flagged this order for review. Support will reach out within 24 hours with next steps — a redelivery or a refund.
              </p>
              <button onClick={() => setConfirmState("reported")} className="mt-3 inline-flex text-xs font-medium text-rose-900 underline underline-offset-2">
                Report missing delivery
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-900">
            Reported. Reference <span className="font-mono">{order.id}</span> — our team will email you shortly.
          </motion.div>
        )
      ) : (
        <div className="flex gap-3">
          <button className="flex-1 rounded-2xl border border-slate-200 bg-white py-3 text-sm font-medium text-slate-900 transition hover:border-slate-400">
            Contact support
          </button>
          <button className="flex-1 rounded-2xl bg-slate-900 py-3 text-sm font-medium text-white transition hover:opacity-90">
            Report an issue
          </button>
        </div>
      )}
    </main>
  );
}