"use client";

import Link from "next/link";
import type { AppInfo } from "@/lib/data";

export default function AppCard({ app }: { app: AppInfo }) {
  return (
    <Link href={`/products/${app.slug}`} className="no-underline group">
      <div
        className="bg-gray-50 group-hover:bg-white rounded-3xl p-10 border border-black/[0.04] group-hover:border-black/[0.08] transition-all duration-400 ease-out group-hover:-translate-y-1 group-hover:shadow-lg cursor-pointer relative overflow-hidden"
      >
        <div className="flex justify-between items-start mb-6">
          <div
            className="w-16 h-16 rounded-[18px] flex items-center justify-center text-3xl"
            style={{
              background: app.gradient,
              boxShadow: `0 8px 24px ${app.color}20`,
            }}
          >
            {app.icon}
          </div>
          <span
            className="px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide"
            style={{
              background: `${app.color}0A`,
              border: `1px solid ${app.color}1A`,
              color: app.color,
            }}
          >
            {app.status}
          </span>
        </div>

        <h3
          className="text-brand-navy text-[28px] mb-2"
          style={{ fontFamily: "'Dela Gothic One', cursive" }}
        >
          {app.name}
        </h3>
        <p className="text-base font-semibold mb-4" style={{ color: app.color }}>
          {app.tagline}
        </p>
        <p className="text-[15px] text-brand-navy/50 leading-7 mb-6">
          {app.description}
        </p>

        <div className="flex flex-col gap-2">
          {app.features.slice(0, 3).map((f, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <div
                className="w-1.5 h-1.5 rounded-full shrink-0 opacity-60"
                style={{ background: app.color }}
              />
              <span className="text-sm text-brand-navy/45">{f}</span>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}
