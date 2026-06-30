import { Sparkles } from "lucide-react";
import { aiSummary } from "@/data/paperData";

export function AISummaryCard() {
  return (
    <section className="relative overflow-hidden rounded-xl border border-neutral-200 bg-[#F5F5F5]/60 p-6 shadow-sm transition-all hover:shadow-md">
      <div className="flex justify-between items-center gap-6">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-[#F04D22]" />
            <h3 className="text-sm font-bold text-black tracking-tight">AI-Generated Summary</h3>
          </div>
          <p className="text-sm text-neutral-800 leading-relaxed max-w-4xl font-medium">
            {aiSummary}
          </p>
        </div>

        {/* Brain Schematic SVG Graphic in neutral colors with Groq Orange highlights */}
        <div className="hidden sm:block flex-shrink-0 relative w-20 h-20 opacity-80 select-none">
          <svg
            className="w-full h-full text-neutral-300"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Left Brain Hemisphere structure */}
            <path d="M50,15 C30,15 20,30 20,50 C20,65 30,75 40,80 C42,81 45,78 45,75 C45,72 40,70 40,65 C40,55 45,45 50,45" className="stroke-neutral-300" />
            {/* Right Brain Hemisphere structure */}
            <path d="M50,15 C70,15 80,30 80,50 C80,65 70,75 60,80 C58,81 55,78 55,75 C55,72 60,70 60,65 C60,55 55,45 50,45" className="stroke-neutral-300" />
            
            {/* Middle split */}
            <line x1="50" y1="15" x2="50" y2="45" strokeDasharray="3 3" className="stroke-neutral-300" />
            <line x1="50" y1="45" x2="50" y2="75" strokeDasharray="3 3" className="stroke-neutral-300" />

            {/* Neural nodes in Groq Orange and gray */}
            <circle cx="50" cy="15" r="2.5" className="fill-[#F04D22] text-[#F04D22] animate-pulse" />
            <circle cx="20" cy="50" r="2.5" className="fill-neutral-400 text-neutral-400" />
            <circle cx="80" cy="50" r="2.5" className="fill-neutral-400 text-neutral-400" />
            <circle cx="35" cy="30" r="2.5" className="fill-[#F04D22] text-[#F04D22]" />
            <circle cx="65" cy="30" r="2.5" className="fill-[#F04D22] text-[#F04D22]" />
            <circle cx="35" cy="62" r="2.5" className="fill-neutral-400 text-neutral-400" />
            <circle cx="65" cy="62" r="2.5" className="fill-neutral-400 text-neutral-400" />
            <circle cx="50" cy="75" r="2.5" className="fill-[#F04D22] text-[#F04D22]" />

            {/* Connecting synapses */}
            <line x1="35" y1="30" x2="50" y2="15" opacity="0.4" className="stroke-neutral-300" />
            <line x1="65" y1="30" x2="50" y2="15" opacity="0.4" className="stroke-neutral-300" />
            <line x1="20" y1="50" x2="35" y2="30" opacity="0.4" className="stroke-neutral-300" />
            <line x1="80" y1="50" x2="65" y2="30" opacity="0.4" className="stroke-neutral-300" />
            <line x1="20" y1="50" x2="35" y2="62" opacity="0.4" className="stroke-neutral-300" />
            <line x1="80" y1="50" x2="65" y2="62" opacity="0.4" className="stroke-neutral-300" />
            <line x1="35" y1="62" x2="50" y2="75" opacity="0.4" className="stroke-neutral-300" />
            <line x1="65" y1="62" x2="50" y2="75" opacity="0.4" className="stroke-neutral-300" />
          </svg>
        </div>
      </div>
    </section>
  );
}
