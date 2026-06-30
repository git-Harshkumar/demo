import { Navbar } from "./Navbar";
import { Breadcrumb } from "./Breadcrumb";
import { PaperHeader } from "./PaperHeader";
import { CitationCard } from "./CitationCard";
import { AISummaryCard } from "./AISummaryCard";
import { Abstract } from "./Abstract";
import { Tags } from "./Tags";
import { Benchmarks } from "./Benchmarks";
import { RelatedPapers } from "./RelatedPapers";

export function PaperDetailPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col font-sans text-black selection:bg-[#F04D22]/10 selection:text-[#F04D22]">
      {/* Top sticky Navbar */}
      <Navbar />

      {/* Main page content container */}
      <main className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-16 flex-1 flex flex-col">
        {/* Breadcrumb section */}
        <Breadcrumb />

        {/* Vertical stack of cards matching the screenshot layout exactly */}
        <div className="space-y-6 flex-1">
          <PaperHeader />
          <CitationCard />
          <AISummaryCard />
          <Abstract />
          <Tags />
          <Benchmarks />
          <RelatedPapers />
        </div>
      </main>

      {/* Clean footer */}
      <footer className="bg-white border-t border-neutral-200/85 py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-neutral-400 uppercase tracking-wide">
          <p>© 2026 Frontier Atlas. All rights reserved.</p>
          <p>Data sourced from arXiv and Papers with Code. Last updated 2026.</p>
        </div>
      </footer>
    </div>
  );
}
