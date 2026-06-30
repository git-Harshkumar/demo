import { taskTags, methodTags } from "@/data/paperData";
import { Pill } from "./Pill";
import { ListChecks, Layers } from "lucide-react";

export function Tags() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Tasks Card */}
      <div className="bg-white rounded-xl border border-neutral-200 p-5 shadow-sm transition-all hover:shadow-md">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#F5F5F5] text-black border border-neutral-200">
              <ListChecks className="w-4.5 h-4.5" />
            </div>
            <h3 className="text-sm font-bold text-black tracking-tight font-sans">Tasks</h3>
          </div>
          <span className="text-[10px] font-bold text-neutral-450 bg-[#F5F5F5] px-2 py-0.5 rounded font-mono border border-neutral-200">
            {taskTags.length} tags
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {taskTags.map((tag) => (
            <Pill key={tag} variant="task" className="px-2.5 py-1 text-xs font-semibold rounded">
              {tag}
            </Pill>
          ))}
        </div>
      </div>

      {/* Methods Card */}
      <div className="bg-white rounded-xl border border-neutral-200 p-5 shadow-sm transition-all hover:shadow-md">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#F04D22]/5 text-[#F04D22] border border-[#F04D22]/20">
              <Layers className="w-4.5 h-4.5" />
            </div>
            <h3 className="text-sm font-bold text-black tracking-tight font-sans">Methods</h3>
          </div>
          <span className="text-[10px] font-bold text-neutral-450 bg-[#F5F5F5] px-2 py-0.5 rounded font-mono border border-neutral-200">
            {methodTags.length} tags
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {methodTags.map((tag) => (
            <Pill key={tag} variant="method" className="px-2.5 py-1 text-xs font-semibold rounded">
              {tag}
            </Pill>
          ))}
        </div>
      </div>
    </section>
  );
}
