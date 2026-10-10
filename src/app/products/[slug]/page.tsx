import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { apps } from "@/lib/data";
import { getAllPosts } from "@/lib/blog";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return apps.map((app) => ({ slug: app.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const app = apps.find((a) => a.slug === params.slug);
  if (!app) return {};
  return {
    title: `${app.name} — ${app.tagline}`,
    description: app.description,
  };
}

export default function ProductPage({ params }: Props) {
  const app = apps.find((a) => a.slug === params.slug);
  if (!app) notFound();

  const updates = getAllPosts().filter((post) => post.tags.includes(app.slug));

  return (
    <main>
      <Navbar />

      <section className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-brand-navy/40 mb-10">
          <Link href="/" className="hover:text-brand-navy transition-colors no-underline text-brand-navy/40">
            Home
          </Link>
          <span>/</span>
          <Link href="/#products" className="hover:text-brand-navy transition-colors no-underline text-brand-navy/40">
            Products
          </Link>
          <span>/</span>
          <span className="text-brand-navy/70">{app.name}</span>
        </div>

        {/* Hero */}
        <div className="flex items-start gap-6 mb-8">
          {app.iconImage ? (
            <Image
              src={app.iconImage}
              alt={`${app.name} app icon`}
              width={80}
              height={80}
              priority
              className="w-20 h-20 rounded-2xl shrink-0"
              style={{ boxShadow: `0 12px 32px ${app.color}20` }}
            />
          ) : (
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shrink-0"
              style={{
                background: app.gradient,
                boxShadow: `0 12px 32px ${app.color}20`,
              }}
            >
              {app.icon}
            </div>
          )}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1
                className="text-4xl text-brand-navy"
                style={{ fontFamily: "'Dela Gothic One', cursive" }}
              >
                {app.name}
              </h1>
              <span
                className="px-3 py-1 rounded-full text-xs font-bold"
                style={{
                  background: `${app.color}0A`,
                  border: `1px solid ${app.color}1A`,
                  color: app.color,
                }}
              >
                {app.status}
              </span>
            </div>
            <p className="text-lg font-semibold" style={{ color: app.color }}>
              {app.tagline}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg text-brand-navy/55 leading-8 mb-12">
          {app.longDescription}
        </p>

        {app.disclaimer && (
          <div className="mb-12 p-6 rounded-2xl bg-gray-50 border border-black/[0.06]">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-navy/40 mb-2">
              Important
            </p>
            <p className="text-[15px] text-brand-navy/65 leading-7">
              {app.disclaimer}
            </p>
          </div>
        )}

        {/* Features */}
        <div className="mb-12">
          <h2
            className="text-2xl text-brand-navy mb-6"
            style={{ fontFamily: "'Dela Gothic One', cursive" }}
          >
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {app.features.map((feature, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-black/[0.04]"
              >
                <div
                  className="w-2 h-2 rounded-full mt-2 shrink-0"
                  style={{ background: app.color }}
                />
                <span className="text-brand-navy/60 text-[15px] leading-6">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Updates (blog posts tagged with this app's slug) */}
        {updates.length > 0 && (
          <div className="mb-12">
            <h2
              className="text-2xl text-brand-navy mb-6"
              style={{ fontFamily: "'Dela Gothic One', cursive" }}
            >
              Updates
            </h2>
            <div className="flex flex-col gap-3">
              {updates.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="no-underline group block p-5 rounded-xl bg-gray-50 border border-black/[0.04] hover:bg-white hover:border-black/[0.08] transition-all"
                >
                  <time className="text-sm text-brand-navy/35 font-medium">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <h3
                    className="text-lg text-brand-navy mt-1 mb-1 transition-colors"
                    style={{ fontFamily: "'Dela Gothic One', cursive" }}
                  >
                    <span className="group-hover:underline underline-offset-4">
                      {post.title}
                    </span>
                  </h3>
                  <p className="text-[15px] text-brand-navy/50 leading-6">
                    {post.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* App Store Link */}
        {app.appStoreUrl ? (
          <a
            href={app.appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-white font-bold text-[15px] no-underline transition-all hover:-translate-y-0.5"
            style={{
              background: app.gradient,
              boxShadow: `0 4px 24px ${app.color}25`,
            }}
          >
            Download on the App Store
          </a>
        ) : (
          <div className="p-6 rounded-2xl bg-gray-50 border border-black/[0.04] text-center">
            <p className="text-brand-navy/40 text-sm">
              This app is currently{" "}
              <span className="font-semibold" style={{ color: app.color }}>
                {app.status.toLowerCase()}
              </span>
              . Follow us for updates on the launch.
            </p>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
