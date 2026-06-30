export function Breadcrumb() {
  return (
    <nav className="text-xs sm:text-sm font-semibold py-4" aria-label="Breadcrumb font-sans">
      <ol className="inline-flex items-center space-x-1.5 text-neutral-500">
        <li className="inline-flex items-center">
          <a href="#" className="text-[#F04D22] hover:text-black transition-colors font-bold">
            Home
          </a>
        </li>
        <li className="inline-flex items-center">
          <span className="text-neutral-400 font-light text-xs mx-1">&gt;</span>
          <a href="#" className="text-[#F04D22] hover:text-black transition-colors font-bold">
            Language Models
          </a>
        </li>
        <li className="inline-flex items-center" aria-current="page">
          <span className="text-neutral-400 font-light text-xs mx-1">&gt;</span>
          <span className="text-black font-bold">Agentic AI</span>
        </li>
      </ol>
    </nav>
  );
}
