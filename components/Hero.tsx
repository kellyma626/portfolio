import Image from "next/image";
import { FaGithub, FaLinkedin, FaMediumM } from "react-icons/fa";
import { SiGoogledocs } from "react-icons/si";
import { links } from "@/lib/data";

// shared by all four icon links: absolute position + little tilt on hover
const icon =
  "absolute flex transition-transform duration-200 hover:translate-y-[-3px] hover:rotate-[-4deg]";

export default function Hero() {
  return (
    // pt-[115px] = space between the header and the hero
    <section id="top" className="flex flex-col items-center pt-28.75 text-center max-[420px]:pt-20">
      {/* left-[-3px] centers the whole group. use left-[27.5px] to center just the name like Figma */}
      <div className="relative -left-0.75 h-55 w-92.75 max-[420px]:left-0 max-[420px]:scale-85">
        <a href={links.linkedin} className={`${icon} left-11.5 top-5.5 text-[#2d58c6]`} aria-label="LinkedIn" target="_blank" rel="noreferrer">
          <FaLinkedin size={60} aria-hidden />
        </a>
        <a href={links.github} className={`${icon} left-1.5 top-20.75 text-[#d0325f]`} aria-label="GitHub" target="_blank" rel="noreferrer">
          <FaGithub size={52} aria-hidden />
        </a>
        <a href={links.resume} className={`${icon} left-10.25 top-33.75 text-[#3e7f3b]`} aria-label="Resume" target="_blank" rel="noreferrer">
          <SiGoogledocs size={52} aria-hidden />
        </a>

        <h1 className="absolute left-17.75 top-17 m-0 flex w-43.5 flex-col font-serif text-[72px] font-normal leading-[68.4px] tracking-[-1.8px]">
          <span>kelly</span>
          {/* pl-[89px] = gap between the M and the "a" */}
          <span className="relative pl-22.25 text-left">
            <a
              href={links.medium}
              className={`${icon} left-8.5 top-4 size-12.5 items-center justify-center rounded-md bg-[#111] text-white`}
              aria-label="Medium"
              target="_blank"
              rel="noreferrer"
            >
              <FaMediumM size={34} aria-hidden />
            </a>
            <span className="sr-only">m</span>a
          </span>
        </h1>

        <Image
          src="/kelly7.jpg"
          alt="Kelly Ma"
          width={143}
          height={143}
          className="absolute left-57 top-13 rounded-[10px] object-cover"
          priority
        />
      </div>

      <p className="mt-7.5 text-lg leading-7 text-muted">designing, building, writing, &amp; learning ✿</p>
    </section>
  );
}
