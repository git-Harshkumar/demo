import React from "react";

interface PillProps {
  children: React.ReactNode;
  variant?: "task" | "method" | "benchmark" | "default";
  className?: string;
}

const variants = {
  task: "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100",
  method: "bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100",
  benchmark: "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100",
  default: "bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100",
};

export function Pill({ children, variant = "default", className = "" }: PillProps) {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border transition-colors ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
