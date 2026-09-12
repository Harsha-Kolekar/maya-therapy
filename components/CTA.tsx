"use client";

import { FormEvent, useState } from "react";

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#687968] py-20 sm:py-24 lg:py-28"
    >
      {/* Decorative shapes */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#d9a18f]/20" />

      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full border border-white/20" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          
          {/* Left side */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f3d0c4]">
              Take the Next Step
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.02em] text-white sm:text-4xl lg:text-5xl">
              You don&apos;t have to figure everything out before reaching out.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/80 sm:text-lg">
              If you&apos;re feeling overwhelmed, stuck, or ready for
              something to change, therapy can be a place to begin. Share a
              little about what you&apos;re looking for and take the first
              step toward finding the right fit.
            </p>

            <div className="mt-8 space-y-4 text-sm text-white/80">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-[#f3d0c4]">
                  ✓
                </span>
                In-person therapy in Santa Monica
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-[#f3d0c4]">
                  ✓
                </span>
                Secure telehealth across California
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-[#f3d0c4]">
                  ✓
                </span>
                Warm, collaborative, and grounded care
              </div>
            </div>
          </div>

          {/* Consultation form */}
          <div className="rounded-[2rem] bg-[#f7f4ee] p-6 shadow-2xl sm:p-8 lg:p-10">
            {submitted ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#eee9df] text-2xl text-[#687968]">
                  ✓
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-[#26332d]">
                  Thank you for reaching out.
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-[#66716a]">
                  Your consultation request has been received. We&apos;ll be
                  in touch to learn more about what you&apos;re looking for and
                  discuss next steps.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-7 rounded-full border border-[#687968] px-6 py-3 text-sm font-semibold text-[#4f6050] transition-colors hover:bg-[#eee9df]"
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b87963]">
                    Consultation Request
                  </p>

                  <h3 className="mt-4 text-2xl font-semibold leading-tight text-[#26332d] sm:text-3xl">
                    Let&apos;s start with a conversation.
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#66716a]">
                    Tell me a little about yourself and what brings you to
                    therapy. There&apos;s no need to have everything figured
                    out.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-[#26332d]"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full rounded-xl border border-[#ddd8ce] bg-white px-4 py-3.5 text-sm text-[#26332d] outline-none transition-all placeholder:text-[#9a9f99] focus:border-[#687968] focus:ring-2 focus:ring-[#687968]/10"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-[#26332d]"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-[#ddd8ce] bg-white px-4 py-3.5 text-sm text-[#26332d] outline-none transition-all placeholder:text-[#9a9f99] focus:border-[#687968] focus:ring-2 focus:ring-[#687968]/10"
                    />
                  </div>

                  {/* Preferred format */}
                  <div>
                    <label
                      htmlFor="format"
                      className="mb-2 block text-sm font-medium text-[#26332d]"
                    >
                      Preferred format
                    </label>

                    <select
                      id="format"
                      name="format"
                      required
                      defaultValue=""
                      className="w-full rounded-xl border border-[#ddd8ce] bg-white px-4 py-3.5 text-sm text-[#26332d] outline-none transition-all focus:border-[#687968] focus:ring-2 focus:ring-[#687968]/10"
                    >
                      <option value="" disabled>
                        Select an option
                      </option>
                      <option value="in-person">
                        In-person — Santa Monica
                      </option>
                      <option value="telehealth">
                        Secure telehealth — California
                      </option>
                      <option value="either">
                        Either option
                      </option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-[#26332d]"
                    >
                      How can I help?
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Tell me a little about what you're looking for..."
                      className="w-full resize-none rounded-xl border border-[#ddd8ce] bg-white px-4 py-3.5 text-sm leading-6 text-[#26332d] outline-none transition-all placeholder:text-[#9a9f99] focus:border-[#687968] focus:ring-2 focus:ring-[#687968]/10"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#687968] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#4f6050] hover:shadow-lg"
                  >
                    Request a Consultation
                  </button>

                  <p className="text-center text-xs leading-5 text-[#8a908b]">
                    This demo form is for the assignment website and does not
                    send real messages.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}