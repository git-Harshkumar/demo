import { useState } from "react";
import { FileText, ArrowRight, ChevronUp } from "lucide-react";
import { abstractShort, abstractRest } from "@/data/paperData";

export function Abstract() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-white rounded-xl border border-neutral-200 p-5 shadow-sm transition-all hover:shadow-md">
      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#F5F5F5] border border-neutral-200 text-black">
          <FileText className="w-4 h-4" />
        </div>
        <h3 className="text-sm font-bold text-black tracking-tight">Abstract</h3>
      </div>

      <div className="text-sm text-neutral-800 leading-relaxed max-w-4xl font-medium">
        <p>
          {abstractShort}
          {expanded && <span className="inline">{abstractRest}</span>}
          {!expanded && <span className="text-neutral-400">...</span>}
        </p>
      </div>

      <div className="mt-3">
        {expanded ? (
          <button
            onClick={() => setExpanded(false)}
            className="text-xs font-extrabold text-[#F04D22] hover:text-black inline-flex items-center gap-1 transition-all"
          >
            Show less
            <ChevronUp className="w-3.5 h-3.5" />
          </button>
        ) : (
          <button
            onClick={() => setExpanded(true)}
            className="text-xs font-extrabold text-[#F04D22] hover:text-black inline-flex items-center gap-1 transition-all"
          >
            Read full abstract
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </section>
  );
}
