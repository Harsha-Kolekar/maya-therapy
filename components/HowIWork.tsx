import Image from "next/image";

export default function HowIWork() {
  return (
    <section
      id="how-i-work"
      className="bg-[#26332d] py-20 text-white sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          
          {/* Image */}
          <div className="relative">
            <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full border border-[#d9a18f]/40 sm:h-40 sm:w-40" />

            <div className="relative overflow-hidden rounded-[2rem]">
              <Image
                src="/images/content/how-i-work.jpg"
                alt="Quiet walk through nature representing reflection and forward movement"
                width={900}
                height={1100}
                className="h-[520px] w-full object-cover sm:h-[600px]"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d9a18f]">
              How I Work
            </p>

            <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl lg:text-5xl">
              Therapy that is thoughtful, collaborative, and grounded.
            </h2>

            <div className="mt-7 space-y-5 text-base leading-8 text-white/70 sm:text-lg">
              <p>
                I take the time to deeply listen and understand your story,
                your struggles, and the patterns that may be keeping you stuck.
                Because no two people are the same, our work is tailored to
                your needs rather than following a one-size-fits-all formula.
              </p>

              <p>
                Sessions are structured enough to feel supportive while still
                leaving room for reflection and deeper work. When trauma is
                involved, we move carefully, with safety, stabilization, and
                regulation at the center.
              </p>

              <p>
                We may work with thoughts, emotions, physical experiences, and
                everyday patterns. The goal is not only symptom relief, but
                greater insight, resilience, and more sustainable ways of
                living and working.
              </p>
            </div>

            <a
              href="#about"
              className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold text-[#f3d0c4] transition-colors hover:text-white"
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

        {/* Principles */}
        <div className="mt-16 grid gap-5 border-t border-white/10 pt-8 sm:grid-cols-3">
          <div className="border-white/10 sm:border-r sm:pr-7">
            <p className="text-sm font-semibold text-[#d9a18f]">01</p>
            <h3 className="mt-3 text-lg font-semibold">Listen deeply</h3>
            <p className="mt-2 text-sm leading-6 text-white/55">
              Your experience remains at the center of our work.
            </p>
          </div>

          <div className="border-white/10 sm:border-r sm:px-7">
            <p className="text-sm font-semibold text-[#d9a18f]">02</p>
            <h3 className="mt-3 text-lg font-semibold">Move at your pace</h3>
            <p className="mt-2 text-sm leading-6 text-white/55">
              Especially in trauma work, safety and stability come first.
            </p>
          </div>

          <div className="sm:pl-7">
            <p className="text-sm font-semibold text-[#d9a18f]">03</p>
            <h3 className="mt-3 text-lg font-semibold">Create lasting change</h3>
            <p className="mt-2 text-sm leading-6 text-white/55">
              Build insight, resilience, and sustainable ways forward.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}