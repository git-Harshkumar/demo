import { useState } from "react";
import { Navbar } from "./Navbar";
import { Breadcrumb } from "./Breadcrumb";
import { PaperHeader } from "./PaperHeader";
import { CitationCard } from "./CitationCard";
import { AISummaryCard } from "./AISummaryCard";
import { Abstract } from "./Abstract";
import { Tags } from "./Tags";
import { Benchmarks } from "./Benchmarks";
import { RelatedPapers } from "./RelatedPapers";
import { CodeSection } from "./CodeSection";
import { DatasetsSection } from "./DatasetsSection";
import { taskTags, benchmarks } from "@/data/paperData";

type Tab = "overview" | "code" | "results" | "datasets";

export function PaperDetailPage() {
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-black selection:bg-[#F04D22]/10 selection:text-[#F04D22]">
      {/* Top sticky Navbar */}
      <Navbar />

      {/* Main page content container */}
      <main className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-16 flex-1 flex flex-col">
        {/* Breadcrumb section */}
        <Breadcrumb />

        {/* Tab Navigation / Anchor strip */}
        <div className="border-b border-neutral-200 mb-6 sticky top-16 bg-white z-40">
          <nav className="flex space-x-8" aria-label="Tabs">
            {(["overview", "code", "results", "datasets"] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-3 px-1 border-b-2 text-xs font-bold uppercase tracking-wider transition-all focus:outline-none ${
                  activeTab === tab
                    ? "border-[#F04D22] text-[#F04D22]"
                    : "border-transparent text-neutral-500 hover:text-black"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Conditional Tab Rendering */}
        <div className="flex-1">
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
              {/* Left Sidebar */}
              <aside className="lg:col-span-1 space-y-4">
                {/* Task Category Card */}
                <div className="bg-[#F5F5F5]/65 rounded-xl border border-neutral-200 p-4 space-y-3 shadow-sm">
                  <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-400">Task Category</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {taskTags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 border border-black bg-white rounded text-[10px] font-bold text-black"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Datasets Used Card */}
                <div className="bg-[#F5F5F5]/65 rounded-xl border border-neutral-200 p-4 space-y-3 shadow-sm">
                  <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-400">Datasets Used</h4>
                  <div className="flex flex-col gap-1.5">
                    {benchmarks.slice(0, 4).map((b) => (
                      <button
                        key={b.name}
                        onClick={() => setActiveTab("datasets")}
                        className="text-left text-xs font-bold text-black hover:text-[#F04D22] transition-colors truncate"
                      >
                        • {b.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Results Chart Thumbnail */}
                <div className="bg-[#F5F5F5]/65 rounded-xl border border-neutral-200 p-4 space-y-3 shadow-sm">
                  <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-400">Performance</h4>
                  <div className="border border-neutral-200 bg-white rounded-lg p-2.5 flex flex-col items-center shadow-inner">
                    <div className="w-full flex items-end justify-center gap-1.5 h-12 pb-1 border-b border-neutral-100">
                      <div className="w-2.5 bg-[#F04D22] rounded-t-sm" style={{ height: "65%" }}></div>
                      <div className="w-2.5 bg-black rounded-t-sm" style={{ height: "95%" }}></div>
                      <div className="w-2.5 bg-neutral-300 rounded-t-sm" style={{ height: "45%" }}></div>
                      <div className="w-2.5 bg-neutral-300 rounded-t-sm" style={{ height: "35%" }}></div>
                    </div>
                    <span className="text-[8px] font-extrabold text-neutral-400 mt-1.5 uppercase tracking-wider">
                      Click Results tab
                    </span>
                  </div>
                </div>
              </aside>

              {/* Main Content Column */}
              <div className="lg:col-span-3 space-y-5">
                <PaperHeader />
                <AISummaryCard />
                <Abstract />
                <CitationCard />
                <Tags />
                <RelatedPapers />
              </div>
            </div>
          )}

          {activeTab === "code" && (
            <div className="space-y-6">
              <CodeSection />
              <RelatedPapers />
            </div>
          )}

          {activeTab === "results" && (
            <div className="space-y-6">
              <Benchmarks />
              <RelatedPapers />
            </div>
          )}

          {activeTab === "datasets" && (
            <div className="space-y-6">
              <DatasetsSection />
              <RelatedPapers />
            </div>
          )}
        </div>
      </main>

      {/* Clean footer */}
      <footer className="bg-[#F5F5F5] border-t border-neutral-200 py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-neutral-400 uppercase tracking-wide">
          <p>© 2026 Frontier Atlas. All rights reserved.</p>
          <p>Data sourced from arXiv and Papers with Code. Last updated 2026.</p>
        </div>
      </footer>
    </div>
  );
}
