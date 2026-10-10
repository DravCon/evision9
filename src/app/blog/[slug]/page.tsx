import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

function renderInline(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const pattern = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    if (match[1] !== undefined) {
      nodes.push(
        <strong key={match.index} className="font-semibold text-brand-navy/80">
          {match[1]}
        </strong>
      );
    } else {
      const href = match[3];
      const isInternal = href.startsWith("/") || href.startsWith("#");
      nodes.push(
        isInternal ? (
          <Link key={match.index} href={href}>
            {match[2]}
          </Link>
        ) : (
          <a key={match.index} href={href} target="_blank" rel="noopener noreferrer">
            {match[2]}
          </a>
        )
      );
    }
    last = pattern.lastIndex;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
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

        {/* Content — headings, paragraphs, bullet lists, **bold**, and [links](url) */}
        <div className="prose-blog">
          {post.content.trim().split(/\n\s*\n/).map((block, i) => {
            const paragraph = block.trim();
            if (paragraph.startsWith("## ")) {
              return (
                <h2 key={i} className="font-display text-2xl text-brand-navy mb-3 mt-10"
                  style={{ fontFamily: "'Dela Gothic One', cursive" }}>
                  {renderInline(paragraph.replace("## ", ""))}
                </h2>
              );
            }
            if (paragraph.startsWith("### ")) {
              return (
                <h3 key={i} className="font-display text-xl text-brand-navy mb-2 mt-8"
                  style={{ fontFamily: "'Dela Gothic One', cursive" }}>
                  {renderInline(paragraph.replace("### ", ""))}
                </h3>
              );
            }
            const lines = paragraph.split("\n");
            if (lines.every((line) => /^[-*] /.test(line.trim()))) {
              return (
                <ul key={i} className="list-disc mb-6 pl-6 text-base leading-7 text-brand-navy/65">
                  {lines.map((line, j) => (
                    <li key={j} className="mb-2">
                      {renderInline(line.trim().slice(2))}
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="mb-6 text-base leading-7 text-brand-navy/65">
                {renderInline(lines.join(" "))}
              </p>
            );
          })}
        </div>
      </article>

      <Footer />
    </main>
  );
}
