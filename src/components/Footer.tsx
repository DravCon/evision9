import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/[0.06] max-w-6xl mx-auto px-6 py-12">
      <div className="flex justify-between items-center flex-wrap gap-6">
        <div className="flex items-center gap-2.5">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center text-white font-black text-xs"
            style={{
              fontFamily: "'Dela Gothic One', cursive",
              background: "linear-gradient(135deg, #FF6B35, #F7C948, #E84393)",
            }}
          >
            E9
          </div>
          <span className="text-sm text-brand-navy/30">
            © {new Date().getFullYear()} Evision9. All rights reserved.
          </span>
        </div>

        <div className="flex gap-6">
          {["Privacy", "Terms", "Contact"].map((link) => (
            <Link
              key={link}
              href={link === "Contact" ? "/contact" : `/${link.toLowerCase()}`}
              className="text-brand-navy/30 no-underline text-sm hover:text-brand-navy transition-colors"
            >
              {link}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
