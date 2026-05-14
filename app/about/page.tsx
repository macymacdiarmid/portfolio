const skills = [
  { category: "Design", items: ["Brand Identity", "UI/UX Design", "Art Direction", "Motion Design"] },
  { category: "Tools", items: ["Figma", "Adobe Creative Suite", "Webflow", "Framer"] },
  { category: "Strategy", items: ["Brand Strategy", "Content Strategy", "User Research", "Design Systems"] },
];

const experience = [
  {
    role: "Senior Designer",
    company: "Freelance",
    period: "2023 — Present",
    description: "Independent design practice working with brands across hospitality, tech, and consumer goods.",
  },
  {
    role: "Designer",
    company: "Agency Name",
    period: "2021 — 2023",
    description: "Led visual design on campaigns and brand projects for regional and national clients.",
  },
  {
    role: "Junior Designer",
    company: "Studio Name",
    period: "2019 — 2021",
    description: "Supported senior designers on brand identity, print, and digital projects.",
  },
];

export default function AboutPage() {
  return (
    <div className="px-6 md:px-12 py-16 md:py-20">
      <div className="max-w-4xl">
        {/* Header */}
        <p className="section-label">About</p>
        <h1
          className="mt-4 text-3xl md:text-5xl font-light leading-tight"
          style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
        >
          Macy Macdiarmid
        </h1>

        {/* Intro */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <div
              className="w-full aspect-square"
              style={{ background: "#FAC9B8", border: "1px solid var(--border)" }}
            />
          </div>
          <div className="flex flex-col justify-center">
            <p
              className="text-lg md:text-xl font-light leading-relaxed"
              style={{ color: "var(--text-primary)", letterSpacing: "-0.01em" }}
            >
              I&rsquo;m a designer and creative director based in San Luis Obispo, CA.
            </p>
            <p className="mt-5 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              I believe good design starts with good thinking. My process is rooted in
              understanding — the brand, the audience, the context — before a single
              pixel is placed.
            </p>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              I&rsquo;ve had the opportunity to work across industries from hospitality and
              wellness to technology and nonprofits, bringing the same care and craft to
              each project regardless of scale.
            </p>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              When I&rsquo;m not designing, you&rsquo;ll find me hiking the Central Coast,
              reading about typography history, or overanalyzing restaurant menus.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 mb-14" style={{ height: "1px", background: "var(--border)" }} />

        {/* Skills */}
        <div>
          <p className="section-label">Expertise</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((group) => (
              <div key={group.category}>
                <p
                  className="text-xs font-semibold mb-4"
                  style={{ color: "var(--text-primary)", letterSpacing: "0.06em", textTransform: "uppercase" }}
                >
                  {group.category}
                </p>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm" style={{ color: "var(--text-secondary)" }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 mb-14" style={{ height: "1px", background: "var(--border)" }} />

        {/* Experience */}
        <div>
          <p className="section-label">Experience</p>
          <div className="mt-8 space-y-10">
            {experience.map((job) => (
              <div key={job.role + job.company} className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-8">
                <div className="md:col-span-1">
                  <p className="text-xs" style={{ color: "var(--text-secondary)" }}>{job.period}</p>
                </div>
                <div className="md:col-span-3">
                  <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{job.role}</p>
                  <p className="text-xs mt-0.5 mb-2" style={{ color: "var(--text-secondary)" }}>{job.company}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {job.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
