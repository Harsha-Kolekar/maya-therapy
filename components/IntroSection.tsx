import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-10">
        
        {/* Image */}
        <div className="relative order-2 lg:order-1">
          <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-full border border-[#b87963]/40 sm:h-36 sm:w-36" />

          <div className="relative overflow-hidden rounded-[2rem] bg-[#eee9df]">
            <Image
              src="/images/content/intro-reflection.jpg"
              alt="Quiet reflective moment in natural light"
              width={900}
              height={1100}
              className="h-[520px] w-full object-cover sm:h-[600px]"
            />
          </div>
        </div>

        {/* Text */}
        <div className="order-1 lg:order-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b87963]">
            A Space to Slow Down
          </p>

          <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#26332d] sm:text-4xl lg:text-5xl">
            You don&apos;t have to keep pushing through everything on your own.
          </h2>

          <div className="mt-7 space-y-5 text-base leading-8 text-[#66716a]">
            <p>
              Therapy can be a place to pause when life feels overwhelming.
              Together, we can slow things down, understand the patterns
              beneath the surface, and make room for meaningful change.
            </p>

            <p>
              My approach is warm, collaborative, and grounded. Sessions are
              structured enough to feel supportive while still leaving space
              for reflection and deeper work.
            </p>

            <p>
              Whether you&apos;re navigating anxiety, the effects of past
              experiences, or professional burnout, therapy can help you
              reconnect with yourself and develop more sustainable ways of
              living and working.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-[#f7f4ee] p-5">
              <p className="text-2xl font-semibold text-[#687968]">01</p>

              <p className="mt-2 text-sm leading-6 text-[#66716a]">
                Understand what you&apos;re experiencing
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7f4ee] p-5">
              <p className="text-2xl font-semibold text-[#b87963]">02</p>

              <p className="mt-2 text-sm leading-6 text-[#66716a]">
                Build healthier ways forward
              </p>
            </div>
          </div>

          <a
            href="#about"
            className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold text-[#4f6050] transition-colors hover:text-[#b87963]"
          >
            Learn more about my approach
            <span
              aria-hidden="true"
              className="text-lg transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}