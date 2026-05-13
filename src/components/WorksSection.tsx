import { motion } from "framer-motion";

interface Work {
  title: string;
  type: string;
  year: string;
  summary: string;
  stack: string[];
  url?: string;
}

const works: Work[] = [
  {
    title: "Modern E-Commerce Store",
    type: "E-Commerce Site",
    year: "2026",
    summary: "Custom storefront, filtered catalog, secure checkout, and CMS-managed campaigns.",
    stack: ["React", "Node", "Stripe"],
    url: "https://e-commerce-portfolio-indol.vercel.app/",
  },
  {
    title: "Growth Agency Multi-Page Website",
    type: "Multi-Page Site",
    year: "2026",
    summary: "Service-driven architecture with reusable sections and SEO-ready content routing.",
    stack: ["React", "Tailwind", "Headless CMS"],
    url: "https://growth-engine-demo-two.vercel.app/",
  },
  {
    title: "SaaS Product Launch",
    type: "Landing Page",
    year: "2025",
    summary: "Conversion-focused launch page with lead capture and performance-first build.",
    stack: ["Vite", "TypeScript", "Analytics"],
    url: "https://saas-repo-lac.vercel.app/",
  },
];

export function WorksSection() {
  return (
    <section id="works" className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-4xl tracking-tight md:text-5xl">Selected Works</h2>
          <p className="mt-3 max-w-2xl text-black/70">
            A focused collection of websites built for conversion, clarity, and speed.
          </p>
        </div>
        <p className="text-sm text-black/60">Recent client projects</p>
      </div>

      <div className="mt-10 flex flex-wrap gap-5">
        {works.map((work, index) => (
          <motion.article
            key={work.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            className="flex min-h-60 flex-1 basis-[300px] flex-col justify-between border border-black/15 bg-white/50 p-6"
          >
            <div className="flex flex-1 flex-col gap-3">
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.12em] text-black/55">
                <span>{work.type}</span>
                <span>{work.year}</span>
              </div>
              <h3 className="text-2xl tracking-tight">{work.title}</h3>
              <p className="text-black/70">{work.summary}</p>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-4 text-xs text-black/65">
              {work.stack.map((item) => (
                <span key={item} className="border border-black/20 px-3 py-1.5">
                  {item}
                </span>
              ))}
            </div>
            {work.url ? (
              <a
                href={work.url}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-sm font-medium text-black transition hover:text-black/80"
              >
                View project
              </a>
            ) : null}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
