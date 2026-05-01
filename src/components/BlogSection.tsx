import { motion } from "framer-motion";

interface Post {
  title: string;
  category: string;
  time: string;
}

const posts: Post[] = [
  {
    title: "How I structure scalable React + Node projects",
    category: "Development",
    time: "6 min read",
  },
  {
    title: "What makes an e-commerce site convert better",
    category: "E-Commerce",
    time: "4 min read",
  },
  {
    title: "Landing page performance wins from real client builds",
    category: "Performance",
    time: "5 min read",
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="mx-auto w-full max-w-6xl px-6 pb-28">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <h2 className="text-4xl tracking-tight md:text-5xl">Latest Posts</h2>
        <a href="#" className="w-fit text-sm text-black/60 transition hover:text-black">
          View all posts
        </a>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        {posts.map((post, index) => (
          <motion.a
            key={post.title}
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.07, duration: 0.45 }}
            className="flex min-h-[180px] flex-1 basis-[300px] flex-col justify-between border border-black/15 bg-white/50 p-6 transition hover:-translate-y-1"
          >
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.12em] text-black/55">
              <span>{post.category}</span>
              <span>{post.time}</span>
            </div>
            <h3 className="text-xl tracking-tight text-black/90">{post.title}</h3>
            <span className="text-sm text-black/55">Read article</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
