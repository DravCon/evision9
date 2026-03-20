import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Evision9 is an independent app studio based in India, building thoughtful iOS apps that solve real problems.",
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      <section className="pt-32 pb-20 px-6 max-w-3xl mx-auto">
        <h1
          className="text-[clamp(36px,5vw,52px)] text-brand-navy mb-6"
          style={{ fontFamily: "'Dela Gothic One', cursive" }}
        >
          About Evision9
        </h1>

        <div className="space-y-6 text-lg text-brand-navy/55 leading-8">
          <p>
            Evision9 is an independent app studio based in India. We believe the
            best software comes from genuine curiosity, deep empathy for users,
            and a refusal to settle for &ldquo;good enough.&rdquo;
          </p>

          <p>
            Every app we build starts with a simple question:{" "}
            <span className="text-brand-deep-orange font-semibold">
              &ldquo;What if this was delightful?&rdquo;
            </span>{" "}
            That question drives us to obsess over the details — from the first
            tap to the last pixel.
          </p>

          <p>
            We craft iOS apps that are thoughtful, well-designed, and solve
            problems people actually have. No bloat. No dark patterns. No
            tracking. Just tools that feel right.
          </p>
        </div>

        {/* Values */}
        <div className="mt-16">
          <h2
            className="text-2xl text-brand-navy mb-8"
            style={{ fontFamily: "'Dela Gothic One', cursive" }}
          >
            What We Believe
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: "Fewer, better apps",
                desc: "We'd rather build three great apps than thirty mediocre ones. Quality over quantity, always.",
                color: "#FF6B35",
              },
              {
                title: "Privacy by default",
                desc: "Your data is yours. Our apps don't track, don't sell, and don't surveil. Period.",
                color: "#E84393",
              },
              {
                title: "Delightful details",
                desc: "The little things matter — a smooth animation, a thoughtful empty state, a smart default.",
                color: "#0984E3",
              },
              {
                title: "Honest software",
                desc: "No dark patterns, no manipulative notifications, no artificial urgency. Just useful tools.",
                color: "#7B5EA7",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="p-6 rounded-2xl bg-gray-50 border border-black/[0.04]"
              >
                <div
                  className="w-2 h-2 rounded-full mb-4"
                  style={{ background: value.color }}
                />
                <h3
                  className="text-lg text-brand-navy mb-2"
                  style={{ fontFamily: "'Dela Gothic One', cursive" }}
                >
                  {value.title}
                </h3>
                <p className="text-[15px] text-brand-navy/45 leading-6">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 flex justify-center">
          <div className="inline-flex gap-12 px-12 py-9 rounded-2xl bg-gray-50 border border-black/[0.04]">
            {[
              { num: "2+", label: "Apps" },
              { num: "2025", label: "Founded" },
              { num: "India", label: "Based In" },
              { num: "∞", label: "Curiosity" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-3xl bg-gradient-to-r from-brand-orange via-brand-magenta to-brand-blue bg-clip-text text-transparent"
                  style={{ fontFamily: "'Dela Gothic One', cursive" }}
                >
                  {stat.num}
                </div>
                <div className="text-[12px] text-brand-navy/35 uppercase tracking-wider font-semibold mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
