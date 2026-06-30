import { useState } from "react";
import { benchmarks } from "@/data/paperData";
import { BarChart3, ArrowRight } from "lucide-react";

export function Benchmarks() {
  const [showAll, setShowAll] = useState(false);
  const displayedBenchmarks = showAll ? benchmarks : benchmarks.slice(0, 5);

  return (
    <section className="bg-white rounded-xl border border-neutral-200 p-5 shadow-sm transition-all hover:shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#F5F5F5] border border-neutral-200 text-black">
            <BarChart3 className="w-4.5 h-4.5" />
          </div>
          <h3 className="text-sm font-bold text-black tracking-tight font-sans">Results (Top Benchmarks)</h3>
        </div>
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-xs font-extrabold text-[#F04D22] hover:text-black inline-flex items-center gap-1 transition-all font-sans"
        >
          {showAll ? "Show top results" : "View all results"}
          <ArrowRight className={`w-3.5 h-3.5 transition-transform ${showAll ? "rotate-90" : ""}`} />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-neutral-100 text-neutral-400 font-bold text-[10px] sm:text-xs uppercase tracking-wider font-sans">
              <th className="py-2.5 px-3 font-bold">Benchmark</th>
              <th className="py-2.5 px-3 font-bold">Metric</th>
              <th className="py-2.5 px-3 font-bold">Score</th>
              <th className="py-2.5 px-3 font-bold">Rank</th>
              <th className="py-2.5 px-3 font-bold">Compare</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100 text-neutral-800 font-sans">
            {displayedBenchmarks.map((b) => (
              <tr key={b.name} className="hover:bg-neutral-50 transition-colors">
                <td className="py-3 px-3 font-bold text-black">{b.name}</td>
                <td className="py-3 px-3 text-neutral-500 font-medium">{b.metric}</td>
                <td className="py-3 px-3 font-bold text-black">{b.score}</td>
                <td className="py-3 px-3 font-bold text-neutral-600">{b.rank}</td>
                <td className="py-3 px-3 font-sans">
                  <a
                    href={b.compareUrl}
                    className="text-[#F04D22] hover:text-black font-extrabold inline-flex items-center gap-0.5 transition-all text-xs"
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
