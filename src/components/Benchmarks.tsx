import { useState } from "react";
import { benchmarks } from "@/data/paperData";
import { BarChart3, ArrowRight } from "lucide-react";

export function Benchmarks() {
  const [showAll, setShowAll] = useState(false);
  const displayedBenchmarks = showAll ? benchmarks : benchmarks.slice(0, 5);

  return (
    <section className="bg-white rounded-xl border border-stone-200 p-5 shadow-sm transition-all hover:shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-stone-50 border border-stone-100 text-stone-600">
            <BarChart3 className="w-4.5 h-4.5" />
          </div>
          <h3 className="text-sm font-bold text-stone-900 tracking-tight">Results (Top Benchmarks)</h3>
        </div>
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-xs font-bold text-[#FF5A1F] hover:text-red-700 inline-flex items-center gap-1 transition-all"
        >
          {showAll ? "Show top results" : "View all results"}
          <ArrowRight className={`w-3.5 h-3.5 transition-transform ${showAll ? "rotate-90" : ""}`} />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-stone-100 text-stone-400 font-semibold text-[10px] sm:text-xs uppercase tracking-wider">
              <th className="py-2.5 px-3 font-semibold">Benchmark</th>
              <th className="py-2.5 px-3 font-semibold">Metric</th>
              <th className="py-2.5 px-3 font-semibold">Score</th>
              <th className="py-2.5 px-3 font-semibold">Rank</th>
              <th className="py-2.5 px-3 font-semibold">Compare</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100 text-stone-700">
            {displayedBenchmarks.map((b) => (
              <tr key={b.name} className="hover:bg-stone-50/50 transition-colors">
                <td className="py-3 px-3 font-bold text-stone-900">{b.name}</td>
                <td className="py-3 px-3 text-stone-500">{b.metric}</td>
                <td className="py-3 px-3 font-bold text-stone-900">{b.score}</td>
                <td className="py-3 px-3 font-semibold text-stone-600">{b.rank}</td>
                <td className="py-3 px-3">
                  <a
                    href={b.compareUrl}
                    className="text-[#FF5A1F] hover:text-red-700 font-bold inline-flex items-center gap-0.5 transition-all text-xs"
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
