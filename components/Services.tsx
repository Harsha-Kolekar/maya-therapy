import Image from "next/image";

const specialties = [
  {
    title: "Anxiety & Panic",
    description:
      "Support for persistent worry, tension, overthinking, panic, difficulty sleeping, and the feeling of always bracing for something to go wrong.",
  },
  {
    title: "Trauma",
    description:
      "Carefully paced trauma work for single-incident experiences and more complex patterns connected to childhood, relationships, or chronic stress.",
  },
  {
    title: "EMDR",
    description:
      "An evidence-based trauma-focused approach integrated with careful attention to safety, stabilization, regulation, and your individual pace.",
  },
  {
    title: "Burnout & Perfectionism",
    description:
      "Support for professionals, entrepreneurs, and creatives who feel exhausted, disconnected, or caught in cycles of high internal pressure.",
  },
];

export default function Services() {
  return (
    <section
      id="specialties"
      className="bg-[#f7f4ee] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-end gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b87963]">
              My Specialties
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#26332d] sm:text-4xl lg:text-5xl">
              Practical support for meaningful change.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-[#66716a] lg:ml-auto">
            I integrate cognitive-behavioral therapy, EMDR, mindfulness-based
            practices, and body-oriented techniques depending on what will be
            most helpful for you.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          
          {/* Image */}
          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-[#eee9df] lg:min-h-[620px]">
            <Image
              src="/images/content/specialties.jpg"
              alt="Quiet moment of reflection and personal growth"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />

            <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-[#f7f4ee]/95 p-5 backdrop-blur-sm sm:inset-x-7 sm:bottom-7">
              <p className="text-sm font-semibold text-[#26332d]">
                Depth with practical tools
              </p>

              <p className="mt-1 text-xs leading-5 text-[#66716a]">
                Evidence-based methods balanced with reflection and
                collaboration.
              </p>
            </div>
          </div>

          {/* Specialty list */}
          <div className="divide-y divide-[#ddd8ce] rounded-[2rem] border border-[#ddd8ce] bg-white">
            {specialties.map((specialty, index) => (
              <article
                key={specialty.title}
                className="group p-7 transition-colors duration-200 hover:bg-[#eee9df] sm:p-8"
              >
                <div className="flex items-start gap-6">
                  <span className="pt-1 text-sm font-semibold tracking-widest text-[#b87963]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="text-xl font-semibold text-[#26332d] sm:text-2xl">
                      {specialty.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#66716a] sm:text-base">
                      {specialty.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}