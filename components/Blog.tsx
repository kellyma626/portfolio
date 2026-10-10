import { posts } from "@/lib/data";

export default function Blog() {
  return (
    <section id="blog" className="pt-16">
      <h2 className="font-serif text-2xl leading-8">my blog! (๑˃؂•̀๑)</h2>
      <p className="mt-1 text-sm leading-5 text-muted">written reflections on my experiences and learning</p>

      <ul className="mt-6">
        {posts.map((post) => (
          <li key={post.title}>
            <a href={post.href} target="_blank" rel="noreferrer" className="block rounded-[14px] px-5 pb-5 pt-6.25 transition-colors hover:bg-cream">
              <span className="text-xs leading-4 text-muted">{post.date}</span>
              <h3 className="mt-1.75 font-serif text-xl leading-7">{post.title}</h3>
              <p className="mt-2.5 max-w-165 text-sm leading-[22.75px] text-muted">{post.excerpt}</p>
              <span className="mt-3.75 inline-block text-sm leading-5 text-accent">read →</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
