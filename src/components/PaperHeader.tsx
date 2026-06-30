import { Github, FileText, ExternalLink, Calendar, Users, Bookmark, FileDown, TrendingUp } from "lucide-react";
import { paperMeta, authors } from "@/data/paperData";

export function PaperHeader() {
  const visibleAuthors = authors.slice(0, 4);

  return (
    <div className="bg-white rounded-2xl border border-stone-200/80 p-6 md:p-8 shadow-sm transition-all hover:shadow-md bg-[#FFFDFB]/40">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left Column: Details */}
        <div className="lg:col-span-2 space-y-5">
          {/* arXiv ID pill */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-[#FF5A1F] border border-orange-100/80">
            <FileText className="w-3.5 h-3.5" />
            arxiv:2504.XXXXXX
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
            {paperMeta.title}
          </h1>

          {/* Meta Info: Published & Citations */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-stone-500">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-stone-400" />
              Published {paperMeta.published}
            </span>
            <span className="text-stone-300">•</span>
            <span className="flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-stone-400" />
              {paperMeta.citations} Citations
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2">
            {/* PDF Button */}
            <a
              href={paperMeta.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF5A1F] text-white rounded-xl text-xs font-bold shadow-sm hover:bg-[#e04a15] transition-all"
            >
              <FileDown className="w-4 h-4" />
              PDF
            </a>

            {/* arXiv Page Button */}
            <a
              href={paperMeta.arxivUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-stone-200 rounded-xl text-xs font-semibold text-stone-600 bg-white hover:bg-stone-50 hover:border-stone-300 transition-all"
            >
              <FileText className="w-4 h-4 text-stone-400" />
              arXiv Page
              <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
            </a>

            {/* GitHub Button */}
            <a
              href={paperMeta.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-stone-200 rounded-xl text-xs font-semibold text-stone-600 bg-white hover:bg-stone-50 hover:border-stone-300 transition-all"
            >
              <Github className="w-4 h-4 text-stone-700" />
              GitHub ★ {paperMeta.stars}
            </a>

            {/* Save Button */}
            <button className="inline-flex items-center gap-2 px-4 py-2 border border-stone-200 rounded-xl text-xs font-semibold text-stone-600 bg-white hover:bg-stone-50 hover:border-stone-300 transition-all">
              <Bookmark className="w-4 h-4 text-stone-400" />
              Save
            </button>
          </div>

          {/* Rankings Info */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-bold pt-1">
            <span className="text-stone-500">
              Overall Rank: <span className="text-stone-900">{paperMeta.overallRank}</span>
            </span>
            <span className="text-stone-300">•</span>
            <span className="text-stone-500">
              LLM Rank: <span className="text-stone-900">{paperMeta.llmRank}</span>
            </span>
            <span className="text-stone-300">•</span>
            <a href="#leaderboard" className="text-[#FF5A1F] hover:text-red-700 transition-all inline-flex items-center gap-0.5">
              View Leaderboard <span className="text-[10px]">&rarr;</span>
            </a>
          </div>

          {/* Authors List inline */}
          <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-stone-100">
            <div className="flex items-center gap-3">
              {visibleAuthors.map((author, index) => (
                <div key={author.name} className="flex items-center gap-2">
                  <img
                    src={author.img}
                    alt={author.name}
                    className="w-7 h-7 rounded-full border border-stone-200/80 shadow-sm object-cover"
                  />
                  <span className="text-xs font-bold text-stone-800">{author.name}</span>
                </div>
              ))}
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-orange-50 text-[#FF5A1F] border border-orange-100">
                +18 authors
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Paper Thumbnail Preview */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[210px] aspect-[3/4] bg-white rounded-xl border border-stone-200/80 shadow-sm p-4 hover:shadow-md transition-all select-none">
            {/* Top title text */}
            <div className="text-center font-serif font-extrabold text-[9px] text-stone-800 leading-tight border-b border-stone-100 pb-2">
              GLM-5.1: Towards Long-Horizon Tasks
            </div>
            
            {/* Author indicator line */}
            <div className="flex justify-center gap-1.5 my-1.5">
              <div className="h-1 w-8 bg-stone-200 rounded"></div>
              <div className="h-1 w-6 bg-stone-200 rounded"></div>
              <div className="h-1 w-7 bg-stone-200 rounded"></div>
            </div>

            {/* Mock Chart Container */}
            <div className="border border-stone-100 rounded-lg p-2 bg-stone-50/50 mt-3 flex flex-col items-center">
              <div className="text-[7px] font-semibold text-stone-500 mb-2">Comparative Performance Metrics</div>
              <div className="w-full flex items-end justify-center gap-2 h-14 pb-1.5 px-1 border-b border-stone-200">
                {/* 5 bars */}
                <div className="w-2.5 bg-red-500 rounded-t-sm transition-all hover:opacity-85" style={{ height: '80%' }}></div>
                <div className="w-2.5 bg-emerald-500 rounded-t-sm transition-all hover:opacity-85" style={{ height: '95%' }}></div>
                <div className="w-2.5 bg-stone-300 rounded-t-sm transition-all hover:opacity-85" style={{ height: '65%' }}></div>
                <div className="w-2.5 bg-stone-300 rounded-t-sm transition-all hover:opacity-85" style={{ height: '55%' }}></div>
                <div className="w-2.5 bg-stone-300 rounded-t-sm transition-all hover:opacity-85" style={{ height: '40%' }}></div>
              </div>
              
              {/* Legends */}
              <div className="flex justify-between w-full mt-1 px-1">
                <div className="h-1 w-2 bg-red-400 rounded-full"></div>
                <div className="h-1 w-2 bg-emerald-400 rounded-full"></div>
                <div className="h-1 w-2 bg-stone-300 rounded-full"></div>
                <div className="h-1 w-2 bg-stone-300 rounded-full"></div>
                <div className="h-1 w-2 bg-stone-300 rounded-full"></div>
              </div>
            </div>

            {/* Tiny text block representing two columns */}
            <div className="grid grid-cols-2 gap-2.5 mt-3.5">
              <div className="space-y-1">
                <div className="h-0.5 bg-stone-200 w-full rounded"></div>
                <div className="h-0.5 bg-stone-200 w-11/12 rounded"></div>
                <div className="h-0.5 bg-stone-200 w-10/12 rounded"></div>
                <div className="h-0.5 bg-stone-200 w-full rounded"></div>
              </div>
              <div className="space-y-1">
                <div className="h-0.5 bg-stone-200 w-full rounded"></div>
                <div className="h-0.5 bg-stone-200 w-10/12 rounded"></div>
                <div className="h-0.5 bg-stone-200 w-11/12 rounded"></div>
                <div className="h-0.5 bg-stone-200 w-full rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
