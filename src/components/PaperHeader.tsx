import { Github, FileText, ExternalLink, Calendar, Bookmark, FileDown, TrendingUp } from "lucide-react";
import { paperMeta, authors } from "@/data/paperData";

export function PaperHeader() {
  const visibleAuthors = authors.slice(0, 4);

  return (
    <div className="bg-white rounded-xl border border-neutral-200 p-6 md:p-8 shadow-sm transition-all hover:shadow-md">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left Column: Details */}
        <div className="lg:col-span-2 space-y-5">
          {/* arXiv ID pill with monospaced tag */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded border border-neutral-200 bg-[#F5F5F5] text-xs font-mono font-bold text-neutral-850">
            <FileText className="w-3.5 h-3.5" />
            arxiv:2504.XXXXXX
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight leading-tight">
            {paperMeta.title}
          </h1>

          {/* Meta Info: Published & Citations */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-neutral-500">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-neutral-400" />
              Published {paperMeta.published}
            </span>
            <span className="text-neutral-300">•</span>
            <span className="flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-neutral-400" />
              {paperMeta.citations} Citations
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2">
            {/* PDF Button - Solid Orange Groq style */}
            <a
              href={paperMeta.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#F04D22] text-white rounded-lg text-xs font-extrabold shadow-sm hover:bg-black transition-all"
            >
              <FileDown className="w-4 h-4" />
              PDF
            </a>

            {/* arXiv Page Button - White with thin border */}
            <a
              href={paperMeta.arxivUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-black rounded-lg text-xs font-extrabold text-black bg-white hover:bg-[#F5F5F5] transition-all"
            >
              <FileText className="w-4 h-4 text-neutral-500" />
              arXiv Page
              <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
            </a>

            {/* GitHub Button - White with thin border */}
            <a
              href={paperMeta.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-black rounded-lg text-xs font-extrabold text-black bg-white hover:bg-[#F5F5F5] transition-all"
            >
              <Github className="w-4 h-4 text-neutral-700" />
              GitHub ★ {paperMeta.stars}
            </a>

            {/* Save Button - White with thin border */}
            <button className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-300 rounded-lg text-xs font-extrabold text-neutral-700 bg-white hover:bg-[#F5F5F5] hover:border-black transition-all">
              <Bookmark className="w-4 h-4 text-neutral-400" />
              Save
            </button>
          </div>

          {/* Rankings Info */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-bold pt-1">
            <span className="text-neutral-500">
              Overall Rank: <span className="text-black">{paperMeta.overallRank}</span>
            </span>
            <span className="text-neutral-300">•</span>
            <span className="text-neutral-500">
              LLM Rank: <span className="text-black">{paperMeta.llmRank}</span>
            </span>
            <span className="text-neutral-300">•</span>
            <a href="#leaderboard" className="text-[#F04D22] hover:text-black transition-all inline-flex items-center gap-0.5">
              View Leaderboard <span className="text-[10px]">&rarr;</span>
            </a>
          </div>

          {/* Authors List inline */}
          <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-neutral-100">
            <div className="flex items-center gap-3">
              {visibleAuthors.map((author) => (
                <div key={author.name} className="flex items-center gap-2">
                  <img
                    src={author.img}
                    alt={author.name}
                    className="w-7 h-7 rounded-full border border-neutral-200/80 shadow-sm object-cover"
                  />
                  <span className="text-xs font-bold text-neutral-800">{author.name}</span>
                </div>
              ))}
              <span className="inline-flex items-center px-2.5 py-1 rounded bg-[#F04D22]/5 text-[#F04D22] border border-[#F04D22]/10 text-[10px] font-extrabold">
                +18 authors
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Paper Thumbnail Preview with Groq Performance Colors */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[210px] aspect-[3/4] bg-white rounded-xl border border-neutral-200 shadow-sm p-4 hover:shadow-md transition-all select-none">
            {/* Top title text */}
            <div className="text-center font-serif font-extrabold text-[9px] text-black leading-tight border-b border-neutral-100 pb-2">
              GLM-5.1: Towards Long-Horizon Tasks
            </div>
            
            {/* Author indicator line */}
            <div className="flex justify-center gap-1.5 my-1.5">
              <div className="h-1 w-8 bg-neutral-200 rounded"></div>
              <div className="h-1 w-6 bg-neutral-200 rounded"></div>
              <div className="h-1 w-7 bg-neutral-200 rounded"></div>
            </div>

            {/* Mock Chart Container */}
            <div className="border border-neutral-200 rounded-lg p-2 bg-[#F5F5F5]/40 mt-3 flex flex-col items-center">
              <div className="text-[7px] font-bold text-neutral-400 mb-2 uppercase tracking-wider">Comparative Performance Metrics</div>
              <div className="w-full flex items-end justify-center gap-2 h-14 pb-1.5 px-1 border-b border-neutral-250">
                {/* 5 bars: Groq Orange, Black, Grey, Grey, Grey */}
                <div className="w-2.5 bg-[#F04D22] rounded-t-sm transition-all hover:opacity-85" style={{ height: "80%" }}></div>
                <div className="w-2.5 bg-black rounded-t-sm transition-all hover:opacity-85" style={{ height: "95%" }}></div>
                <div className="w-2.5 bg-neutral-300 rounded-t-sm transition-all hover:opacity-85" style={{ height: "65%" }}></div>
                <div className="w-2.5 bg-neutral-300 rounded-t-sm transition-all hover:opacity-85" style={{ height: "55%" }}></div>
                <div className="w-2.5 bg-neutral-300 rounded-t-sm transition-all hover:opacity-85" style={{ height: "40%" }}></div>
              </div>
              
              {/* Legends */}
              <div className="flex justify-between w-full mt-1 px-1">
                <div className="h-1 w-2 bg-[#F04D22] rounded-full"></div>
                <div className="h-1 w-2 bg-black rounded-full"></div>
                <div className="h-1 w-2 bg-neutral-300 rounded-full"></div>
                <div className="h-1 w-2 bg-neutral-300 rounded-full"></div>
                <div className="h-1 w-2 bg-neutral-300 rounded-full"></div>
              </div>
            </div>

            {/* Tiny text block representing two columns */}
            <div className="grid grid-cols-2 gap-2.5 mt-3.5">
              <div className="space-y-1">
                <div className="h-0.5 bg-neutral-200 w-full rounded"></div>
                <div className="h-0.5 bg-neutral-200 w-11/12 rounded"></div>
                <div className="h-0.5 bg-neutral-200 w-10/12 rounded"></div>
                <div className="h-0.5 bg-neutral-200 w-full rounded"></div>
              </div>
              <div className="space-y-1">
                <div className="h-0.5 bg-neutral-200 w-full rounded"></div>
                <div className="h-0.5 bg-neutral-200 w-10/12 rounded"></div>
                <div className="h-0.5 bg-neutral-200 w-11/12 rounded"></div>
                <div className="h-0.5 bg-neutral-200 w-full rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
