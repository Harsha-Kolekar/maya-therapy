import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="overflow-hidden bg-[#f7f4ee]"
    >
      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-6 py-16 sm:py-20 lg:grid-cols-[1fr_0.9fr] lg:gap-16 lg:px-10 lg:py-24">
        
        {/* Text */}
        <div className="max-w-2xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#b87963]" />

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#687968]">
              Licensed Clinical Psychologist · Santa Monica, CA
            </p>
          </div>

          <h1 className="max-w-2xl text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-[#26332d] sm:text-5xl lg:text-6xl">
            Therapy for Anxiety, Trauma &amp; Burnout in Santa Monica, CA.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-[#66716a] sm:text-lg">
            A calmer mind starts with feeling understood. I work with adults
            navigating anxiety, panic, trauma, burnout, and the pressure to
            keep everything together.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[#687968] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#4f6050] hover:shadow-lg"
            >
              Request a Consultation
            </a>

            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full border border-[#687968] px-7 py-3.5 text-sm font-semibold text-[#4f6050] transition-colors duration-200 hover:bg-[#eee9df]"
            >
              Learn About My Approach
            </a>
          </div>

          <div className="mt-9 flex flex-col gap-3 text-sm text-[#66716a] sm:flex-row sm:items-center sm:gap-6">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#687968]" />
              In-person therapy
            </div>

            <div className="hidden h-4 w-px bg-[#ddd8ce] sm:block" />

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#b87963]" />
              Secure telehealth across California
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative mx-auto w-full max-w-lg lg:ml-auto">
          <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-[#d9a18f]/30 sm:-right-8 sm:-top-8 sm:h-40 sm:w-40" />

          <div className="absolute -bottom-5 -left-5 h-28 w-28 rounded-full border border-[#b87963]/40 sm:-bottom-8 sm:-left-8 sm:h-36 sm:w-36" />

          <div className="relative overflow-hidden rounded-[2rem] bg-[#eee9df]">
            <Image
              src="/images/maya/maya-reynolds.png"
              alt="Dr. Maya Reynolds, PsyD, Licensed Clinical Psychologist in Santa Monica"
              width={700}
              height={850}
              priority
              className="h-auto w-full object-cover"
            />

            <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-[#f7f4ee]/95 p-5 shadow-lg backdrop-blur-sm">
              <p className="text-sm font-semibold text-[#26332d]">
                Dr. Maya Reynolds, PsyD
              </p>

              <p className="mt-1 text-xs leading-5 text-[#66716a]">
                Licensed Clinical Psychologist
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}