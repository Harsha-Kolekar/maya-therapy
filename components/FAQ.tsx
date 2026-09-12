"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What concerns do you work with?",
    answer:
      "I work with adults navigating anxiety, panic, trauma, burnout, perfectionism, and high internal pressure. Some clients may appear functional on the outside while privately experiencing worry, tension, overthinking, difficulty sleeping, or the effects of earlier experiences.",
  },
  {
    question: "Do you offer both in-person and telehealth therapy?",
    answer:
      "Yes. I offer in-person therapy from my Santa Monica office and secure telehealth sessions for clients located in California.",
  },
  {
    question: "What therapy approaches do you use?",
    answer:
      "I integrate evidence-based approaches including cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques. The work is adapted to your needs and paced carefully.",
  },
  {
    question: "Do you work with trauma?",
    answer:
      "Yes. Trauma work is an important part of my practice. I work with adults who have experienced single-incident trauma as well as more complex, long-standing patterns connected to childhood, relationships, or chronic stress. Safety, stabilization, and regulation are important parts of this work.",
  },
  {
    question: "What can I expect from your approach to therapy?",
    answer:
      "My approach is warm, collaborative, and grounded. Sessions are structured enough to feel supportive while still allowing space for reflection and depth. I believe therapy works best when clients feel respected, understood, and actively involved in the process.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="bg-[#f7f4ee] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b87963]">
            Frequently Asked Questions
          </p>

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#26332d] sm:text-4xl lg:text-5xl">
            A few things you may be wondering.
          </h2>

          <p className="mt-6 text-base leading-8 text-[#66716a]">
            Starting therapy can bring up questions. Here is a little more
            about my work and what I offer.
          </p>
        </div>

        {/* FAQ list */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-[#ddd8ce] bg-white">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b border-[#ddd8ce] last:border-b-0"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left transition-colors duration-200 hover:bg-[#eee9df] sm:px-8"
                >
                  <span className="text-base font-semibold text-[#26332d] sm:text-lg">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#ddd8ce] text-lg text-[#687968] transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm leading-7 text-[#66716a] sm:px-8 sm:pb-8 sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <p className="text-sm text-[#66716a]">
            Have another question?
          </p>

          <a
            href="#contact"
            className="group mt-3 inline-flex items-center gap-3 text-sm font-semibold text-[#4f6050] transition-colors hover:text-[#b87963]"
          >
            Get in touch

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