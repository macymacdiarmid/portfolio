"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error || "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <div>
      {status === "success" ? (
        <div
          className="p-8 text-center"
          style={{ border: "1px solid var(--border)", background: "var(--surface)" }}
        >
          <p className="text-base font-medium" style={{ color: "var(--text-primary)" }}>
            Message received.
          </p>
          <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>
            Thanks for reaching out — I&rsquo;ll get back to you within one business day.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="btn-secondary mt-6"
          >
            Send another
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="section-label block mb-2" htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your full name"
              required
              disabled={status === "loading"}
            />
          </div>

          <div>
            <label className="section-label block mb-2" htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              disabled={status === "loading"}
            />
          </div>

          <div>
            <label className="section-label block mb-2" htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="What's this about?"
              required
              disabled={status === "loading"}
            />
          </div>

          <div>
            <label className="section-label block mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell me about your project..."
              rows={6}
              required
              disabled={status === "loading"}
              style={{ resize: "vertical" }}
            />
          </div>

          {status === "error" && (
            <p className="text-sm" style={{ color: "#C0392B" }}>{errorMsg}</p>
          )}

          <button
            type="submit"
            className="btn-primary w-full justify-center"
            disabled={status === "loading"}
            style={{ opacity: status === "loading" ? 0.6 : undefined }}
          >
            {status === "loading" ? "Sending…" : "Send Message"}
          </button>
        </form>
      )}
    </div>
  );
}
