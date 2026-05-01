import { motion } from "framer-motion";

const navLinks = [
  { label: "About Me", href: "#about" },
  { label: "Portfolio", href: "#works" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#blog" },
];

const stats = [
  { value: "+10", label: "Projects completed" },
  { value: "+4", label: "Happy clients" },
];

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="relative h-[88vh] w-full max-w-[1300px] rounded-[42px] border-[5px] border-[#1b1b1b] bg-[#f8f8f8] shadow-[0_34px_80px_rgba(0,0,0,0.25)]"
        style={{ transform: "rotate(-2.2deg)" }}
      >
        <div className="absolute inset-0 rounded-[36px] border border-black/15" />

        <header className="relative z-10 flex items-center justify-between px-6 pb-2 pt-7 md:px-12 md:pt-10">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.55 }}
            className="flex items-center gap-8"
          >
            <div className="text-xl font-semibold tracking-tight">TD</div>
            <nav className="hidden gap-7 text-sm text-black/80 md:flex">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="transition hover:text-black">
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>

          <motion.a
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.55 }}
            href="https://wa.link/ce2n9w"
            className="text-sm font-medium underline underline-offset-4"
          >
            Book A Call
          </motion.a>
        </header>

        <div className="relative grid h-[calc(100%-110px)] grid-cols-1 md:grid-cols-[1.05fr_1fr]">
          <div className="relative flex flex-col justify-between px-6 pb-8 pt-3 md:px-12 md:pb-12">
           
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.65 }}
              className="flex gap-8 pt-2 md:pt-8"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-[40px] leading-none">{stat.value}</p>
                  <p className="mt-1 text-xs text-black/55">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              id="about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="pb-4"
            >
              <h1 className="text-[78px] font-normal leading-[0.95] tracking-tight sm:text-[110px] md:text-[138px]">
                Hello
              </h1>
              <p className="mt-4 max-w-lg text-base text-black/80 md:text-lg">
                              I&apos;m Teddy Dickson, and I specialize in developing full-stack web solutions tailored to your business goals. Whether you need a high-impact landing page to launch a product or a comprehensive e-commerce platform to manage your sales, I deliver clean, scalable code and a premium user experience. I don’t just build websites; I build digital tools that help your business thrive.
              </p>

              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75, duration: 0.7 }}
                href="https://wa.link/ce2n9w"
                className="mt-8 inline-flex items-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-900"
              >
                Book a Call
              </motion.a>
            </motion.div>

            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              href="#works"
              className="w-fit text-sm text-black/70 transition hover:text-black"
            >
              Scroll down
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.75 }}
            className="relative overflow-hidden"
          >
            <img
              src="./images/Teddy.png"
              alt="Portrait of Teddy"
              className="h-full w-full object-cover object-bottom"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
