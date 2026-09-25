"use client";

import { motion } from "framer-motion";

const STATUS_STYLES = {
  processing: { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200", dot: "bg-amber-500" },
  shipped: { bg: "bg-sky-50", text: "text-sky-700", border: "border-sky-200", dot: "bg-sky-500" },
  outfordelivery: { bg: "bg-violet-50", text: "text-violet-700", border: "border-violet-200", dot: "bg-violet-500" },
  delivered: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200", dot: "bg-emerald-500" },
};

function resolveStyle(status) {
  const key = (status || "").toLowerCase().replace(/[^a-z]/g, "");
  return STATUS_STYLES[key] || STATUS_STYLES.processing;
}

export default function StatusBadge({ status, label }) {
  const style = resolveStyle(status);

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${style.bg} ${style.text} ${style.border}`}
    >
      <span className="relative flex h-1.5 w-1.5">
        <motion.span
          className={`absolute inline-flex h-full w-full rounded-full ${style.dot} opacity-75`}
          animate={{ scale: [1, 1.8, 1], opacity: [0.75, 0, 0.75] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${style.dot}`} />
      </span>
      {label}
    </span>
  );
}