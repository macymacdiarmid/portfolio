import Link from "next/link";

const featuredWork = [
  {
    id: 1,
    title: "Brand Identity",
    category: "Branding",
    year: "2024",
    description: "Full visual identity system including logo, typography, and brand guidelines.",
    color: "#E8E4DF",
  },
  {
    id: 2,
    title: "Digital Campaign",
    category: "Visual Design",
    year: "2024",
    description: "Art direction and design for a multi-platform digital campaign.",
    color: "#DFE4E8",
  },
  {
    id: 3,
    title: "Product UI",
    category: "UI/UX",
    year: "2023",
    description: "End-to-end product design for a SaaS platform from research to delivery.",
    color: "#E4DFE8",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 md:px-12 pt-20 pb-24 md:pt-28 md:pb-32 max-w-5xl">
        <p className="section-label fade-up fade-up-d1">Designer &amp; Creative Director</p>
        <h1
          className="mt-5 text-4xl md:text-6xl font-light leading-tight fade-up fade-up-d2"
          style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
        >
          Crafting intentional
          <br />
          <em style={{ fontStyle: "italic" }}>visual experiences</em>
        </h1>
        <p
          className="mt-6 text-base md:text-lg leading-relaxed max-w-xl fade-up fade-up-d3"
          style={{ color: "var(--text-secondary)" }}
        >
          I design brands, interfaces, and campaigns that feel both purposeful and
          beautiful. Based in San Luis Obispo, working globally.
        </p>
        <div className="mt-10 flex flex-wrap gap-3 fade-up fade-up-d4">
          <Link href="/work" className="btn-primary">View Work</Link>
          <Link href="/contact" className="btn-secondary">Get in Touch</Link>
        </div>
      </section>

      <div className="px-6 md:px-12">
        <div style={{ height: "1px", background: "var(--border)" }} />
      </div>

      {/* Featured work */}
      <section className="px-6 md:px-12 py-20 md:py-24">
        <div className="flex items-center justify-between mb-10">
          <p className="section-label">Selected Work</p>
          <Link
            href="/work"
            className="text-sm"
            style={{ color: "var(--text-secondary)", textDecoration: "none" }}
          >
            All projects →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featuredWork.map((project) => (
            <Link
              key={project.id}
              href={`/work#project-${project.id}`}
              className="project-card group block"
              style={{ textDecoration: "none" }}
            >
              <div
                className="w-full aspect-[4/3] flex items-end p-5"
                style={{ background: project.color }}
              >
                <span className="section-label">{project.category}</span>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between">
                  <h3 className="text-base font-medium" style={{ color: "var(--text-primary)" }}>
                    {project.title}
                  </h3>
                  <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
                    {project.year}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="px-6 md:px-12">
        <div style={{ height: "1px", background: "var(--border)" }} />
      </div>

      {/* About strip */}
      <section className="px-6 md:px-12 py-20 md:py-24 max-w-3xl">
        <p className="section-label">About</p>
        <p
          className="mt-5 text-xl md:text-2xl font-light leading-relaxed"
          style={{ color: "var(--text-primary)", letterSpacing: "-0.01em" }}
        >
          I bring together strategy, craft, and a relentless attention to detail to
          create work that resonates.
        </p>
        <Link href="/about" className="btn-secondary mt-8 w-fit" style={{ display: "inline-flex" }}>
          More about me
        </Link>
      </section>
    </>
  );
}
