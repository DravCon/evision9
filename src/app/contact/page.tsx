import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Evision9 team.",
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      <section className="pt-32 pb-20 px-6 max-w-2xl mx-auto">
        <h1
          className="text-[clamp(36px,5vw,52px)] text-brand-navy mb-4"
          style={{ fontFamily: "'Dela Gothic One', cursive" }}
        >
          Get in Touch
        </h1>
        <p className="text-lg text-brand-navy/45 leading-7 mb-12">
          Got feedback, a question, or just want to say hi? We&apos;d love to
          hear from you.
        </p>

        {/* Contact methods */}
        <div className="space-y-4 mb-14">
          {[
            {
              icon: "📧",
              label: "Email",
              value: "hello@evision9.com",
              href: "mailto:hello@evision9.com",
              color: "#FF6B35",
            },
            {
              icon: "🐦",
              label: "Twitter / X",
              value: "@evision9",
              href: "https://twitter.com/evision9",
              color: "#0984E3",
            },
            {
              icon: "💻",
              label: "GitHub",
              value: "github.com/evision9",
              href: "https://github.com/evision9",
              color: "#1A1A2E",
            },
          ].map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={
                contact.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50 border border-black/[0.04] hover:bg-white hover:border-black/[0.08] hover:shadow-md transition-all no-underline group"
            >
              <div className="text-2xl">{contact.icon}</div>
              <div>
                <div className="text-sm text-brand-navy/35 font-medium">
                  {contact.label}
                </div>
                <div className="text-brand-navy group-hover:text-brand-deep-orange transition-colors font-semibold">
                  {contact.value}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Note */}
        <div className="p-6 rounded-2xl bg-brand-orange/[0.04] border border-brand-orange/[0.1]">
          <p className="text-[15px] text-brand-navy/50 leading-6">
            <span className="font-semibold text-brand-deep-orange">
              Support for our apps?
            </span>{" "}
            If you&apos;re having an issue with PassIt or any of our apps, email
            us and we&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
