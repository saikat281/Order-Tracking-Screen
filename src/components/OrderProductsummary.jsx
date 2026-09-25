"use client";

function formatTaka(amount) {
  return `৳${Number(amount).toLocaleString("en-US")}`;
}

export default function ProductSummary({ product }) {
  const total = product.price * product.quantity;

  return (
    <div className="flex items-center gap-4 rounded-2xl border border-[#E7E5E0] bg-white p-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F0EFEA]">
        <svg className="h-6 w-6 text-[#1D3557]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 7.5l-8.25-4.5L3.75 7.5m16.5 0l-8.25 4.5m8.25-4.5v9l-8.25 4.5m0-9L3.75 7.5m8.25 4.5v9m-8.25-9v9l8.25 4.5"
          />
        </svg>
      </div>

      <div className="flex-1">
        <p className="text-sm font-medium text-[#14181F]">{product.name}</p>
        <p className="text-xs text-[#9C9C94]">
          Qty {product.quantity} · {formatTaka(product.price)} each
        </p>
      </div>

      <p className="text-sm font-semibold text-[#14181F]">{formatTaka(total)}</p>
    </div>
  );
}