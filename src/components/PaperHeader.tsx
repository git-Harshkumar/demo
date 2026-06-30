import { Github, FileText, ExternalLink, Calendar, Bookmark, FileDown, TrendingUp } from "lucide-react";
import { paperMeta, authors } from "@/data/paperData";

export function PaperHeader() {
  const visibleAuthors = authors.slice(0, 4);

  return (
    <div className="bg-white rounded-xl border border-neutral-200 p-6 md:p-8 shadow-sm transition-all hover:shadow-md">
      <div className="space-y-4.5">
        {/* arXiv ID pill with monospaced tag */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded border border-neutral-200 bg-[#F5F5F5] text-xs font-mono font-bold text-neutral-800">
          <FileText className="w-3.5 h-3.5" />
          arxiv:2504.XXXXXX
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight leading-tight">
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
        <div className="flex flex-wrap items-center gap-2 pt-1.5">
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
            className="inline-flex items-center gap-2 px-4 py-2 border border-black rounded-lg text-xs font-extrabold text-black bg-white hover:bg-neutral-50 transition-all"
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
            className="inline-flex items-center gap-2 px-4 py-2 border border-black rounded-lg text-xs font-extrabold text-black bg-white hover:bg-neutral-50 transition-all"
          >
            <Github className="w-4 h-4 text-neutral-700" />
            GitHub ★ {paperMeta.stars}
          </a>

          {/* Save Button - White with thin border */}
          <button className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-300 rounded-lg text-xs font-extrabold text-neutral-700 bg-white hover:bg-neutral-50 hover:border-black transition-all">
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
                  className="w-7 h-7 rounded-full border border-neutral-200 shadow-sm object-cover"
                />
                <span className="text-xs font-bold text-neutral-800">{author.name}</span>
              </div>
            ))}
            <span className="inline-flex items-center px-2.5 py-1 rounded bg-[#F5F5F5] border border-neutral-200 text-[10px] font-extrabold text-neutral-700">
              +18 authors
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
