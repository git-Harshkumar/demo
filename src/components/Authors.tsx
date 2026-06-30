import { authors } from "@/data/paperData";
import { UserPlus } from "lucide-react";

export function Authors() {
  const visibleAuthors = authors.slice(0, 4);
  const remaining = authors.length - 4;

  return (
    <section className="bg-white py-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg font-semibold text-stone-900 mb-4">Authors</h2>
        <div className="flex flex-wrap items-center gap-4">
          {visibleAuthors.map((author, i) => (
            <button
              key={author.name}
              className="flex items-center gap-2 group transition-colors"
              style={{ zIndex: 4 - i }}
            >
              <img
                src={author.img}
                alt={author.name}
                className="w-10 h-10 rounded-full object-cover ring-2 ring-white border border-stone-200 hover:ring-emerald-300 transition-all shadow-sm"
              />
              <span className="text-sm font-medium text-stone-700 group-hover:text-emerald-600 transition-colors">
                {author.name}
              </span>
            </button>
          ))}
          {remaining > 0 && (
            <button className="flex items-center gap-2 px-3 py-1.5 bg-stone-50 border border-stone-200 rounded-full text-sm font-medium text-stone-600 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-600 transition-colors">
              <UserPlus className="w-4 h-4" />
              +{remaining} more authors
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
