import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="px-6 md:px-12 py-16 md:py-20">
      <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20">
        {/* Left col */}
        <div>
          <p className="section-label">Contact</p>
          <h1
            className="mt-4 text-3xl md:text-5xl font-light leading-tight"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
          >
            Let&rsquo;s work
            <br />
            together
          </h1>
          <p className="mt-6 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Whether you have a project in mind or just want to start a conversation,
            I&rsquo;d love to hear from you. I typically respond within one business day.
          </p>

          <div className="mt-10 space-y-4">
            <div>
              <p className="section-label mb-1">Email</p>
              <a
                href="mailto:macygmacdiarmid@gmail.com"
                className="text-sm"
                style={{ color: "var(--text-primary)", textDecoration: "none" }}
              >
                macygmacdiarmid@gmail.com
              </a>
            </div>
            <div>
              <p className="section-label mb-1">Based in</p>
              <p className="text-sm" style={{ color: "var(--text-primary)" }}>
                San Luis Obispo, CA
              </p>
            </div>
            <div>
              <p className="section-label mb-1">Availability</p>
              <p className="text-sm" style={{ color: "var(--text-primary)" }}>
                Open to new projects
              </p>
            </div>
          </div>
        </div>

        {/* Right col — form */}
        <ContactForm />
      </div>
    </div>
  );
}
