import { links } from "@/lib/data";

const socials = [
  { label: "linkedin ↗", href: links.linkedin },
  { label: "github ↗", href: links.github },
  { label: "medium ↗", href: links.medium },
  { label: "resume ↗", href: links.resume },
];

export default function Contact() {
  return (
    <section id="contact" className="pb-12 pt-16">
      <h2 className="font-serif text-2xl leading-8">say hi! ♡︎</h2>
      <p className="mt-2 text-lg leading-7">
        best way to reach me is{" "}
        <a href={`mailto:${links.email}`} className="link-underline">
          {links.email}
        </a>
      </p>
      <div className="mt-4 flex flex-wrap gap-x-4.25 gap-y-2 text-sm leading-5 text-muted">
        {socials.map((s) => (
          <a key={s.label} href={s.href} className="link-underline" target="_blank" rel="noreferrer">
            {s.label}
          </a>
        ))}
      </div>
    </section>
  );
}
