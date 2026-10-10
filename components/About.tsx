import { aboutParagraphs, happiness } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="pt-24">
      <h2 className="font-serif text-2xl leading-8">about!  ⸜(˶˃ ᵕ ˂˶)⸝♡</h2>

      <div className="mt-4.5 max-w-159.5 text-lg leading-[29.25px]">
        {aboutParagraphs.map((p) => (
          <p key={p.slice(0, 24)} className="mb-[29.25px]">
            {p}
          </p>
        ))}
      </div>

      <p className="mb-1.5 text-lg leading-[29.25px] text-muted">aside from tech, my happiness comes from:</p>
      <ul className="space-y-1.75 text-lg leading-7">
        {happiness.map((item) => (
          <li key={item}>
            <span aria-hidden>✦</span> {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
