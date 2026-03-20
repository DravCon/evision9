import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppCard from "@/components/AppCard";
import { apps } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

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

      {/* Our Story */}
      <section id="our-story" className="px-6 pb-28 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-[clamp(32px,5vw,48px)] text-brand-navy mb-4"
            style={{ fontFamily: "'Dela Gothic One', cursive" }}
          >
            Our Story
          </h2>
          <p className="text-[17px] text-brand-navy/45 max-w-[480px] mx-auto leading-7">
            A dream that started in 1998, paused, and found its moment again.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Business card */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-black/[0.06] rotate-[-1deg] hover:rotate-0 transition-transform duration-500">
              <Image
                src="/evision9-card.jpg"
                alt="Original Evision9 business card from 1998"
                width={600}
                height={380}
                className="w-full h-auto"
              />
            </div>
            <div className="text-center mt-4">
              <span className="text-[13px] text-brand-navy/30 font-medium tracking-wide">
                The original business card, circa 1998
              </span>
            </div>
          </div>

          {/* Story text */}
          <div className="space-y-5 text-[16.5px] text-brand-navy/60 leading-8">
            <p>
              It was 1998. The web was young, and so were we. Most businesses
              didn&apos;t have a website. Many didn&apos;t see why they&apos;d need one.
              But we saw something bigger: a paradigm shift in how people connect,
              create, and tell their stories.
            </p>
            <p>
              Evision9 was born in that moment. We helped businesses find their
              digital identity, designing websites, building multimedia content,
              and making the internet feel less like a mystery and more like an
              opportunity. One client at a time, we turned skeptics into believers.
            </p>
            <p>
              Then life happened. The startup wound down, but the dream never
              really did.
            </p>
            <p>
              Now, over two decades later, we&apos;re watching it happen again.
              Generative AI isn&apos;t just a new tool. It&apos;s a new language. And just
              like the early web, most people sense its power but aren&apos;t sure
              what to do with it.
            </p>
            <p className="text-brand-navy/70 font-medium">
              That&apos;s where we come in. Again.
            </p>
            <p>
              Evision9 is back. Not as a nostalgia project, but because the world
              needs the same thing it needed in 1998: thoughtful people who can
              bridge the gap between what&apos;s possible and what&apos;s practical.
              We&apos;re building apps that bring the promise of AI into everyday
              life, with the same belief we started with.
            </p>
            <p
              className="text-lg text-brand-deep-orange font-semibold italic"
            >
              That technology should feel like a dream made real.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="flex justify-center gap-16 mt-16 px-8 py-8 rounded-2xl bg-gray-50 border border-black/[0.04]">
          <div className="text-center">
            <div
              className="text-3xl bg-gradient-to-r from-brand-orange to-brand-magenta bg-clip-text text-transparent"
              style={{ fontFamily: "'Dela Gothic One', cursive" }}
            >
              1998
            </div>
            <div className="text-[13px] text-brand-navy/35 uppercase tracking-wider font-semibold mt-1">
              First Dream
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-24 h-[2px] bg-gradient-to-r from-brand-orange/30 to-brand-magenta/30 rounded-full" />
          </div>
          <div className="text-center">
            <div
              className="text-3xl bg-gradient-to-r from-brand-magenta to-brand-blue bg-clip-text text-transparent"
              style={{ fontFamily: "'Dela Gothic One', cursive" }}
            >
              2025
            </div>
            <div className="text-[13px] text-brand-navy/35 uppercase tracking-wider font-semibold mt-1">
              Same Dream, New Tools
            </div>
          </div>
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
            { num: "1998", label: "Founded" },
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
