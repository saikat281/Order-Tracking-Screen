"use client";

import { motion } from "framer-motion";

const ICON_PATHS = {
  empty: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v7.128c0 1.243-1.007 2.25-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25v-7.128c0-.97.616-1.813 1.5-2.097M3 8.511V6.75A2.25 2.25 0 015.25 4.5h13.5A2.25 2.25 0 0121 6.75v1.761M3 8.511l9 3.5 9-3.5",
  error: "M12 9v3.75m0 3.75h.008v.008H12v-.008zM21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  notFound: "M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
};

export default function StatePanel({ variant = "empty", title, description, action }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="flex flex-col items-center rounded-2xl border border-dashed border-[#E7E5E0] bg-white/60 px-6 py-12 text-center"
    >
      {variant === "loading" ? (
        <motion.span
          className="h-8 w-8 rounded-full border-2 border-[#E7E5E0] border-t-[#1D3557]"
          animate={{ rotate: 360 }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        />
      ) : (
        <svg className="h-8 w-8 text-[#9C9C94]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d={ICON_PATHS[variant] || ICON_PATHS.empty} />
        </svg>
      )}

      {title && <p className="mt-4 text-sm font-medium text-[#14181F]">{title}</p>}
      {description && <p className="mt-1 max-w-xs text-sm text-[#9C9C94]">{description}</p>}

      {action && (
        <button
          onClick={action.onClick}
          className="mt-4 rounded-full border border-[#1D3557] px-4 py-2 text-sm font-medium text-[#1D3557] transition hover:bg-[#1D3557] hover:text-white"
        >
          {action.label}
        </button>
      )}
    </motion.div>
  );
}