export type ResumeProject = {
  title: string;
  label: string;
  stack: string;
  summary: string;
  outcome: string;
  proof: string;
  liveUrl: string;
  architectureUrl?: string;
  outcomes: readonly string[];
};

export type PortfolioPrinciple = {
  title: string;
  summary: string;
};

export const portfolioBrief = {
  ownerName: "Adriana So",
  role: "AI Systems Builder",
  audience:
    "Early-stage AI startup founder or Head of Product hiring a second or third technical hire.",
  need:
    "They are overwhelmed by repetitive, unstructured work and need reliable systems that convert messy inputs into clear outputs without rethinking each request.",
  signal:
    "Structured, fast, and dependable. The product should feel like an operational engine, not a chatbot experiment.",
  archetype: "Magician",
  claim: "I turn ambiguous problems into structured, reliable AI systems.",
  profiles: {
    linkedin: "https://www.linkedin.com/in/adriana-so-24071219b",
    github: "https://github.com/AdrianaSo123",
  },
  location: "Newark, NJ",
  availability: "Open to AI systems engineering internships and early-stage startup roles",
  headline:
    "I build AI systems that convert messy operational inputs into structured outputs teams can use immediately.",
  intro:
    "My work sits at the intersection of product thinking and AI systems engineering: define ambiguous requirements, design reliable structure, validate outputs, and ship workflows people trust under real constraints.",
  metrics: [
    {
      value: "65K",
      label: "enterprise platform users influenced by structured UX and AI workflow translation",
    },
    {
      value: "$1.5M",
      label: "fundraising initiative supported by deployed workflow clarity and experience design",
    },
    {
      value: "5",
      label: "end-to-end AI systems delivered from ingestion and orchestration to validated outputs",
    },
  ] as const,
  principles: [
    {
      title: "Structure ambiguity early",
      summary:
        "I begin by turning fuzzy requirements into explicit input-output contracts so teams can align before implementation drift starts.",
    },
    {
      title: "Validate outputs, not intentions",
      summary:
        "I build schema checks, tests, and guardrails directly into AI workflows so reliability is measurable instead of assumed.",
    },
    {
      title: "Design for operational handoff",
      summary:
        "My systems are built so engineers, product leads, and operators can all inspect, iterate, and run them without fragile tribal knowledge.",
    },
  ] as const satisfies readonly PortfolioPrinciple[],
  quote: {
    quote:
      "Adriana consistently turned ambiguous business requests into clear, executable workflow structures with strong UX judgment.",
    attribution: "Wakefern leadership feedback",
    role: "UX and AI Systems Internship",
  },
  projects: [
    {
      title: "AI Landscape Intelligence and Monitoring Pipeline",
      label: "Data ingestion and structuring system",
      stack: "Python, OpenAI API, Docker",
      summary:
        "Built a modular ingestion pipeline that extracts and structures AI funding and capital event data from noisy sources.",
      outcome:
        "Enabled repeatable transformation of noisy external signals into analysis-ready structured outputs.",
      proof:
        "Strict JSON schema validation, test-driven iteration loops, and containerized scheduled runs.",
      liveUrl: "https://github.com/AdrianaSo123/ordo_with_scraper",
      architectureUrl: "https://github.com/AdrianaSo123/ordo_with_scraper",
      outcomes: [
        "Implemented LLM processing with strict JSON schema validation and iterative test-driven development for output reliability.",
        "Containerized and scheduled ingestion workflows for reproducible, scalable automation without manual intervention.",
      ],
    },
    {
      title: "UX Research Synthesizer",
      label: "Full-stack AI synthesis platform",
      stack: "Next.js, React, TypeScript, OpenAI GPT-4 API",
      summary:
        "Developed a full-stack UX research synthesis system that transforms unstructured files into structured insights.",
      outcome:
        "Reduced research synthesis from hours to minutes while keeping outputs structured and reviewable.",
      proof:
        "Multi-format ingestion, async processing APIs, persona/theme clustering, and interactive result visualization.",
      liveUrl: "https://so-kind-research.vercel.app",
      architectureUrl: "https://github.com/AdrianaSo123/soKind_research",
      outcomes: [
        "Supported multi-format ingestion (.txt, .docx, .pdf) with async RESTful processing.",
        "Engineered persona generation, theme extraction, and clustering logic to reduce synthesis time from hours to minutes.",
        "Designed an accessible Tailwind-based interface to present outputs through interactive visualizations.",
      ],
    },
    {
      title: "AWS Serverless Operations Pipeline",
      label: "Cloud-native automation system",
      stack: "AWS Lambda, S3, DynamoDB, EventBridge, Python, Terraform",
      summary:
        "Built an AWS serverless pipeline that ingests operational files, validates payloads, and triggers structured downstream processing without manual coordination.",
      outcome:
        "Reduced manual handling bottlenecks and enabled reliable event-driven processing for recurring operations workflows.",
      proof:
        "Infrastructure as code, event-driven orchestration, CloudWatch observability, and schema-based validation at ingestion boundaries.",
      liveUrl: "https://github.com/AdrianaSo123",
      architectureUrl: "https://github.com/AdrianaSo123",
      outcomes: [
        "Implemented event-driven orchestration with EventBridge and Lambda to process uploads automatically from S3 triggers.",
        "Added DynamoDB-backed job state tracking and CloudWatch logging for traceable operations and failure recovery.",
        "Provisioned core infrastructure through Terraform to make deployments reproducible across environments.",
      ],
    },
    {
      title: "So Studio Platform",
      label: "Voice-to-content AI workflow",
      stack: "Swift, Node.js, OpenAI API, Whisper",
      summary:
        "Created an end-to-end system converting voice input to structured blog content with conversational retrieval.",
      outcome:
        "Delivered a working pipeline from raw voice to validated publishable content and guided retrieval.",
      proof:
        "Multi-stage orchestration, suggestion-based chat UX, and authentication-gated admin tooling.",
      liveUrl: "https://so-studio-pi.vercel.app/",
      architectureUrl: "https://github.com/AdrianaSo123/autoSite",
      outcomes: [
        "Engineered a multi-stage pipeline (audio to transcription to LLM to validation to publishing).",
        "Built chat UX with dynamic suggestion chips for guided exploration.",
        "Implemented authentication-gated tool access for admin-only capabilities.",
      ],
    },
    {
      title: "Modular AI Agent Toolkit",
      label: "CLI research and evaluation framework",
      stack: "Python, OpenAI API, Playwright",
      summary:
        "Developed a CLI-based modular toolkit for structured research, standardized evaluations, and artifact capture.",
      outcome:
        "Improved consistency of agent task execution and reduced output variance during experimentation.",
      proof:
        "Scoped delegation logic, structured prompts, and output validation layers to reduce hallucination risk.",
      liveUrl: "https://github.com/AdrianaSo123",
      architectureUrl: "https://github.com/AdrianaSo123",
      outcomes: [
        "Implemented scoped task delegation and structured prompt layers.",
        "Added output validation patterns to improve reliability and reduce hallucination risk.",
      ],
    },
  ] as const satisfies readonly ResumeProject[],
};
