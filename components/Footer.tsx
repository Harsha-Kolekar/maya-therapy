export default function Footer() {
  return (
    <footer className="bg-[#26332d] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div className="max-w-md">
            <a href="#home" className="inline-block">
              <p className="text-2xl font-semibold tracking-[-0.02em]">
                Maya Reynolds
              </p>

              <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#b8c5bb]">
                PsyD · Clinical Psychologist
              </p>
            </a>

            <p className="mt-6 text-sm leading-7 text-white/65">
              Warm, collaborative therapy for adults navigating anxiety,
              trauma, burnout, perfectionism, and the lingering effects of
              difficult experiences.
            </p>

            <p className="mt-5 text-sm leading-7 text-white/65">
              Santa Monica, California
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d9a18f]">
              Explore
            </p>

            <nav className="mt-5 flex flex-col gap-3">
              <a href="#about" className="w-fit text-sm text-white/65 hover:text-white">
                About
              </a>

              <a href="#services" className="w-fit text-sm text-white/65 hover:text-white">
                Who I Help
              </a>

              <a href="#expertise" className="w-fit text-sm text-white/65 hover:text-white">
                Expertise
              </a>

              <a href="#how-i-work" className="w-fit text-sm text-white/65 hover:text-white">
                How I Work
              </a>

              <a href="#specialties" className="w-fit text-sm text-white/65 hover:text-white">
                Specialties
              </a>

              <a href="#our-office" className="w-fit text-sm text-white/65 hover:text-white">
                Our Office
              </a>

              <a href="#faq" className="w-fit text-sm text-white/65 hover:text-white">
                FAQ
              </a>
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d9a18f]">
              Practice
            </p>

            <div className="mt-5 space-y-4 text-sm leading-6 text-white/65">
              <p>
                In-person therapy
                <br />
                Santa Monica, California
              </p>

              <p>
                Secure telehealth
                <br />
                Across California
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-semibold text-white hover:text-[#d9a18f]"
              >
                Request a consultation
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-7">
          <div className="flex flex-col gap-4 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Maya Reynolds, PsyD. All rights
              reserved.
            </p>

            <p>Therapy services for clients in California</p>
          </div>
        </div>
      </div>
    </footer>
  );
}