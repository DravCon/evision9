import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Updates, changelogs, and thoughts from the Evision9 team.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main>
      <Navbar />

      <section className="pt-32 pb-20 px-6 max-w-3xl mx-auto">
        <h1
          className="text-[clamp(36px,5vw,52px)] text-brand-navy mb-4"
          style={{ fontFamily: "'Dela Gothic One', cursive" }}
        >
          Blog
        </h1>
        <p className="text-lg text-brand-navy/45 leading-7 mb-14">
          Updates, changelogs, and the occasional thought about building apps
          people love.
        </p>

        {posts.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">✍️</div>
            <h3
              className="text-xl text-brand-navy mb-2"
              style={{ fontFamily: "'Dela Gothic One', cursive" }}
            >
              Coming soon
            </h3>
            <p className="text-brand-navy/40">
              We&apos;re working on our first post. Check back soon!
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-1">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="no-underline group"
              >
                <article className="py-7 border-b border-black/[0.05] group-hover:px-4 group-hover:bg-gray-50/50 group-hover:-mx-4 rounded-xl transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <time className="text-sm text-brand-navy/30 font-medium">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <span className="text-brand-navy/20">·</span>
                    <span className="text-sm text-brand-navy/30">
                      {post.readingTime}
                    </span>
                    {post.tags.length > 0 && (
                      <>
                        <span className="text-brand-navy/20">·</span>
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-semibold px-2 py-0.5 rounded-full bg-brand-orange/[0.06] text-brand-deep-orange"
                          >
                            {tag}
                          </span>
                        ))}
                      </>
                    )}
                  </div>
                  <h2
                    className="text-xl text-brand-navy group-hover:text-brand-deep-orange transition-colors mb-1.5"
                    style={{ fontFamily: "'Dela Gothic One', cursive" }}
                  >
                    {post.title}
                  </h2>
                  <p className="text-[15px] text-brand-navy/45 leading-6">
                    {post.excerpt}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
