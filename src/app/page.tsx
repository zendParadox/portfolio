import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Badge } from "@/components/ui/badge";
import { ParallaxElement } from "@/components/parallax-element";
import { TextReveal } from "@/components/text-reveal";
import { Tilt } from "@/components/tilt";
import { Magnetic } from "@/components/magnetic";
import { Marquee } from "@/components/marquee";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { ArrowUpRight } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const date = new Date();
  return (
    <main className="min-h-[100dvh] w-full pt-20 pb-32 overflow-hidden selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      {/* 
        HERO SECTION
        Avant-garde typography with 12-column grid spans. 
      */}
      <section className="container mx-auto px-6 mb-40 md:mb-64">
        <div className="grid grid-cols-12 gap-x-6 gap-y-16">
          <div className="col-span-12 md:col-span-10 xl:col-span-9 mt-12 md:mt-24">
            <BlurFade delay={BLUR_FADE_DELAY}>
              <ParallaxElement offset={20}>
                <h1 className="text-[10vw] sm:text-[10vw] md:text-8xl lg:text-9xl font-bold leading-[0.85] tracking-tighter uppercase mb-6 text-balance">
                  <TextReveal
                    text="Creative"
                    className="block hover:italic transition-all duration-500"
                  />
                  <TextReveal
                    text="Developer"
                    className="block ml-[10%] text-muted-foreground hover:italic transition-all duration-500"
                  />
                </h1>
              </ParallaxElement>
            </BlurFade>

            <div className="mt-16 md:mt-24 flex flex-col md:flex-row gap-8 md:gap-16 items-start font-jp">
              <BlurFade delay={BLUR_FADE_DELAY * 2} className="md:w-1/3">
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
                  [ Introduction / はじめに ]
                </p>
                <p className="text-xl md:text-2xl leading-relaxed tracking-tight">
                  <span className="font-bold">{DATA.name}</span> is an
                  independent developer.
                </p>
              </BlurFade>

              <BlurFade delay={BLUR_FADE_DELAY * 3} className="md:w-2/3">
                <h2 className="text-2xl md:text-3xl leading-snug tracking-tight font-medium max-w-2xl">
                  {DATA.description}
                </h2>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      <div className="py-20 rotate-[-1deg] bg-foreground text-background">
        <Marquee
          text="AVAILABLE FOR WORK — BASED IN INDONESIA — CREATIVE DEVELOPER"
          speed={25}
        />
      </div>

      {/* 
        ABOUT SECTION 
        Asymmetric layout with white space.
      */}
      <section id="about" className="container mx-auto px-6 mt-32 mb-40">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4 lg:col-span-3">
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <h3 className="text-xs tracking-[0.2em] font-medium uppercase mb-4 opacity-50">
                [ About / について ]
              </h3>
            </BlurFade>
          </div>
          <div className="col-span-12 md:col-span-8 lg:col-span-7 lg:col-start-5">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <div className="prose prose-xl prose-p:leading-loose text-foreground/80 dark:text-foreground/80 font-serif font-light tracking-wide max-w-none hover:text-foreground transition-colors duration-500">
                <Markdown>{DATA.summary}</Markdown>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* 
        EXPERIENCE & EDUCATION 
        Minimalist list 
      */}
      <section className="container mx-auto px-6 mb-40 border-t border-black/10 dark:border-white/10 pt-32">
        <div className="grid grid-cols-12 gap-12">
          {/* Work */}
          <div className="col-span-12 lg:col-span-6">
            <BlurFade delay={BLUR_FADE_DELAY * 6}>
              <h3 className="text-[2rem] font-bold tracking-tighter uppercase mb-16">
                Experience
              </h3>
            </BlurFade>
            <div className="flex flex-col gap-y-12">
              {DATA.work.map((work, id) => (
                <BlurFade
                  key={work.company}
                  delay={BLUR_FADE_DELAY * 7 + id * 0.05}
                >
                  <div className="group flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-black/5 dark:border-white/5 pb-8">
                    <div>
                      <h4 className="text-xl font-bold mb-1 tracking-tight group-hover:italic transition-all duration-300">
                        {work.company}
                      </h4>
                      <p className="text-muted-foreground">{work.title}</p>
                    </div>
                    <div className="mt-2 sm:mt-0 text-left sm:text-right">
                      <p className="text-sm tracking-widest uppercase opacity-60">
                        {work.start} — {work.end ?? "Present"}
                      </p>
                    </div>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="col-span-12 lg:col-span-6 lg:border-l lg:border-black/10 lg:dark:border-white/10 lg:pl-12">
            <BlurFade delay={BLUR_FADE_DELAY * 8}>
              <h3 className="text-[2rem] font-bold tracking-tighter uppercase mb-16">
                Education
              </h3>
            </BlurFade>
            <div className="flex flex-col gap-y-12">
              {DATA.education.map((education, id) => (
                <BlurFade
                  key={education.school}
                  delay={BLUR_FADE_DELAY * 9 + id * 0.05}
                >
                  <div className="group flex flex-col justify-between items-start border-b border-black/5 dark:border-white/5 pb-8 relative">
                    <h4 className="text-xl font-bold mb-1 tracking-tight group-hover:italic transition-all duration-300">
                      {education.school}
                    </h4>
                    <p className="text-muted-foreground max-w-[80%]">
                      {education.degree}
                    </p>
                    <p className="text-xs font-mono mt-4 opacity-50 bg-black/5 dark:bg-white/5 px-2 py-1 uppercase inline-block">
                      {education.start} / {education.end}
                    </p>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 
        SKILLS SECTION
        Avant-garde pill layout
      */}
      <section className="container mx-auto px-6 mb-40">
        <div className="grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 md:col-span-4">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h3 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-6 leading-none">
                Core <br /> <span className="italic font-light">Skills.</span>
              </h3>
            </BlurFade>
          </div>
          <div className="col-span-12 md:col-span-8 flex flex-wrap gap-3">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <div className="px-5 py-3 border border-foreground/20 rounded-full text-base tracking-wide hover:bg-foreground hover:text-background transition-colors duration-300 cursor-default">
                  {skill}
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* 
        SELECTED WORKS (PROJECTS)
        Offset grid with large visuals and "DESIGN" / "DEVELOPMENT" badges.
      */}
      <section
        id="projects"
        className="py-32 bg-black text-white dark:bg-white dark:text-black"
      >
        <div className="container mx-auto px-6">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/20 dark:border-black/20 pb-12">
              <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase">
                Selected
                <br />
                <span className="italic font-light text-white/70 dark:text-black/70">
                  Works
                </span>
              </h2>
              <p className="text-xs tracking-[0.2em] font-mono mt-8 md:mt-0 opacity-50 uppercase max-w-xs text-balance">
                Showcase of recent digital products & interactive experiences.
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-12 gap-x-6 gap-y-32">
            {DATA.projects.map((project, id) => (
              <div
                key={project.title}
                className={`col-span-12 md:col-span-10 xl:col-span-8 ${id % 2 === 1 ? "md:col-start-3 xl:col-start-5" : ""}`}
              >
                <ParallaxElement offset={30 * (id % 2 === 0 ? 1 : -1)}>
                  <Tilt>
                    <BlurFade delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
                      <Link
                        href={project.href || "#"}
                        target="_blank"
                        className="group block"
                      >
                        <div className="relative aspect-[16/10] overflow-hidden bg-white/5 dark:bg-black/5 mb-8">
                          {project.video ? (
                            <video
                              src={project.video}
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0"
                            />
                          ) : (
                            project.image && (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0"
                              />
                            )
                          )}
                          {/* Floating Badge */}
                          <div className="absolute top-6 left-6 flex gap-2">
                            <span className="px-3 py-1 bg-white text-black dark:bg-black dark:text-white text-[10px] font-bold tracking-[0.2em] uppercase mix-blend-screen shadow-lg">
                              Development
                            </span>
                            {id % 2 === 0 && (
                              <span className="px-3 py-1 bg-black text-white dark:bg-white dark:text-black text-[10px] font-bold tracking-[0.2em] uppercase border border-white/20 dark:border-black/20">
                                Design
                              </span>
                            )}
                          </div>

                          {/* View Button Overlay */}
                          <div className="absolute inset-0 bg-black/20 dark:bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                            <div className="w-16 h-16 rounded-full bg-white dark:bg-black text-black dark:text-white flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-500 delay-100">
                              <ArrowUpRight className="w-6 h-6" />
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                          <div>
                            <h3 className="text-3xl lg:text-4xl font-bold tracking-tight mb-2 group-hover:italic transition-all duration-300">
                              {project.title}
                            </h3>
                            <p className="text-white/60 dark:text-black/60 font-light text-lg md:text-xl">
                              {project.description}
                            </p>
                          </div>
                          <div className="text-xs font-mono tracking-[0.1em] opacity-50 shrink-0">
                            {project.dates}
                          </div>
                        </div>
                      </Link>
                    </BlurFade>
                  </Tilt>
                </ParallaxElement>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        HACKATHONS / CERTIFICATIONS 
        Minimalist list design
      */}
      <section id="certifications" className="container mx-auto px-6 py-40">
        <BlurFade delay={BLUR_FADE_DELAY * 14}>
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 lg:col-span-4">
              <h2 className="text-xs tracking-[0.2em] font-medium uppercase opacity-50 mb-4">
                [ Certifications / 資格 ]
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <h3 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase leading-[1.1] max-w-3xl">
                Continuous Learning &{" "}
                <span className="italic font-light">Adaptability.</span>
              </h3>
            </div>
          </div>
        </BlurFade>

        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-10 lg:col-start-2">
            <BlurFade delay={BLUR_FADE_DELAY * 15}>
              <div className="divide-y divide-black/10 dark:divide-white/10 border-t border-black/10 dark:border-white/10 mt-12">
                {DATA.hackathons.map((project, id) => (
                  <div
                    key={project.title + project.dates}
                    className="group py-8 flex flex-col md:flex-row justify-between gap-6 hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300 px-4 -mx-4 cursor-default"
                  >
                    <div className="flex-1">
                      <h4 className="text-xl md:text-2xl font-bold tracking-tight mb-2 group-hover:ml-4 transition-all duration-300">
                        {project.title}
                      </h4>
                      <p className="text-muted-foreground line-clamp-2 md:line-clamp-none max-w-2xl text-sm md:text-base">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex flex-col items-start md:items-end text-xs uppercase tracking-widest font-mono opacity-50 mt-1 shrink-0">
                      <span>{project.dates}</span>
                      <span>{project.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      <div className="py-20 rotate-[1deg] bg-foreground text-background">
        <Marquee
          text={`RAFLI RAMADHANI — PORTFOLIO ${date.getFullYear().toString()} — DESIGN & DEVELOPMENT`}
          speed={30}
        />
      </div>

      {/* 
        CONTACT SECTION 
        Massive typography and dramatic spacing
      */}
      <section id="contact" className="container mx-auto px-6 mb-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent to-black/20 dark:to-white/20"></div>
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <div className="pt-40 text-center max-w-4xl mx-auto flex flex-col items-center">
            <span className="text-xs uppercase tracking-[0.3em] opacity-40 mb-12">
              Have an idea?
            </span>
            <ParallaxElement offset={-40}>
              <Link
                href="mailto:raflirama7446@gmail.com"
                className="inline-block group"
              >
                <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter leading-none mb-12 text-balance hover:italic transition-all duration-500">
                  Let&apos;s build <br /> something.
                </h2>
              </Link>
            </ParallaxElement>

            <div className="w-full h-[1px] bg-black/10 dark:bg-white/10 my-16"></div>

            <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-8 uppercase tracking-widest text-xs font-mono">
              <span className="opacity-50">
                © {new Date().getFullYear()} {DATA.name}
              </span>
              <div className="flex gap-8">
                <Magnetic>
                  <Link
                    href="https://linkedin.com/in/rafliramadhanii"
                    target="_blank"
                    className="hover:opacity-50 transition-opacity p-2"
                  >
                    LinkedIn
                  </Link>
                </Magnetic>
                <Magnetic>
                  <Link
                    href="https://github.com/zendParadox"
                    target="_blank"
                    className="hover:opacity-50 transition-opacity p-2"
                  >
                    GitHub
                  </Link>
                </Magnetic>
                <Magnetic>
                  <Link
                    href="mailto:raflirama7446@gmail.com"
                    className="hover:opacity-50 transition-opacity p-2"
                  >
                    Email
                  </Link>
                </Magnetic>
              </div>
            </div>
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
