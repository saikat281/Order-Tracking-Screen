"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import StatusBadge from "./OrderStatusbadge";
import ProductSummary from "./OrderProductsummary";
import { variants } from "./motion"; // adjust to match your actual path to Motion.jsx's exports

export default function OrderListItem({ order }) {
  return (
    <motion.li
      layout
      variants={variants.fadeUp}
      exit={{ opacity: 0, y: -8, transition: { duration: 0.2 } }}
      whileHover={{ y: -3 }}
      className="list-none rounded-2xl border border-[#E7E5E0] bg-white p-4 shadow-[0_1px_2px_rgba(20,24,31,0.04)] transition-shadow hover:shadow-[0_8px_24px_rgba(20,24,31,0.08)]"
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[11px] font-medium tracking-wide text-[#9C9C94]">{order.id}</p>
          <p className="mt-0.5 text-xs text-[#6B7280]">{order.customer.name}</p>
        </div>
        <StatusBadge status={order.status} label={order.statusLabel} />
      </div>

      <div className="mt-3">
        <ProductSummary product={order.product} />
      </div>

      <div className="mt-3 flex items-center justify-between border-t border-[#F0EFEA] pt-3">
        <span className="text-xs text-[#9C9C94]">Estimated arrival</span>
        <span className="text-xs font-medium text-[#14181F]">{order.eta}</span>
      </div>

      <div className="mt-3">
        <Link
          href={`/orders/${order.id}`}
          className="inline-flex w-full items-center justify-center rounded-lg border border-[#1D3557] px-3 py-2 text-xs font-medium text-[#1D3557] transition hover:bg-[#1D3557] hover:text-white"
        >
          View details
        </Link>
      </div>
    </motion.li>
  );
}