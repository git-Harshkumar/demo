import React from "react";

interface PillProps {
  children: React.ReactNode;
  variant?: "task" | "method" | "benchmark" | "default";
  className?: string;
}

const variants = {
  task: "bg-white text-black border-black hover:bg-neutral-50",
  method: "bg-[#F04D22]/5 text-[#F04D22] border-[#F04D22] hover:bg-[#F04D22]/10",
  benchmark: "bg-[#F5F5F5] text-neutral-800 border-neutral-200 hover:bg-neutral-100",
  default: "bg-[#F5F5F5] text-neutral-800 border-neutral-200 hover:bg-neutral-100",
};

export function Pill({ children, variant = "default", className = "" }: PillProps) {
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded border text-[11px] font-semibold transition-colors ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
