import { getBlogPosts, getPost } from "@/data/blog";
import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { TextReveal } from "@/components/text-reveal";
import { ParallaxElement } from "@/components/parallax-element";
import { Magnetic } from "@/components/magnetic";
import { Marquee } from "@/components/marquee";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata | undefined> {
  let post = await getPost(params.slug);

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image ? `${DATA.url}${image}` : `${DATA.url}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

const BLUR_FADE_DELAY = 0.04;

export default async function Blog({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  let post = await getPost(params.slug);
  const date = new Date();

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-[100dvh] w-full pt-20 pb-32 overflow-hidden selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${DATA.url}${post.metadata.image}`
              : `${DATA.url}/og?title=${post.metadata.title}`,
            url: `${DATA.url}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: DATA.name,
            },
          }),
        }}
      />

      {/* 
        POST HEADER 
      */}
      <section className="container mx-auto px-6 mb-20 md:mb-32">
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 md:col-span-10 lg:col-span-8 mt-12 md:mt-24">
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Link
                href="/blog"
                className="text-xs uppercase tracking-[0.3em] opacity-40 hover:opacity-100 transition-opacity mb-8 inline-block cursor-none"
              >
                ← Back to Archive
              </Link>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 2}>
              <ParallaxElement offset={10}>
                <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase leading-[0.9] mb-8 text-balance">
                  {post.metadata.title}
                </h1>
              </ParallaxElement>
            </BlurFade>

            <BlurFade
              delay={BLUR_FADE_DELAY * 3}
              className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 border-t border-black/10 dark:border-white/10 pt-8 mt-8"
            >
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-[0.2em] opacity-40">
                  [ Published / 公開 ]
                </span>
                <span className="text-sm font-mono">
                  {formatDate(post.metadata.publishedAt)}
                </span>
              </div>
              <div className="hidden md:block w-1 h-1 rounded-full bg-black/20 dark:bg-white/20"></div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-[0.2em] opacity-40">
                  [ Reading Time / 読む ]
                </span>
                <span className="text-sm font-mono">~15 min read</span>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* 
        POST CONTENT 
      */}
      <section className="container mx-auto px-6 mb-40">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3">
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <article
                className="prose prose-base md:prose-lg dark:prose-invert max-w-none 
                prose-headings:tracking-tighter prose-headings:uppercase prose-headings:font-bold
                prose-p:leading-relaxed prose-p:tracking-tight prose-p:text-foreground/80
                prose-a:text-foreground prose-a:underline-offset-4 prose-a:decoration-1
                prose-img:grayscale hover:prose-img:grayscale-0 transition-all duration-700"
                dangerouslySetInnerHTML={{ __html: post.source }}
              ></article>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* <div className="py-20 rotate-[1deg] bg-foreground text-background">
        <Marquee
          text={`${post.metadata.title.toUpperCase()} — BY ${DATA.name.toUpperCase()} — JOURNAL EXTRACT — ${date.getFullYear().toString()}`}
          speed={10}
        />
      </div> */}

      {/* 
        CONTACT SECTION 
      */}
      <section
        id="contact"
        className="container mx-auto px-6 mb-20 relative pt-40"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent to-black/20 dark:to-white/20"></div>
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
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
