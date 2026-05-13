export function Footer() {
  return (
    <footer className="border-t border-black/15 bg-[#efefef]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-3">
          <p className="text-2xl tracking-tight">TD</p>
          <p className="max-w-md text-sm text-black/65">
            Fullstack developer building e-commerce sites, multi-page websites, and landing pages.
          </p>
        </div>

        <div className="flex flex-col gap-6 text-sm text-black/75 md:items-end">
          <div className="flex flex-wrap gap-5">
            <a href="#about" className="transition hover:text-black">
              About
            </a>
            <a href="#works" className="transition hover:text-black">
              Works
            </a>
            <a href="#services" className="transition hover:text-black">
              Services
            </a>

          </div>
          <a href="https://wa.link/ce2n9w" className="underline underline-offset-4 transition hover:text-black">
           Get in Touch
          </a>
          <p className="text-xs text-black/55">© {new Date().getFullYear()} TD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
