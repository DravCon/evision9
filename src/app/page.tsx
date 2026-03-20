import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppCard from "@/components/AppCard";
import { apps } from "@/lib/data";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-28 pb-20 relative overflow-hidden">
        {/* Gradient blobs */}
        <div className="absolute -top-[15%] -left-[10%] w-[600px] h-[600px] rounded-full blur-[90px] animate-[float1_8s_ease-in-out_infinite]"
          style={{ background: "radial-gradient(circle, rgba(255,107,53,0.1) 0%, transparent 70%)" }} />
        <div className="absolute -bottom-[10%] -right-[10%] w-[500px] h-[500px] rounded-full blur-[90px] animate-[float2_10s_ease-in-out_infinite]"
          style={{ background: "radial-gradient(circle, rgba(232,67,147,0.08) 0%, transparent 70%)" }} />
        <div className="absolute top-[30%] right-[15%] w-[400px] h-[400px] rounded-full blur-[90px] animate-[float3_12s_ease-in-out_infinite]"
          style={{ background: "radial-gradient(circle, rgba(247,201,72,0.1) 0%, transparent 70%)" }} />

        <div className="animate-[fadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_0.2s_both]">
          <div className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/[0.08] border border-brand-orange/[0.18] mb-6">
            <span className="text-brand-deep-orange text-[13px] font-bold uppercase tracking-widest">
              Apps that matter
            </span>
          </div>
        </div>

        <h1
          className="text-[clamp(48px,8vw,96px)] leading-[1.05] text-brand-navy mb-6 max-w-[900px] animate-[fadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_0.4s_both]"
          style={{ fontFamily: "'Dela Gothic One', cursive" }}
        >
          We build apps
          <br />
          <span className="bg-gradient-to-r from-brand-orange via-brand-magenta to-brand-blue bg-clip-text text-transparent">
            people love
          </span>
        </h1>

        <p className="text-[clamp(16px,2vw,20px)] text-brand-navy/50 max-w-[560px] leading-7 mb-12 animate-[fadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_0.6s_both]">
          Evision9 crafts thoughtful, beautiful apps that solve real problems.
          From giving away household items to tools you&apos;ll use every day.
        </p>

        <div className="flex gap-4 animate-[fadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_0.8s_both]">
          <a
            href="#products"
            className="px-8 py-3.5 rounded-xl text-white font-bold text-[15px] no-underline transition-all hover:-translate-y-0.5 hover:shadow-xl"
            style={{
              background: "linear-gradient(135deg, #FF6B35, #E84393)",
              boxShadow: "0 4px 24px rgba(255,107,53,0.25)",
            }}
          >
            Explore Our Apps
          </a>
          <Link
            href="/about"
            className="px-8 py-3.5 rounded-xl text-brand-navy font-semibold text-[15px] no-underline bg-brand-navy/[0.04] border border-brand-navy/10 hover:bg-brand-navy/[0.07] hover:border-brand-navy/[0.18] transition-all"
          >
            About Us
          </Link>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="px-6 pb-28 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-[clamp(32px,5vw,48px)] text-brand-navy mb-4"
            style={{ fontFamily: "'Dela Gothic One', cursive" }}
          >
            Our Apps
          </h2>
          <p className="text-[17px] text-brand-navy/45 max-w-[480px] mx-auto leading-7">
            Each app is crafted with care, designed to solve a real problem, and
            built to delight.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app) => (
            <AppCard key={app.slug} app={app} />
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="px-6 pb-28 max-w-3xl mx-auto text-center">
        <h2
          className="text-[clamp(32px,5vw,48px)] text-brand-navy mb-6"
          style={{ fontFamily: "'Dela Gothic One', cursive" }}
        >
          About Evision9
        </h2>
        <p className="text-lg text-brand-navy/50 leading-8 mb-8">
          We&apos;re a small, independent studio that believes great software comes
          from genuine curiosity and a refusal to settle. Every app we build
          starts with a simple question:{" "}
          <span className="text-brand-deep-orange font-semibold">
            &ldquo;What if this was delightful?&rdquo;
          </span>
        </p>

        <div className="inline-flex gap-12 px-12 py-9 rounded-2xl bg-gray-50 border border-black/[0.04]">
          {[
            { num: "2+", label: "Apps" },
            { num: "2025", label: "Founded" },
            { num: "∞", label: "Curiosity" },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                className="text-4xl bg-gradient-to-r from-brand-orange via-brand-magenta to-brand-blue bg-clip-text text-transparent"
                style={{ fontFamily: "'Dela Gothic One', cursive" }}
              >
                {stat.num}
              </div>
              <div className="text-[13px] text-brand-navy/35 uppercase tracking-wider font-semibold mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
