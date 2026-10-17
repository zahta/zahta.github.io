const siteUrl = "https://zahta.github.io";

const pages = [
  {
    route: "/",
    file: "home.html",
    title: "Zahra Taheri | Applied AI Engineer & Researcher",
    description: "Applied machine-learning engineering across computer vision, graph learning, and LLM systems, with evaluation and reliability built into the work.",
    keywords: ["Applied AI Engineer", "Machine Learning", "Computer Vision", "LLM Systems", "Research", "RAG"],
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
    description: "A confidential, production-facing computer-vision workflow for multi-view musculoskeletal assessment, based on the supplied CV.",
    keywords: ["Computer Vision", "Pose Estimation", "Musculoskeletal Assessment", "Applied AI", "Medical AI"],
  },
  {
    route: "/projects/llm-systems-lab/",
    file: "llm-systems-lab.html",
    title: "LLM Systems Lab | Zahra Taheri",
    description: "An active-development RAG engineering project focused on retrieval quality, deterministic evaluation, traceability, and maintainable systems.",
    keywords: ["RAG", "LLM Systems", "Retrieval Evaluation", "ChromaDB", "Semantic Search", "Ollama"],
  },
  {
    route: "/projects/funqg/",
    file: "funqg.html",
    title: "FunQG Research | Zahra Taheri",
    description: "Collaborative, shared-first-author research on functional-group-based molecular graph coarsening and quotient-graph learning.",
    keywords: ["FunQG", "Graph Neural Networks", "Molecular Property Prediction", "Quotient Graphs", "Research"],
  },
  {
    route: "/research/",
    file: "research.html",
    title: "Research & Publications | Zahra Taheri",
    description: "Research across graph machine learning, molecular property prediction, knowledge graphs, healthcare AI, and computational graph theory.",
    keywords: ["Machine Learning Research", "Graph Neural Networks", "FunQG", "Knowledge Graphs", "Publications"],
  },
  {
    route: "/teaching/",
    file: "teaching.html",
    title: "Teaching & Mentoring | Zahra Taheri",
    description: "Verified postgraduate teaching, graduate-level instruction, and M.Sc. project supervision in graph learning and machine learning.",
    keywords: ["Graduate Teaching", "Graph Neural Networks", "Machine Learning", "Student Supervision", "Mentoring"],
  },
  {
    route: "/about/",
    file: "about.html",
    title: "About Zahra Taheri | Applied AI & Mathematics",
    description: "A professional profile connecting mathematical training, machine-learning research, and applied AI engineering.",
    keywords: ["Zahra Taheri", "Applied AI", "PhD Mathematics", "Machine Learning Engineer", "Research"],
  },
  {
    route: "/contact/",
    file: "contact.html",
    title: "Contact | Zahra Taheri",
    description: "Contact Zahra Taheri about applied AI engineering, research collaboration, postgraduate teaching, or technical mentorship.",
    keywords: ["Contact Zahra Taheri", "AI Engineer", "Research Collaboration", "Applied AI", "Europe"],
  },
];

const navigation = [
  { label: "Projects", route: "/projects/" },
  { label: "Research", route: "/research/" },
  { label: "Teaching", route: "/teaching/" },
  { label: "About", route: "/about/" },
  { label: "Contact", route: "/contact/" },
];

module.exports = {
  siteUrl,
  siteName: "Zahra Taheri — Applied AI & Research",
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
