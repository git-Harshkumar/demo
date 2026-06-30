import { useState, useRef, useEffect } from "react";
import { relatedPapers } from "@/data/paperData";
import { Bookmark, ArrowRight, ChevronRight, X, Search } from "lucide-react";

export function RelatedPapers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 240, behavior: "smooth" });
    }
  };

  const filteredPapers = relatedPapers.filter((paper) =>
    paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    paper.arxiv.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="bg-white rounded-xl border border-stone-200 p-5 shadow-sm transition-all hover:shadow-md relative">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-stone-50 border border-stone-100 text-stone-600">
            <Bookmark className="w-4.5 h-4.5" />
          </div>
          <h3 className="text-sm font-bold text-stone-900 tracking-tight">Related Papers</h3>
        </div>
        <button
          onClick={() => {
            setSearchQuery("");
            setIsModalOpen(true);
          }}
          className="text-xs font-bold text-[#FF5A1F] hover:text-red-700 inline-flex items-center gap-1 transition-all"
        >
          View all
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Carousel Wrapper */}
      <div className="relative group">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-4 pb-2 scroll-smooth no-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }}
        >
          {relatedPapers.slice(0, 5).map((paper) => (
            <article
              key={paper.title}
              className="flex-shrink-0 w-[220px] bg-white border border-stone-200/80 rounded-xl p-4 flex flex-col justify-between h-[145px] hover:border-orange-200 hover:shadow-sm transition-all snap-start cursor-pointer group/card"
            >
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-stone-950 leading-snug line-clamp-3 group-hover/card:text-[#FF5A1F] transition-colors">
                  {paper.title}
                </h4>
                <p className="text-[10px] text-stone-400 font-mono font-semibold pt-1">{paper.arxiv}</p>
              </div>

              <div className="flex items-center justify-between border-t border-stone-100 pt-2.5 mt-auto">
                <span className="text-[10px] text-stone-500 font-semibold">{paper.citations} citations</span>
                <button
                  className="p-1 text-stone-400 hover:text-[#FF5A1F] hover:bg-orange-50 rounded-md transition-all"
                  aria-label="Save paper"
                >
                  <Bookmark className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Carousel Scroll Arrow */}
        <button
          onClick={scrollRight}
          className="absolute -right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full border border-stone-200 bg-white text-stone-600 shadow-md hover:bg-stone-50 hover:text-stone-900 transition-all z-10"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* View All Overlay Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-all">
          <div className="bg-white rounded-2xl border border-stone-200 shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="p-5 border-b border-stone-100 flex items-start justify-between">
              <div>
                <h3 className="text-base font-bold text-stone-900">All Related Papers</h3>
                <p className="text-xs text-stone-500 mt-0.5">Browse reference papers related to GLM-5.1 research.</p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-lg text-stone-400 hover:text-stone-600 hover:bg-stone-50 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Search Box */}
            <div className="p-4 bg-stone-50/50 border-b border-stone-100">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-stone-400" />
                <input
                  type="text"
                  placeholder="Search papers by title or arXiv id..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-1.5 bg-white border border-stone-200 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-1 focus:ring-[#FF5A1F] focus:border-[#FF5A1F] placeholder-stone-400 transition-all"
                  autoFocus
                />
              </div>
            </div>

            {/* Modal Content Scroll Area */}
            <div className="flex-1 overflow-y-auto p-5 space-y-3.5">
              {filteredPapers.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {filteredPapers.map((paper) => (
                    <article
                      key={paper.title}
                      className="bg-white border border-stone-200 rounded-xl p-4 flex flex-col justify-between h-[135px] hover:border-orange-200 hover:shadow-sm transition-all cursor-pointer group/item"
                    >
                      <div>
                        <h4 className="text-xs font-bold text-stone-950 leading-snug line-clamp-3 group-hover/item:text-[#FF5A1F] transition-colors">
                          {paper.title}
                        </h4>
                        <p className="text-[10px] text-stone-400 font-mono font-semibold pt-1">{paper.arxiv}</p>
                      </div>

                      <div className="flex items-center justify-between border-t border-stone-100 pt-2.5 mt-auto">
                        <span className="text-[10px] text-stone-500 font-semibold">{paper.citations} citations</span>
                        <button
                          className="p-1 text-stone-400 hover:text-[#FF5A1F] hover:bg-orange-50 rounded-md transition-all"
                          aria-label="Save paper"
                        >
                          <Bookmark className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="py-12 text-center">
                  <Bookmark className="w-8 h-8 text-stone-300 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-stone-500">No matching papers found</p>
                  <p className="text-xs text-stone-400 mt-0.5">Try widening your search terms</p>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-stone-50/50 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-stone-500 font-mono">
                Showing {filteredPapers.length} of {relatedPapers.length} papers
              </span>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-1.5 bg-stone-900 text-white rounded-lg text-xs font-semibold hover:bg-stone-800 transition-colors shadow-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
