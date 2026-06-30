import { Github, Star, CheckCircle, Code2, ExternalLink } from "lucide-react";
import { codeImplementations } from "@/data/paperData";

export function CodeSection() {
  return (
    <section className="bg-white rounded-xl border border-neutral-200 p-5 shadow-sm transition-all hover:shadow-md space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#F5F5F5] border border-neutral-200 text-black">
          <Code2 className="w-4.5 h-4.5" />
        </div>
        <h3 className="text-sm font-bold text-black tracking-tight">Code Implementations</h3>
      </div>

      <div className="divide-y divide-neutral-100">
        {codeImplementations.map((impl) => (
          <div
            key={impl.repo}
            className="py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 first:pt-0 last:pb-0 hover:bg-[#F5F5F5]/30 px-2 rounded-lg transition-colors"
          >
            {/* Repo Info */}
            <div className="flex items-start gap-3">
              <div className="p-2 bg-neutral-100 rounded-lg text-neutral-800 border border-neutral-200 mt-0.5">
                <Github className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href={impl.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-black hover:text-[#F04D22] transition-colors inline-flex items-center gap-1"
                  >
                    {impl.repo}
                    <ExternalLink className="w-3 h-3 text-neutral-400" />
                  </a>
                  {impl.isOfficial && (
                    <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded bg-black text-white text-[9px] font-extrabold uppercase tracking-wider">
                      <CheckCircle className="w-2.5 h-2.5 text-[#F04D22]" />
                      Official
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1 text-xs text-neutral-500 font-semibold">
                  <Star className="w-3.5 h-3.5 text-neutral-400 fill-neutral-400" />
                  {impl.stars} stars
                </div>
              </div>
            </div>

            {/* Framework Badge */}
            <div className="flex items-center gap-2 sm:self-center self-start">
              <span
                className={`px-3 py-1 rounded text-xs font-bold border transition-colors ${
                  impl.framework === "PyTorch"
                    ? "bg-[#0052FF]/5 text-[#0052FF] border-[#0052FF]/20"
                    : impl.framework === "TensorFlow"
                    ? "bg-[#FF6F00]/5 text-[#FF6F00] border-[#FF6F00]/20"
                    : "bg-neutral-100 text-neutral-800 border-neutral-200"
                }`}
              >
                {impl.framework}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
