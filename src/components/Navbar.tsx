import { Search, Bookmark } from "lucide-react";

export function Navbar() {
  return (
    <nav className="border-b border-stone-200 bg-white sticky top-0 z-50 shadow-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0 cursor-pointer">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#FF5A1F] text-white font-bold text-sm tracking-wide shadow-sm">
              FA
            </div>
            <span className="text-lg font-bold text-stone-900 tracking-tight">Frontier Atlas</span>
          </div>

          {/* Search bar */}
          <div className="relative flex-1 max-w-md hidden md:block">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-4 w-4 text-stone-400" />
            </div>
            <input
              type="text"
              placeholder="Search papers, authors, topics, benchmarks..."
              className="w-full pl-9 pr-12 py-1.5 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-1 focus:ring-[#FF5A1F] focus:border-[#FF5A1F] placeholder-stone-400 transition-all"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <kbd className="inline-flex items-center gap-0.5 px-1.5 py-0.5 border border-stone-200 rounded text-[10px] font-medium text-stone-400 bg-white font-mono shadow-sm">
                ⌘ K
              </kbd>
            </div>
          </div>

          {/* Links and User Action */}
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-5">
              {["Explore", "Rankings", "Tasks", "Methods", "About"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm font-medium text-stone-600 hover:text-[#FF5A1F] transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3 border-l border-stone-200 pl-4 lg:pl-6">
              <button
                className="p-1.5 text-stone-500 hover:text-[#FF5A1F] transition-colors rounded-lg hover:bg-stone-50"
                aria-label="Bookmarks"
              >
                <Bookmark className="w-5 h-5" />
              </button>

              <button
                className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-50 border border-orange-200 text-[#FF5A1F] font-bold text-xs shadow-sm hover:ring-2 hover:ring-orange-200 transition-all"
                aria-label="User profile"
              >
                JP
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
