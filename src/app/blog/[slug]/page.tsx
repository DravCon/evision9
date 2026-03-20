import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <main>
      <Navbar />

      <article className="pt-32 pb-20 px-6 max-w-3xl mx-auto">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-brand-navy/40 hover:text-brand-navy transition-colors no-underline mb-10"
        >
          ← Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <time className="text-sm text-brand-navy/35 font-medium">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span className="text-brand-navy/20">·</span>
            <span className="text-sm text-brand-navy/35">
              {post.readingTime}
            </span>
          </div>
          <h1
            className="text-[clamp(32px,5vw,44px)] text-brand-navy leading-tight mb-4"
            style={{ fontFamily: "'Dela Gothic One', cursive" }}
          >
            {post.title}
          </h1>
          {post.tags.length > 0 && (
            <div className="flex gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-orange/[0.06] text-brand-deep-orange"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Content — rendered as simple paragraphs for now */}
        <div className="prose-blog">
          {post.content.split("\n\n").map((paragraph, i) => {
            if (paragraph.startsWith("## ")) {
              return (
                <h2 key={i} className="font-display text-2xl text-brand-navy mb-3 mt-10"
                  style={{ fontFamily: "'Dela Gothic One', cursive" }}>
                  {paragraph.replace("## ", "")}
                </h2>
              );
            }
            if (paragraph.startsWith("### ")) {
              return (
                <h3 key={i} className="font-display text-xl text-brand-navy mb-2 mt-8"
                  style={{ fontFamily: "'Dela Gothic One', cursive" }}>
                  {paragraph.replace("### ", "")}
                </h3>
              );
            }
            return (
              <p key={i} className="mb-6 text-base leading-7 text-brand-navy/65">
                {paragraph}
              </p>
            );
          })}
        </div>
      </article>

      <Footer />
    </main>
  );
}
