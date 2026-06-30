import { Quote, Copy, Check } from "lucide-react";
import { bibtex } from "@/data/paperData";
import { useCopy } from "@/hooks/useCopy";

export function CitationCard() {
  const { copied, copy } = useCopy();

  return (
    <section className="bg-white rounded-xl border border-neutral-200 p-5 shadow-sm transition-all hover:shadow-md font-sans select-none">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#F5F5F5] border border-neutral-200 text-black">
            <Quote className="w-4 h-4" />
          </div>
          <h3 className="text-sm font-bold text-black tracking-[-0.02em]">Citation</h3>
        </div>

        <button
          onClick={() => copy(bibtex)}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 border border-black rounded-lg text-xs font-semibold text-black bg-white hover:bg-neutral-50 transition-all ${
            copied ? "text-[#F04D22] border-[#F04D22] bg-[#F04D22]/5 hover:bg-[#F04D22]/5 hover:border-[#F04D22]" : ""
          }`}
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              Copy BibTeX
            </>
          )}
        </button>
      </div>

      <div className="mt-3 bg-[#F5F5F5] rounded-lg border border-neutral-200 p-3.5 font-mono text-[11px] text-neutral-800 break-all whitespace-pre-wrap select-all shadow-inner leading-relaxed">
        {bibtex}
      </div>
    </section>
  );
}
