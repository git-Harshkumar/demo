export function Breadcrumb() {
  return (
    <nav className="text-xs sm:text-sm font-semibold py-4" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1.5 text-stone-500">
        <li className="inline-flex items-center">
          <a href="#" className="text-red-500 hover:text-red-700 transition-colors">
            Home
          </a>
        </li>
        <li className="inline-flex items-center">
          <span className="text-stone-400 font-light text-xs mx-1">&gt;</span>
          <a href="#" className="text-red-500 hover:text-red-700 transition-colors">
            Language Models
          </a>
        </li>
        <li className="inline-flex items-center" aria-current="page">
          <span className="text-stone-400 font-light text-xs mx-1">&gt;</span>
          <span className="text-stone-700">Agentic AI</span>
        </li>
      </ol>
    </nav>
  );
}
