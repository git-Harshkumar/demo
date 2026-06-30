import { useState } from "react";
import { benchmarks } from "@/data/paperData";
import { BarChart3, ArrowRight } from "lucide-react";

export function Benchmarks() {
  const [showAll, setShowAll] = useState(false);
  const displayedBenchmarks = showAll ? benchmarks : benchmarks.slice(0, 5);

  return (
    <section className="bg-white rounded-xl border border-neutral-200 p-5 shadow-sm transition-all hover:shadow-md font-sans">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 select-none">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#F5F5F5] border border-neutral-200 text-black">
            <BarChart3 className="w-4.5 h-4.5" />
          </div>
          <h3 className="text-sm font-bold text-black tracking-[-0.02em]">Results (Top Benchmarks)</h3>
        </div>
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-xs font-semibold text-[#F04D22] hover:text-black inline-flex items-center gap-1 transition-all"
        >
          {showAll ? "Show top results" : "View all results"}
          <ArrowRight className={`w-3.5 h-3.5 transition-transform ${showAll ? "rotate-90" : ""}`} />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-neutral-100 text-neutral-400 font-semibold text-[10px] sm:text-xs uppercase tracking-wider select-none">
              <th className="py-2.5 px-3 font-semibold">Benchmark</th>
              <th className="py-2.5 px-3 font-semibold">Metric</th>
              <th className="py-2.5 px-3 font-semibold">Score</th>
              <th className="py-2.5 px-3 font-semibold">Rank</th>
              <th className="py-2.5 px-3 font-semibold">Compare</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100 text-neutral-850">
            {displayedBenchmarks.map((b) => (
              <tr key={b.name} className="hover:bg-neutral-50 transition-colors">
                <td className="py-3 px-3 font-bold text-black">{b.name}</td>
                <td className="py-3 px-3 text-neutral-500 font-medium">{b.metric}</td>
                <td className="py-3 px-3 font-mono font-bold text-black">{b.score}</td>
                <td className="py-3 px-3 font-mono font-semibold text-neutral-600">{b.rank}</td>
                <td className="py-3 px-3">
                  <a
                    href={b.compareUrl}
                    className="text-[#F04D22] hover:text-black font-semibold inline-flex items-center gap-0.5 transition-all text-xs"
                  >
                    View <span className="text-[10px]">&rarr;</span>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
