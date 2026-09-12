import Image from "next/image";

export default function AboutMaya() {
  return (
    <section
      id="about"
      className="bg-[#f7f4ee] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          
          {/* Maya Image */}
          <div className="relative mx-auto w-full max-w-md lg:mx-0">
            
            {/* Decorative shape */}
            <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full border border-[#b87963]/40 sm:-bottom-8 sm:-left-8 sm:h-40 sm:w-40" />

            <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full bg-[#d9a18f]/30 sm:-right-7 sm:-top-7 sm:h-32 sm:w-32" />

            {/* Image */}
            <div className="relative overflow-hidden rounded-[2rem] bg-[#eee9df]">
              <Image
                src="/images/maya/maya-reynolds.png"
                alt="Dr. Maya Reynolds, PsyD, Licensed Clinical Psychologist"
                width={700}
                height={850}
                className="h-auto w-full object-cover"
              />
            </div>

            {/* Credentials card */}
            <div className="relative mx-5 -mt-10 rounded-2xl bg-white p-5 shadow-lg sm:mx-8">
              <p className="text-sm font-semibold text-[#26332d]">
                Dr. Maya Reynolds, PsyD
              </p>

              <p className="mt-1 text-xs leading-5 text-[#66716a]">
                Licensed Clinical Psychologist
              </p>

              <div className="mt-3 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#687968]" />

                <span className="text-xs font-medium text-[#4f6050]">
                  Santa Monica, California
                </span>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div>
            
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b87963]">
              About Dr. Maya Reynolds, PsyD
            </p>

            <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#26332d] sm:text-4xl lg:text-5xl">
              Therapy in Santa Monica that makes room for both practical change and deeper understanding.
            </h2>

            <div className="mt-7 space-y-5 text-base leading-8 text-[#66716a]">
              <p>
                I&apos;m a licensed clinical psychologist based in Santa
                Monica, California. I work with adults who feel overwhelmed by
                anxiety, stress, or the lingering effects of past experiences.
              </p>

              <p>
                Many of the people I work with are thoughtful, self-aware, and
                high-achieving, yet internally feel exhausted, stuck in
                overthinking, or emotionally on edge.
              </p>

              <p>
                My approach is warm, collaborative, and grounded. I integrate
                cognitive-behavioral therapy, EMDR, mindfulness-based
                practices, and body-oriented techniques to help clients
                understand both the emotional and physiological sides of what
                they&apos;re experiencing.
              </p>

              <p>
                I believe therapy works best when you feel respected,
                understood, and actively involved in the process. The goal is
                not just symptom relief, but developing insight, resilience,
                and a stronger relationship with yourself over time.
              </p>
            </div>

            {/* Approach highlights */}
            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              
              <div className="rounded-2xl border border-[#ddd8ce] bg-white p-5">
                <p className="text-sm font-semibold text-[#26332d]">
                  Warm
                </p>

                <p className="mt-2 text-xs leading-5 text-[#66716a]">
                  A supportive space where you can feel understood.
                </p>
              </div>

              <div className="rounded-2xl border border-[#ddd8ce] bg-white p-5">
                <p className="text-sm font-semibold text-[#26332d]">
                  Collaborative
                </p>

                <p className="mt-2 text-xs leading-5 text-[#66716a]">
                  Your perspective and goals remain central to our work.
                </p>
              </div>

              <div className="rounded-2xl border border-[#ddd8ce] bg-white p-5">
                <p className="text-sm font-semibold text-[#26332d]">
                  Grounded
                </p>

                <p className="mt-2 text-xs leading-5 text-[#66716a]">
                  Practical tools balanced with reflection and depth.
                </p>
              </div>

            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#687968] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#4f6050] hover:shadow-lg"
            >
              Connect With Me

              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}