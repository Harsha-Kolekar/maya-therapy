const expertise = [
  "Anxiety",
  "Panic",
  "Trauma",
  "Burnout",
  "Perfectionism",
  "Chronic Stress",
  "Emotional Regulation",
  "Past Experiences",
];

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b87963]">
              Areas of Expertise
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#26332d] sm:text-4xl lg:text-5xl">
              Support for what you&apos;re carrying right now.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-[#66716a] lg:ml-auto">
            Therapy is tailored to your experience. These are some of the
            concerns and patterns that frequently bring clients into my
            practice.
          </p>
        </div>

        <div className="mt-14 grid border-t border-[#ddd8ce] sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map((item, index) => (
            <div
              key={item}
              className="group border-b border-[#ddd8ce] py-7 sm:px-6 lg:px-7"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-widest text-[#b87963]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="h-px w-8 bg-[#ddd8ce] transition-all duration-300 group-hover:w-12 group-hover:bg-[#687968]" />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-[#26332d]">
                {item}
              </h3>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-[#66716a]">
          And more — your therapy experience is individualized around your
          needs, goals, and pace.
        </p>
      </div>
    </section>
  );
}