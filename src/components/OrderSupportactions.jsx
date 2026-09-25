"use client";

import { motion } from "framer-motion";

const buttonBase = "flex-1 rounded-xl border px-4 py-2.5 text-sm font-medium transition";

export default function SupportActions({
  onContactSupport,
  onReportIssue,
  onCancelOrder,
  cancellable = true,
}) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row">
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={onContactSupport}
        className={`${buttonBase} border-[#1D3557] bg-[#1D3557] text-white hover:bg-[#16294a]`}
      >
        Contact support
      </motion.button>

      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={onReportIssue}
        className={`${buttonBase} border-[#E7E5E0] bg-white text-[#14181F] hover:border-[#1D3557]/40`}
      >
        Report an issue
      </motion.button>

      {cancellable && (
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={onCancelOrder}
          className={`${buttonBase} border-[#E7E5E0] bg-white text-[#B3402C] hover:border-[#B3402C]/40`}
        >
          Cancel order
        </motion.button>
      )}
    </div>
  );
}