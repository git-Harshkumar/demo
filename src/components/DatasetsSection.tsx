import { Database, ExternalLink, FileText } from "lucide-react";
import { datasetsList } from "@/data/paperData";

export function DatasetsSection() {
  return (
    <section className="bg-white rounded-xl border border-neutral-200 p-5 shadow-sm transition-all hover:shadow-md space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#F5F5F5] border border-neutral-200 text-black">
          <Database className="w-4.5 h-4.5" />
        </div>
        <h3 className="text-sm font-bold text-black tracking-tight">Benchmark Datasets</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {datasetsList.map((dataset) => (
          <article
            key={dataset.name}
            className="p-4 rounded-xl border border-neutral-200 bg-white hover:border-[#F04D22] transition-colors flex flex-col justify-between h-[135px] group/card"
          >
            <div>
              <div className="flex items-start justify-between gap-3">
                <h4 className="text-sm font-bold text-black group-hover/card:text-[#F04D22] transition-colors">
                  {dataset.name}
                </h4>
                <a
                  href={dataset.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 rounded text-neutral-400 hover:text-[#F04D22] hover:bg-[#F5F5F5] transition-all"
                  aria-label={`Visit dataset page`}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <p className="text-xs text-neutral-500 line-clamp-2 mt-1.5 leading-relaxed font-medium">
                {dataset.description}
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-[10px] font-extrabold text-neutral-400 uppercase tracking-wider mt-auto border-t border-neutral-100 pt-2.5">
              <FileText className="w-3.5 h-3.5 text-neutral-400" />
              Used in {dataset.papersCount} papers
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
