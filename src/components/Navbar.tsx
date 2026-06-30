import { Search, Bookmark } from "lucide-react";

export function Navbar() {
  return (
    <nav className="border-b border-neutral-200 bg-white sticky top-0 z-50 shadow-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0 cursor-pointer">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#F04D22] text-white font-extrabold text-xs tracking-wider shadow-sm">
              FA
            </div>
            <span className="text-base font-extrabold text-black tracking-tight uppercase">Frontier Atlas</span>
          </div>

          {/* Search bar */}
          <div className="relative flex-1 max-w-md hidden md:block">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-4 w-4 text-neutral-400" />
            </div>
            <input
              type="text"
              placeholder="Search papers, authors, topics, benchmarks..."
              className="w-full pl-9 pr-12 py-1.5 bg-[#F5F5F5] border border-neutral-200 rounded-lg text-sm text-black focus:outline-none focus:ring-1 focus:ring-[#F04D22] focus:border-[#F04D22] placeholder-neutral-400 transition-all font-medium"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <kbd className="inline-flex items-center gap-0.5 px-1.5 py-0.5 border border-neutral-200 rounded text-[10px] font-semibold text-neutral-400 bg-white font-mono shadow-sm">
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
                  className="text-xs font-bold uppercase tracking-wider text-neutral-600 hover:text-[#F04D22] transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3 border-l border-neutral-200 pl-4 lg:pl-6">
              <button
                className="p-1.5 text-neutral-500 hover:text-[#F04D22] transition-colors rounded-lg hover:bg-neutral-50"
                aria-label="Bookmarks"
              >
                <Bookmark className="w-5 h-5" />
              </button>

              <button
                className="flex items-center justify-center w-8 h-8 rounded-full bg-[#F5F5F5] border border-neutral-200 text-black font-extrabold text-xs shadow-sm hover:ring-2 hover:ring-[#F04D22]/20 hover:border-[#F04D22] transition-all"
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
