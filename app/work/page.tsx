const projects = [
  {
    id: 1,
    title: "Brand Identity",
    category: "Branding",
    year: "2024",
    description:
      "Full visual identity system including logo, typography, color palette, and comprehensive brand guidelines for a boutique hospitality brand.",
    tags: ["Logo Design", "Brand System", "Typography", "Guidelines"],
    color: "#E8E4DF",
  },
  {
    id: 2,
    title: "Digital Campaign",
    category: "Visual Design",
    year: "2024",
    description:
      "Art direction and design for a multi-platform digital campaign spanning social media, display advertising, and email — achieving a 40% engagement lift.",
    tags: ["Art Direction", "Social Media", "Display Ads", "Email"],
    color: "#DFE4E8",
  },
  {
    id: 3,
    title: "Product UI",
    category: "UI/UX",
    year: "2023",
    description:
      "End-to-end product design for a SaaS analytics platform — from discovery and user research through wireframes, prototypes, and production-ready specs.",
    tags: ["Product Design", "User Research", "Figma", "Design System"],
    color: "#E4DFE8",
  },
  {
    id: 4,
    title: "Editorial Design",
    category: "Print",
    year: "2023",
    description:
      "Print and digital editorial layout for an annual report — translating complex data into clear, beautiful visual narratives.",
    tags: ["Layout", "Print", "Data Visualization", "InDesign"],
    color: "#E8EAE0",
  },
  {
    id: 5,
    title: "Packaging System",
    category: "Packaging",
    year: "2022",
    description:
      "Sustainable packaging design and system for a consumer wellness brand, balancing shelf impact with environmental responsibility.",
    tags: ["Packaging", "3D Mockup", "Illustration", "Sustainability"],
    color: "#EAE0E8",
  },
  {
    id: 6,
    title: "Website Redesign",
    category: "UI/UX",
    year: "2022",
    description:
      "Strategic redesign of a nonprofit's digital presence — improving accessibility, conversion, and storytelling across 30+ pages.",
    tags: ["Web Design", "Accessibility", "Content Strategy", "Figma"],
    color: "#E0E8EA",
  },
];

export default function WorkPage() {
  return (
    <div className="px-6 md:px-12 py-16 md:py-20">
      {/* Header */}
      <div className="max-w-2xl mb-14">
        <p className="section-label">Work</p>
        <h1
          className="mt-4 text-3xl md:text-5xl font-light leading-tight"
          style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
        >
          Selected Projects
        </h1>
        <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          A curated selection of design work across brand, digital, and print.
        </p>
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            id={`project-${project.id}`}
            className="project-card"
          >
            <div
              className="w-full aspect-[16/9] flex items-end p-6"
              style={{ background: project.color }}
            >
              <span className="section-label">{project.category}</span>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-lg font-medium" style={{ color: "var(--text-primary)" }}>
                  {project.title}
                </h2>
                <span className="text-xs mt-1" style={{ color: "var(--text-secondary)" }}>
                  {project.year}
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1"
                    style={{
                      background: "var(--bg)",
                      border: "1px solid var(--border)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
