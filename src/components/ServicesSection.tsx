import { motion } from "framer-motion";

interface Service {
  name: string;
  detail: string;
}

const services: Service[] = [
  {
    name: "E-Commerce Development",
    detail: "From product architecture to payment flow, built for speed and sales.",
  },
  {
    name: "Multi-Page Websites",
    detail: "Structured business websites with clear navigation and scalable content blocks.",
  },
  {
    name: "Landing Pages",
    detail: "Focused page systems designed for campaigns, launches, and lead generation.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="mx-auto w-full max-w-6xl px-6 pb-20">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="md:max-w-md">
          <h2 className="text-4xl tracking-tight md:text-5xl">Services</h2>
          <p className="mt-3 text-lg text-black/70">
            I design and develop complete web experiences with strong UX, clean structure,
            and production-ready code.
          </p>
        </div>

        <div className="flex flex-1 flex-wrap gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ delay: index * 0.07, duration: 0.45 }}
              className="flex min-h-[180px] flex-1 basis-[260px] flex-col justify-between border border-black/15 bg-white/50 p-6"
            >
              <h3 className="text-2xl tracking-tight">{service.name}</h3>
              <p className="text-black/70">{service.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
