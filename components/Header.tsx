const nav = [
  { label: "about!", href: "#about" },
  { label: "work", href: "#work" },
  { label: "blog", href: "#blog" },
  { label: "contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-10 h-14 bg-cream/80 backdrop-blur-xs">
      <div className="mx-auto flex h-full w-full max-w-3xl items-center justify-between px-6">
        <a href="#top" className="font-serif text-lg leading-7">
          kelly ma
        </a>
        <nav className="flex gap-4 text-sm leading-5 text-muted">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="link-underline">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
