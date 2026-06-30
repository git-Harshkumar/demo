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
    <div className="min-h-screen bg-stone-50/50 flex flex-col font-sans">
      {/* Top sticky Navbar */}
      <Navbar />

      {/* Main page content container */}
      <main className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-16 flex-1 flex flex-col">
        {/* Breadcrumb section */}
        <Breadcrumb />

        {/* Vertical stack of cards matching the layout */}
        <div className="space-y-5 flex-1">
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
      <footer className="bg-white border-t border-stone-200/80 py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-stone-400">
          <p>© 2026 Frontier Atlas. All rights reserved.</p>
          <p>Data sourced from arXiv and Papers with Code. Last updated 2026.</p>
        </div>
      </footer>
    </div>
  );
}
