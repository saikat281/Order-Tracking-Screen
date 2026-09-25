"use client";

import { motion } from "framer-motion";

export default function DeliveryTimeline({ steps }) {
  const completedCount = steps.filter((step) => step.complete).length;
  const currentIndex = steps.findIndex((step) => step.current);
  const progressIndex = currentIndex >= 0 ? currentIndex : completedCount;
  const progressRatio = steps.length > 1 ? progressIndex / (steps.length - 1) : 0;

  return (
    <div className="relative">
      <div className="absolute left-[8px] top-1 bottom-1 w-[2px] rounded-full bg-[#E7E5E0]" />
      <motion.div
        className="absolute left-[8px] top-1 w-[2px] origin-top rounded-full bg-[#1D3557]"
        style={{ height: "calc(100% - 8px)" }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: progressRatio }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      <ul className="flex flex-col gap-6">
        {steps.map((step) => {
          const isDone = step.complete;
          const isCurrent = step.current;
          return (
            <li key={step.label} className="relative flex gap-4">
              <span className="relative z-10 mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center">
                {isCurrent && (
                  <motion.span
                    className="absolute h-full w-full rounded-full bg-[#1D3557]/20"
                    animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                )}
                <span
                  className={`h-2.5 w-2.5 rounded-full border-2 ${
                    isDone || isCurrent ? "border-[#1D3557] bg-[#1D3557]" : "border-[#D8D6CF] bg-white"
                  }`}
                />
              </span>

              <div className="pb-1">
                <p className={`text-sm font-medium ${isDone || isCurrent ? "text-[#14181F]" : "text-[#9C9C94]"}`}>
                  {step.label}
                </p>
                <p className="mt-0.5 text-xs text-[#9C9C94]">{step.description}</p>
                {step.time && <p className="mt-1 text-xs font-medium text-[#6B7280]">{step.time}</p>}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}