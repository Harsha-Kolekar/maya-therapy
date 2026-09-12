import Image from "next/image";

export default function OurOffice() {
  return (
    <section
      id="our-office"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* Section heading */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b87963]">
              Our Office
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#26332d] sm:text-4xl lg:text-5xl">
              A quiet place to pause, reflect, and feel at ease.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-[#66716a] lg:ml-auto">
            My Santa Monica office is designed to feel calm, private, and
            grounding—a comfortable space where you can slow down and focus on
            yourself.
          </p>
        </div>

        {/* Office images */}
        <div className="mt-14 grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
          
          {/* Main office image */}
          <div className="group relative min-h-[360px] overflow-hidden rounded-[2rem] bg-[#eee9df] sm:min-h-[500px]">
            <Image
              src="/images/office/office1.jpeg"
              alt="Comfortable and naturally lit therapy office in Santa Monica"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />

            <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-[#f7f4ee]/95 p-5 backdrop-blur-sm sm:inset-x-7 sm:bottom-7">
              <p className="text-sm font-semibold text-[#26332d]">
                A comfortable space for meaningful work
              </p>

              <p className="mt-1 text-xs leading-5 text-[#66716a]">
                Natural light, thoughtful details, and room to breathe.
              </p>
            </div>
          </div>

          {/* Secondary image */}
          <div className="group relative min-h-[360px] overflow-hidden rounded-[2rem] bg-[#eee9df] sm:min-h-[500px]">
            <Image
              src="/images/office/office2.jpeg"
              alt="Private therapy office with comfortable seating and natural light"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>

        {/* Office information */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          
          {/* Location */}
          <div className="rounded-3xl bg-[#f7f4ee] p-7">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eee9df] text-[#687968]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"
                />
                <circle cx="12" cy="9" r="2.3" />
              </svg>
            </div>

            <h3 className="mt-5 text-lg font-semibold text-[#26332d]">
              Santa Monica Office
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#66716a]">
              123th Street 45 W
              <br />
              Santa Monica, CA 90401
            </p>
          </div>

          {/* Environment */}
          <div className="rounded-3xl bg-[#f7f4ee] p-7">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eee9df] text-[#687968]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 12.5c2.2-.2 4.1-1.1 5.3-3.2 1.7.8 3 2.2 3.7 4.2"
                />
              </svg>
            </div>

            <h3 className="mt-5 text-lg font-semibold text-[#26332d]">
              Calm & Private
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#66716a]">
              A quiet, uncluttered environment designed to help you feel
              comfortable and grounded.
            </p>
          </div>

          {/* Sessions */}
          <div className="rounded-3xl bg-[#f7f4ee] p-7 sm:col-span-2 lg:col-span-1">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eee9df] text-[#687968]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <rect
                  x="4"
                  y="5"
                  width="16"
                  height="14"
                  rx="2"
                />
                <path
                  strokeLinecap="round"
                  d="M8 9h8M8 13h5"
                />
              </svg>
            </div>

            <h3 className="mt-5 text-lg font-semibold text-[#26332d]">
              In-Person & Telehealth
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#66716a]">
              Meet in person at the Santa Monica office or connect securely
              through telehealth anywhere in California.
            </p>
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-12 rounded-[2rem] border border-[#ddd8ce] bg-[#eee9df] p-8 text-center sm:p-10">
          <p className="mx-auto max-w-3xl text-lg leading-8 text-[#26332d] sm:text-xl">
            The space itself is part of the experience—a place where you can
            arrive, settle in, and give yourself permission to slow down.
          </p>

          <a
            href="#contact"
            className="group mt-6 inline-flex items-center gap-3 text-sm font-semibold text-[#4f6050] transition-colors hover:text-[#b87963]"
          >
            Schedule a consultation

            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}