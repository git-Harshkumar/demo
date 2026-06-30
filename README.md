# 🚀 Frontier Atlas - Paper Detail Page

Frontier Atlas is a high-fidelity, interactive, and premium web application designed for exploring AI research publications. The page showcases advanced model achievements, SOTA rankings, and comprehensive benchmarks in a structured, visual-first format.

This repository features the paper detail interface for **GLM-5.1: Towards Long-Horizon Tasks**, designed to match the premium aesthetics of the Frontier Atlas system.

---

## ✨ Features

- **Premium Navigation Header**: Features a custom logo, interactive search bar with shortcut key indicators (`⌘ K` / `Ctrl K`), responsive navigation links, bookmarks action, and profile controls.
- **Hero Detail Section**: Displays essential metadata (arXiv IDs, publication dates, and citations), action buttons (PDF view, arXiv page redirect, star-tracked GitHub repository link), leaderboard ranking badges, and inline author list.
- **Visual Paper Preview**: Built using responsive CSS/SVG, this miniature representation replicates the first page of a scientific document, including formatted headings, columns, and comparative bar charts.
- **AI-Generated Summary Card**: A highlighted container utilizing orange color scales and a detailed SVG brain neural-network illustration.
- **One-Click BibTeX copy**: Allows immediate clipboard copy of citation logs with real-time checkmark button state changes.
- **Interactive Benchmarks Grid**: Features collapsible inline tables enabling the toggling of view ranges between top metrics and full lists.
- **Related Papers Carousel**: A scrollable carousel containing reference cards that expands into a full-scale search modal with real-time title/arXiv search.
- **Glassmorphism Overlay Modals**: Premium modals constructed with blur transitions, modal zoom animations, and body scroll locking.

---

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite (TypeScript configuration)
- **Styling**: Tailwind CSS & Vanilla Custom CSS Rules
- **Icons**: Lucide React
- **Avatars**: Dicebear (Avataaars API)

---

## 📁 Directory Structure

```text
├── index.html                  # Root entry HTML, holds fonts and global scrollbar styles
├── package.json                # Project dependencies and script runner configurations
├── vite.config.ts              # Vite configurations and path alias setups
├── tsconfig.json               # TypeScript configurations
└── src/
    ├── App.tsx                 # Core App root component
    ├── main.tsx                # App initializer mount script
    ├── hooks/
    │   └── useCopy.ts          # State utility hooks for clipboard actions
    ├── data/
    │   └── paperData.ts        # Database structure for mock paper papers & scores
    └── components/
        ├── Navbar.tsx          # Top navigation panel
        ├── Breadcrumb.tsx      # Hierarchical breadcrumb navigation trails
        ├── PaperHeader.tsx     # Hero details card containing the PDF and GitHub metrics
        ├── CitationCard.tsx    # Monospaced BibTeX citation card with copy function
        ├── AISummaryCard.tsx   # AI-generated bullet summaries and neural SVG schematic
        ├── Abstract.tsx        # Expanded abstract section with expand link toggles
        ├── Tags.tsx            # Side-by-side grids dividing Tasks and Methods pills
        ├── Benchmarks.tsx      # Table grid representing performance results
        └── RelatedPapers.tsx   # Reference paper sliders and overlay modal card list
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18 or above is recommended).

### Installation

Clone the project and install local dependencies:

```bash
# Install NPM dependencies
npm install
```

### Run Locally

Spin up the local development server:

```bash
# Run local Vite compiler server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### Build for Production

Compile and bundle assets for optimized production hosting:

```bash
# Build production bundle
npm run build
```
