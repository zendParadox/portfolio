import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import { DATA } from "@/data/resume";
import { TextReveal } from "@/components/text-reveal";
import { ParallaxElement } from "@/components/parallax-element";
import { Marquee } from "@/components/marquee";
import { Magnetic } from "@/components/magnetic";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const date = new Date();

  return (
    <main className="min-h-[100dvh] w-full pt-20 pb-32 overflow-hidden selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      {/* 
        HERO SECTION
      */}
      <section className="container mx-auto px-6 mb-32 md:mb-48">
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 md:col-span-10 xl:col-span-9 mt-12 md:mt-24">
            <BlurFade delay={BLUR_FADE_DELAY}>
              <ParallaxElement offset={20}>
                <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.85] tracking-tighter uppercase mb-2">
                  <TextReveal
                    text="Thought"
                    className="block hover:italic transition-all duration-500"
                  />
                  <TextReveal
                    text="Archive"
                    className="block ml-6 md:ml-[10%] text-muted-foreground hover:italic transition-all duration-500"
                  />
                </h1>
              </ParallaxElement>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 2} className="mt-12 md:mt-20">
              <span className="text-xs tracking-[0.2em] font-medium uppercase opacity-50 block mb-4">
                [ News & Articles / ニュース ]
              </span>
              <p className="text-xl md:text-2xl leading-snug tracking-tight font-medium max-w-xl">
                Exploring the intersection of design, technology, and minimalism
                through written words.
              </p>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* 
        BLOG LIST 
      */}
      <section className="container mx-auto px-6 mb-40">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-10 lg:col-start-2">
            <div className="divide-y divide-black/10 dark:divide-white/10 border-t border-black/10 dark:border-white/10">
              {posts
                .sort((a, b) => {
                  if (
                    new Date(a.metadata.publishedAt) >
                    new Date(b.metadata.publishedAt)
                  ) {
                    return -1;
                  }
                  return 1;
                })
                .map((post, id) => (
                  <BlurFade
                    delay={BLUR_FADE_DELAY * 3 + id * 0.05}
                    key={post.slug}
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group py-8 md:py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300 px-4 -mx-4 cursor-none"
                    >
                      <div className="flex-1 w-full">
                        <div className="flex items-center gap-4 mb-3">
                          <span className="text-[10px] md:text-xs font-mono opacity-40 uppercase tracking-widest bg-black/5 dark:bg-white/5 px-2 py-0.5 rounded">
                            {new Date(
                              post.metadata.publishedAt,
                            ).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "2-digit",
                            })}
                          </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tighter uppercase group-hover:italic md:group-hover:ml-4 transition-all duration-300 leading-none">
                          {post.metadata.title}
                        </h2>
                      </div>
                      <div className="hidden md:flex w-12 h-12 rounded-full border border-black/10 dark:border-white/10 items-center justify-center transform group-hover:rotate-45 transition-transform duration-500 shrink-0">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </Link>
                  </BlurFade>
                ))}
            </div>
          </div>
        </div>
      </section>

      <div className="py-20 rotate-[-1deg] bg-foreground text-background">
        <Marquee
          text={`${DATA.name.toUpperCase()} — WRITING — JOURNAL — ${date.getFullYear().toString()}`}
          speed={25}
        />
      </div>

      {/* 
        CONTACT SECTION 
      */}
      <section
        id="contact"
        className="container mx-auto px-6 mb-20 relative pt-40"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent to-black/20 dark:to-white/20"></div>
        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
            <span className="text-xs uppercase tracking-[0.3em] opacity-40 mb-12">
              Have an idea?
            </span>
            <ParallaxElement offset={-40}>
              <Link
                href="mailto:raflirama7446@gmail.com"
                className="inline-block group cursor-none"
              >
                <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter leading-[0.9] mb-12 text-balance hover:italic transition-all duration-500">
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
                    className="hover:opacity-50 transition-opacity p-2 cursor-none"
                  >
                    LinkedIn
                  </Link>
                </Magnetic>
                <Magnetic>
                  <Link
                    href="https://github.com/zendParadox"
                    target="_blank"
                    className="hover:opacity-50 transition-opacity p-2 cursor-none"
                  >
                    GitHub
                  </Link>
                </Magnetic>
                <Magnetic>
                  <Link
                    href="mailto:raflirama7446@gmail.com"
                    className="hover:opacity-50 transition-opacity p-2 cursor-none"
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
