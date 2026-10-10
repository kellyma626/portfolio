import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkSection from "@/components/WorkSection";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import MusicToggle from "@/components/MusicToggle";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main className="mx-auto w-full max-w-3xl px-6">
        <About />
        <WorkSection />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <MusicToggle />
    </>
  );
}
