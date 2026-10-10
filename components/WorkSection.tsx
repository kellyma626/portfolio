"use client";

import { useState } from "react";
import Image from "next/image";
import { filters, work, type Filter } from "@/lib/data";

export default function WorkSection() {
  const [active, setActive] = useState<Filter>("all");
  const shown = active === "all" ? work : work.filter((w) => w.tags.includes(active));

  return (
    <section id="work" className="pt-16">
      <h2 className="font-serif text-2xl leading-8">my work! (˵ •̀ ᴗ - ˵ ) ✧</h2>
      <p className="mt-1 text-sm leading-5 text-muted">these are all linked to github repos or documentation</p>

      <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Filter work">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={active === f}
            onClick={() => setActive(f)}
            className={`h-8.5 cursor-pointer rounded-full border px-3.75 text-sm leading-5 transition-colors ${
              active === f
                ? "border-pill bg-pill font-medium text-cream"
                : "border-line bg-white text-muted hover:border-muted hover:text-ink"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <ul className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {shown.map((item) => (
          <li key={item.title}>
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="block rounded-[14px] p-3 transition-colors hover:bg-cream"
            >
              <div className="relative aspect-326/203.75 overflow-hidden rounded-[10px] border border-[#e0d8de] bg-white">
                {item.image && <Image src={item.image} alt="" fill sizes="326px" className="object-cover" />}
              </div>

              <div className="px-1 pt-3">
                <h3 className="font-serif text-xl leading-7">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-[22.75px] text-muted">{item.description}</p>

                <div className="mt-3.5 flex items-center justify-between gap-2">
                  <div className="flex gap-2">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="inline-flex h-5.5 items-center rounded-full border border-line px-2.5 text-xs leading-4 text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="whitespace-nowrap text-[11px] leading-[16.5px] tracking-[0.275px] text-muted">
                    {item.date}
                  </span>
                </div>

                <span className="mt-3 inline-block text-sm leading-5 text-accent">{item.linkLabel}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>

      {shown.length === 0 && <p className="mt-1 text-sm leading-5 text-muted">nothing here yet.</p>}
    </section>
  );
}
