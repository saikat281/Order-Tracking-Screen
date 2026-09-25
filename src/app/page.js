"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { orders } from "@/data/orders";

import Motion, { staggerContainer } from "@/components/motion";
import OrderListItem from "@/components/OrderListItems";
import StatePanel from "@/components/OrderStatePannel";

function matchesQuery(order, query) {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return (
    order.id.toLowerCase().includes(q) ||
    order.customer.name.toLowerCase().includes(q) ||
    order.product.name.toLowerCase().includes(q)
  );
}

export default function Home() {
  const [query, setQuery] = useState("");
  const allOrders = useMemo(() => Object.values(orders), []);

  const filtered = useMemo(
    () => allOrders.filter((order) => matchesQuery(order, query)),
    [allOrders, query]
  );

  return (
    <div className="min-h-screen bg-[#F7F7F4]">
      <div className="mx-auto w-full max-w-2xl px-5 py-12 sm:py-16">
        <Motion type="fadeDown" duration={0.4}>
          <h1 className="mt-1 text-3xl text-center font-semibold text-[#14181F] sm:text-4xl">
            ORDER TRACKING SCREEN
          </h1>
        </Motion>

        <Motion type="fadeUp" duration={0.4} delay={0.1} className="mt-6">
          <div className="relative w-full">
            <svg
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8A8A82]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 10-10.6 0 7.5 7.5 0 0010.6 0z"
              />
            </svg>

            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by order ID, product, or customer"
              className="w-full rounded-xl border border-[#E7E5E0] bg-white py-3 pl-11 pr-4 text-sm text-[#14181F] placeholder:text-[#9C9C94] outline-none transition focus:border-[#1D3557] focus:ring-2 focus:ring-[#1D3557]/10"
            />
          </div>
        </Motion>

        <div className="mt-6">
          {filtered.length > 0 ? (
            <motion.ul
              variants={staggerContainer(0.08)}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-3"
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((order) => (
                  <OrderListItem key={order.id} order={order} />
                ))}
              </AnimatePresence>
            </motion.ul>
          ) : (
            <StatePanel
              variant="notFound"
              title="No matching orders"
              description="Try a different order ID, product, or customer name."
            />
          )}
        </div>
      </div>
    </div>
  );
}