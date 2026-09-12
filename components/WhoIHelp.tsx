import Image from "next/image";

const areas = [
  {
    number: "01",
    title: "Adults Navigating Anxiety",
    image: "/images/content/support-anxiety.jpg",
    alt: "Adult woman reflecting quietly in natural surroundings",
    description:
      "Support for adults experiencing persistent worry, overthinking, tension, panic, difficulty sleeping, or the feeling of always being on edge.",
  },
  {
    number: "02",
    title: "Adults Healing From Trauma",
    image: "/images/content/support-trauma.jpg",
    alt: "Therapy conversation in a calm setting",
    description:
      "A carefully paced approach for adults working through single-incident trauma or longer-standing experiences connected to childhood, relationships, or chronic stress.",
  },
  {
    number: "03",
    title: "High-Achieving Professionals",
    image: "/images/content/support-burnout.jpg",
    alt: "Professional experiencing stress while working",
    description:
      "Therapy for entrepreneurs, creatives, and professionals dealing with burnout, perfectionism, exhaustion, and the pressure to keep pushing forward.",
  },
];

export default function WhoIHelp() {
  return (
    <section
      id="services"
      className="bg-[#f7f4ee] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b87963]">
            Who I Help
          </p>

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#26332d] sm:text-4xl lg:text-5xl">
            Therapy for adults who are ready to understand what&apos;s beneath
            the surface.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#66716a] sm:text-lg">
            I work with adults who may look capable on the outside while
            privately feeling overwhelmed, exhausted, or stuck. Our work
            begins with understanding what is happening beneath the surface.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {areas.map((area) => (
            <article
              key={area.number}
              className="group overflow-hidden rounded-[2rem] border border-[#ddd8ce] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden bg-[#eee9df]">
                <Image
                  src={area.image}
                  alt={area.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />

                <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#f7f4ee]/95 text-sm font-semibold text-[#687968]">
                  {area.number}
                </div>
              </div>

              <div className="p-7 sm:p-8">
                <h3 className="text-2xl font-semibold tracking-[-0.02em] text-[#26332d]">
                  {area.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-[#66716a] sm:text-base">
                  {area.description}
                </p>

                <a
                  href="#contact"
                  className="group/link mt-7 inline-flex items-center gap-3 text-sm font-semibold text-[#687968] transition-colors hover:text-[#b87963]"
                >
                  Explore therapy
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover/link:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}