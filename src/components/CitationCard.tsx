import { Quote, Copy, Check } from "lucide-react";
import { bibtex } from "@/data/paperData";
import { useCopy } from "@/hooks/useCopy";

export function CitationCard() {
  const { copied, copy } = useCopy();

  return (
    <section className="bg-white rounded-xl border border-stone-200 p-5 shadow-sm transition-all hover:shadow-md">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-stone-50 border border-stone-100 text-stone-600">
            <Quote className="w-4 h-4" />
          </div>
          <h3 className="text-sm font-bold text-stone-900 tracking-tight">Citation</h3>
        </div>

        <button
          onClick={() => copy(bibtex)}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 border border-stone-200 rounded-lg text-xs font-semibold text-stone-600 bg-white hover:bg-stone-50 hover:border-stone-300 transition-all ${
            copied ? "text-emerald-600 border-emerald-300 bg-emerald-50 hover:bg-emerald-50 hover:border-emerald-300" : ""
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

      <div className="mt-3 bg-stone-50/50 rounded-lg border border-stone-100 p-3.5 font-mono text-[11px] sm:text-xs text-stone-600 break-all whitespace-pre-wrap select-all">
        {bibtex}
      </div>
    </section>
  );
}
