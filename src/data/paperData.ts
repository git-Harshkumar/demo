export interface Author {
  name: string;
  img: string;
}

export const authors: Author[] = [
  { name: "Zai Dong", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=ZaiDong" },
  { name: "Yuhang Zang", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=YuhangZang" },
  { name: "Yuxuan Song", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=YuxuanSong" },
  { name: "Jianren Wang", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=JianrenWang" },
  // 18 additional mock authors to justify "+18 authors" badge
  ...Array.from({ length: 18 }, (_, i) => ({
    name: `Team Member ${i + 1}`,
    img: `https://api.dicebear.com/7.x/avataaars/svg?seed=team${i}`
  }))
];

export const bibtex = `@misc{paper83636,
  title={GLM-5.1: Towards Long-Horizon Tasks},
  author={Zai Dong and Yuhang Zang and Yuxuan Song and Jianren Wang and others},
  year={2026},
  url={https://arxiv.org/abs/2504.xxxxxx}
}`;

export const aiSummary = "GLM-5.1 is Z.ai's next-generation flagship model for agentic engineering and long-horizon tasks. It achieves state-of-the-art performance across coding, reasoning, and agent benchmarks through a novel Mixture-of-Experts architecture, enhanced tool use, and long-context understanding. Extensive evaluations on SWE-Bench Pro, GPQA Diamond, HLE, BrowseComp, and more demonstrate its superior capability in real-world agentic scenarios.";

export const abstractShort = "GLM-5.1 is Z.ai's next-generation flagship model for agentic engineering and long-horizon tasks. The release reports stronger coding and agentic performance than GLM-5, including results on SWE-Bench Pro, NL2Repo, Terminal-Bench 2.0, BrowseComp, HLE, GPQA Diamond, and MCP-Atlas.";
export const abstractRest = " It emphasizes sustained optimization across extended tool-use runs, including verification, reflection, and dynamic planning. GLM-5.1 introduces improvements in reasoning, coding, and generalization, with significant enhancements in long-context understanding and multi-step tool use, demonstrating robust performance on real-world agentic scenarios that require sustained, multi-turn interaction with external environments.";

export const taskTags = [
  "Agentic AI",
  "Coding Agents",
  "Language Modeling",
  "Reasoning",
  "World Knowledge",
  "Long Horizon Planning",
  "Autonomous Systems",
  "Tool Use",
];

export const methodTags = [
  "Mixture of Experts (MoE)",
  "Sparse Attention",
  "Sliding Window Attention",
  "Transformer",
  "RLHF",
  "MCP",
  "Reinforcement Learning",
  "Tool Calling",
];

export interface BenchmarkItem {
  name: string;
  metric: string;
  score: string;
  rank: string;
  compareUrl: string;
}

export const benchmarks: BenchmarkItem[] = [
  { name: "SWE Bench Pro", metric: "Resolved", score: "69.0", rank: "#6", compareUrl: "#" },
  { name: "GPQA Diamond", metric: "Accuracy", score: "86.2", rank: "#25", compareUrl: "#" },
  { name: "Humanity's Last Exam (HLE)", metric: "Accuracy", score: "52.3", rank: "#10", compareUrl: "#" },
  { name: "Terminal Bench 2.0", metric: "Accuracy", score: "63.5", rank: "#14", compareUrl: "#" },
  { name: "BrowseComp", metric: "Score", score: "58.7", rank: "#8", compareUrl: "#" },
  { name: "MCP-Atlas", metric: "Success Rate", score: "71.5", rank: "#12", compareUrl: "#" },
  { name: "MMLU Pro", metric: "Accuracy", score: "89.2", rank: "#18", compareUrl: "#" },
  { name: "HumanEval+", metric: "Pass@1", score: "94.2", rank: "#15", compareUrl: "#" },
  { name: "NL2Repo", metric: "Pass@1", score: "48.7", rank: "#9", compareUrl: "#" },
  { name: "GLM-5 Base", metric: "Accuracy", score: "72.1", rank: "#11", compareUrl: "#" }
];

export interface RelatedPaperItem {
  title: string;
  arxiv: string;
  citations: string;
}

export const relatedPapers: RelatedPaperItem[] = [
  { title: "GLM-5: From Vibe Coding to Agentic Engineering", arxiv: "arXiv:2501.XXXXX", citations: "3,912" },
  { title: "DeepSeek-R2: Mastering Long-Horizon Agentic Tasks", arxiv: "arXiv:2503.XXXXX", citations: "2,781" },
  { title: "Kimi K2: Scaling Reinforcement Learning for Agents", arxiv: "arXiv:2503.XXXXX", citations: "1,942" },
  { title: "Gemini 2.5 Pro: Thinking Ahead with Advanced Reasoning", arxiv: "arXiv:2502.XXXXX", citations: "4,821" },
  { title: "Claude 3.7: Agentic Capabilities through Reasoning", arxiv: "arXiv:2501.XXXXX", citations: "2,113" },
  { title: "AgentBench: Evaluating Language Models as Agents", arxiv: "arXiv:2402.XXXXX", citations: "1,876" },
  { title: "BrowseComp: Benchmarking Web Browsing Agents", arxiv: "arXiv:2404.XXXXX", citations: "567" },
  { title: "MCP-Atlas: Benchmarking Multi-Context Agents", arxiv: "arXiv:2405.XXXXX", citations: "423" },
  { title: "SWE-Bench: Can LLMs Solve Real GitHub Issues?", arxiv: "arXiv:2401.XXXXX", citations: "2,456" }
];

export const paperMeta = {
  title: "GLM-5.1: Towards Long-Horizon Tasks",
  arxivId: "arXiv:2504.XXXXXX",
  published: "Apr 7, 2026",
  citations: "5,364",
  overallRank: "#12",
  llmRank: "#3",
  stars: "5.7k",
  githubUrl: "https://github.com/zai-org/glm-5.1",
  arxivUrl: "https://arxiv.org/abs/2504.XXXXXX",
  pdfUrl: "https://arxiv.org/pdf/2504.XXXXXX.pdf",
  abstractShort: "GLM-5.1 is Z.ai's next-generation flagship model for agentic engineering and long-horizon tasks. The release reports stronger coding and agentic performance than GLM-5, including results on SWE-Bench Pro, NL2Repo, Terminal-Bench 2.0, BrowseComp, HLE, GPQA Diamond, and MCP-Atlas.",
};
