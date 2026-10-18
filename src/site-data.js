const siteUrl = "https://zahta.github.io";

const pages = [
  {
    route: "/",
    file: "home.html",
    title: "Zahra Taheri, Ph.D. | Applied AI Engineer · Computer Vision & ML Systems",
    description: "Applied AI engineer with a Ph.D. in Mathematics, industry computer vision ownership, modular RAG systems, and research-driven technical problem solving.",
    keywords: ["Applied AI Engineer", "Machine Learning", "Computer Vision", "ML Systems", "RAG", "Mathematics"],
  },
  {
    route: "/projects/",
    file: "projects.html",
    title: "Selected Projects | Zahra Taheri",
    description: "Selected applied AI, computer-vision, LLM/RAG, and graph machine-learning work, with clear evidence and contribution boundaries.",
    keywords: ["AI projects", "Computer Vision", "RAG", "Graph Machine Learning", "Applied Research"],
  },
  {
    route: "/projects/clinical-vision/",
    file: "clinical-vision.html",
    title: "Multi-view Computer Vision | Zahra Taheri",
    description: "Engineering case study: sole AI engineer developing computer vision workflows for a production-facing musculoskeletal assessment application.",
    keywords: ["Computer Vision", "Pose Estimation", "Musculoskeletal Assessment", "Applied AI", "Medical AI"],
  },
  {
    route: "/projects/llm-systems-lab/",
    file: "llm-systems-lab.html",
    title: "LLM Systems Lab | Zahra Taheri",
    description: "Open-source modular RAG system with document ingestion, retrieval, configurable LLM inference, evaluation, observability, and tests.",
    keywords: ["RAG", "LLM Systems", "Retrieval Evaluation", "ChromaDB", "Semantic Search", "Ollama"],
  },
  {
    route: "/projects/funqg/",
    file: "funqg.html",
    title: "FunQG · Graph ML & Mathematical Reasoning | Zahra Taheri",
    description: "Collaborative, shared-first-author research on functional-group-based molecular graph coarsening and quotient-graph learning.",
    keywords: ["FunQG", "Graph Neural Networks", "Molecular Property Prediction", "Quotient Graphs", "Research"],
  },
  {
    route: "/projects/ai-systems-engineering/",
    file: "ai-systems-engineering.html",
    title: "AI Systems Engineering — In Progress | Zahra Taheri",
    description: "Private ongoing project exploring FastAPI, Docker, RAG, orchestration, agentic AI, MCP, and CI/CD, with planned scope clearly marked.",
    keywords: ["AI Systems Engineering", "FastAPI", "Docker", "RAG", "Agentic AI", "MCP"],
  },
  {
    route: "/experience/",
    file: "experience.html",
    title: "Experience & Education | Zahra Taheri",
    description: "Applied AI engineering, graph ML research, graduate teaching, and Ph.D. mathematics background of Zahra Taheri.",
    keywords: ["Applied AI", "Computer Vision", "AI Engineering", "PhD Mathematics", "Experience"],
  },
  {
    route: "/research/",
    file: "research.html",
    title: "Research & Publications | Zahra Taheri",
    description: "Research foundations supporting practical ML engineering: graph learning, molecular prediction, knowledge graphs, and healthcare AI.",
    keywords: ["Machine Learning Research", "Graph Neural Networks", "FunQG", "Knowledge Graphs", "Publications"],
  },
  {
    route: "/teaching/",
    file: "teaching.html",
    title: "Teaching & Mentoring | Zahra Taheri",
    description: "Graduate-level teaching and M.Sc. project supervision in graph learning and machine learning.",
    keywords: ["Graduate Teaching", "Graph Neural Networks", "Machine Learning", "Student Supervision", "Mentoring"],
  },
  {
    route: "/about/",
    file: "about.html",
    title: "About | Applied AI Engineer & Mathematical Thinking",
    description: "Applied AI engineer with analytical problem solving, industry computer vision, LLM systems, a Mathematics Ph.D., and mentoring experience.",
    keywords: ["Zahra Taheri", "Applied AI", "PhD Mathematics", "Machine Learning Engineer", "Research"],
  },
  {
    route: "/contact/",
    file: "contact.html",
    title: "Contact | Zahra Taheri",
    description: "Contact Zahra Taheri about applied AI engineering, technical collaboration and AI systems development.",
    keywords: ["Contact Zahra Taheri", "Applied AI Engineer", "ML Systems", "Computer Vision"],
  },
];

const navigation = [
  { label: "Projects", route: "/projects/" },
  { label: "Experience", route: "/experience/" },
  { label: "About", route: "/about/" },
  { label: "Research", route: "/research/" },
  { label: "Mentoring", route: "/teaching/" },
  { label: "Contact", route: "/contact/" },
];

module.exports = {
  siteUrl,
  siteName: "Zahra Taheri — Applied AI Engineering",
  socialImage: `${siteUrl}/assets/images/zahra-portrait.webp`,
  pages,
  navigation,
  person: {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Zahra Taheri",
    url: siteUrl,
    jobTitle: "Applied Machine Learning Engineer",
    sameAs: ["https://github.com/zahta", "https://www.linkedin.com/in/zahta"],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of Isfahan",
    },
    knowsAbout: [
      "Applied AI",
      "Computer vision",
      "Machine learning",
      "Graph neural networks",
      "Retrieval-augmented generation",
      "Mathematics",
    ],
  },
};
