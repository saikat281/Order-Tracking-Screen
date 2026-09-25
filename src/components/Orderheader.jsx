"use client";

import StatusBadge from "./OrderStatusbadge";



export default function OrderHeader({ order }) {
  return (
    <div className="flex flex-col gap-4 border-b border-[#E7E5E0] pb-5 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <p className="text-xs font-medium tracking-wide text-[#9C9C94]">{order.id}</p>
        <h1 className="mt-1 text-2xl font-semibold text-[#14181F] sm:text-3xl">
          {order.product.name}
        </h1>
        <p className="mt-1 text-sm text-[#6B7280]">Ordered by {order.customer.name}</p>
      </div>

      <div className="flex flex-col items-start gap-2 sm:items-end">
        <StatusBadge status={order.status} label={order.statusLabel} />
        <p className="text-xs text-[#9C9C94]">
          Est. arrival <span className="font-medium text-[#14181F]">{order.eta}</span>
        </p>
      </div>
    </div>
  );
}