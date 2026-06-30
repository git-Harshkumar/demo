import { useState } from "react";
import { benchmarks } from "@/data/paperData";
import { BarChart3, ArrowRight, ArrowUp, ArrowDown, ChevronsUpDown } from "lucide-react";

export function Benchmarks() {
  const [showAll, setShowAll] = useState(true); // Default to true on the Results tab to show all
  const [sortBy, setSortBy] = useState<"name" | "score" | "rank" | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleSort = (field: "name" | "score" | "rank") => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
  };

  const displayedBenchmarks = showAll ? benchmarks : benchmarks.slice(0, 5);

  const sortedBenchmarks = [...displayedBenchmarks].sort((a, b) => {
    if (!sortBy) return 0;

    const aVal = a[sortBy];
    const bVal = b[sortBy];

    if (sortBy === "score") {
      const aNum = parseFloat(aVal.replace(/[^0-9.]/g, "")) || 0;
      const bNum = parseFloat(bVal.replace(/[^0-9.]/g, "")) || 0;
      return sortOrder === "asc" ? aNum - bNum : bNum - aNum;
    }

    if (sortBy === "rank") {
      const aNum = parseInt(aVal.replace(/[^0-9]/g, "")) || 0;
      const bNum = parseInt(bVal.replace(/[^0-9]/g, "")) || 0;
      return sortOrder === "asc" ? aNum - bNum : bNum - aNum;
    }

    // Default string sorting for name
    if (aVal.toLowerCase() < bVal.toLowerCase()) {
      return sortOrder === "asc" ? -1 : 1;
    }
    if (aVal.toLowerCase() > bVal.toLowerCase()) {
      return sortOrder === "asc" ? 1 : -1;
    }
    return 0;
  });

  const renderSortIndicator = (field: "name" | "score" | "rank") => {
    if (sortBy !== field) {
      return <ChevronsUpDown className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-600 transition-colors" />;
    }
    return sortOrder === "asc" ? (
      <ArrowUp className="w-3.5 h-3.5 text-[#F04D22]" />
    ) : (
      <ArrowDown className="w-3.5 h-3.5 text-[#F04D22]" />
    );
  };

  return (
    <section className="bg-white rounded-xl border border-neutral-200 p-5 shadow-sm transition-all hover:shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#F5F5F5] border border-neutral-200 text-black">
            <BarChart3 className="w-4.5 h-4.5" />
          </div>
          <h3 className="text-sm font-bold text-black tracking-tight">Results (Benchmarks)</h3>
        </div>
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-xs font-bold text-[#F04D22] hover:text-black inline-flex items-center gap-1 transition-all"
        >
          {showAll ? "Show top 5 results" : "View all results"}
          <ArrowRight className={`w-3.5 h-3.5 transition-transform ${showAll ? "rotate-90" : ""}`} />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-neutral-100 text-neutral-400 font-bold text-[10px] sm:text-xs uppercase tracking-wider select-none">
              {/* Benchmark Name Header */}
              <th
                onClick={() => handleSort("name")}
                className="py-3 px-3 cursor-pointer group hover:text-black transition-colors"
              >
                <div className="flex items-center gap-1.5">
                  Benchmark
                  {renderSortIndicator("name")}
                </div>
              </th>
              
              <th className="py-3 px-3">Metric</th>

              {/* Score Header */}
              <th
                onClick={() => handleSort("score")}
                className="py-3 px-3 cursor-pointer group hover:text-black transition-colors"
              >
                <div className="flex items-center gap-1.5">
                  Score
                  {renderSortIndicator("score")}
                </div>
              </th>

              {/* Rank Header */}
              <th
                onClick={() => handleSort("rank")}
                className="py-3 px-3 cursor-pointer group hover:text-black transition-colors"
              >
                <div className="flex items-center gap-1.5">
                  Rank
                  {renderSortIndicator("rank")}
                </div>
              </th>
              
              <th className="py-3 px-3 text-right">Compare</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100 text-neutral-800 font-medium">
            {sortedBenchmarks.map((b) => (
              <tr key={b.name} className="hover:bg-[#F5F5F5]/40 transition-colors">
                <td className="py-3.5 px-3 font-bold text-black">{b.name}</td>
                <td className="py-3.5 px-3 text-neutral-500">{b.metric}</td>
                <td className="py-3.5 px-3 font-bold text-black">{b.score}</td>
                <td className="py-3.5 px-3 text-neutral-800">{b.rank}</td>
                <td className="py-3.5 px-3 text-right">
                  <a
                    href={b.compareUrl}
                    className="text-[#F04D22] hover:text-black font-extrabold inline-flex items-center gap-0.5 transition-all text-xs"
                  >
                    View on Leaderboard <span className="text-[10px]">&rarr;</span>
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
