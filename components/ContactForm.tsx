"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    // TODO: Send to API

    setTimeout(() => {
      setLoading(false);
      alert("Consultation request submitted!");
    }, 1000);
  };

  return (
    <section className="bg-black text-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="text-center mb-16">
          <p className="text-orange-500 uppercase tracking-[0.3em] text-sm">
            Contact Us
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Let's Create Your Next Masterpiece
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-zinc-400">
            Share your tattoo idea and we'll get back to you within 24 hours to
            schedule your consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left */}

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">

            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid md:grid-cols-2 gap-5">

                <Input
                  label="Full Name"
                  placeholder="John Doe"
                  name="name"
                />

                <Input
                  label="Phone Number"
                  placeholder="+91 9876543210"
                  name="phone"
                />

              </div>

              <Input
                label="Email Address"
                type="email"
                placeholder="john@gmail.com"
                name="email"
              />

              <Textarea
                label="Tattoo Idea"
                placeholder="Describe your tattoo..."
                name="idea"
              />

              <div className="grid md:grid-cols-2 gap-5">

                <Input
                  label="Placement"
                  placeholder="Forearm"
                  name="placement"
                />

                <Input
                  label="Approx Size"
                  placeholder="5 inches"
                  name="size"
                />

              </div>

              <div>

                <label className="block mb-2 text-sm text-zinc-300">
                  Tattoo Style
                </label>

                <select className="w-full rounded-xl bg-zinc-900 border border-zinc-700 p-3 outline-none focus:border-orange-500">

                  <option>Fine Line</option>
                  <option>Blackwork</option>
                  <option>Realism</option>
                  <option>Traditional</option>
                  <option>Geometric</option>
                  <option>Minimal</option>
                  <option>Custom</option>

                </select>

              </div>

              <div className="grid md:grid-cols-2 gap-5">

                <Input
                  label="Budget"
                  placeholder="₹5,000"
                  name="budget"
                />

                <Input
                  type="date"
                  label="Preferred Date"
                  name="date"
                />

              </div>

              <div>

                <label className="block mb-2 text-sm text-zinc-300">
                  Reference Images
                </label>

                <input
                  type="file"
                  multiple
                  className="w-full rounded-xl border border-dashed border-zinc-700 p-6 text-zinc-400 file:bg-orange-500 file:text-white file:border-0 file:px-4 file:py-2 file:rounded-lg"
                />

              </div>

              <Textarea
                label="Additional Notes"
                placeholder="Anything you'd like us to know..."
                name="notes"
              />

              <button
                disabled={loading}
                className="w-full rounded-xl bg-orange-500 py-4 font-semibold transition hover:bg-orange-600"
              >
                {loading ? "Submitting..." : "Request Consultation"}
              </button>

            </form>

          </div>

          {/* Right */}

          <div className="rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900 to-black p-8 flex flex-col justify-center">

            <h3 className="text-3xl font-bold mb-8">
              Visit Our Studio
            </h3>

            <div className="space-y-8">

              <Info
                title="Studio Address"
                value="123 MG Road, Bengaluru, Karnataka"
              />

              <Info
                title="Phone"
                value="+91 9876543210"
              />

              <Info
                title="Email"
                value="hello@tattoostar.com"
              />

              <Info
                title="Working Hours"
                value="Mon - Sat : 11 AM – 9 PM"
              />

            </div>

            <div className="mt-12 overflow-hidden rounded-2xl">

              <iframe
                title="Google Map"
                className="h-72 w-full"
                loading="lazy"
                src="https://www.google.com/maps/embed?pb="
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

function Input({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
}) {
  return (
    <div>
      <label className="block mb-2 text-sm text-zinc-300">
        {label}
      </label>

      <input
        {...props}
        className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-3 outline-none focus:border-orange-500"
      />
    </div>
  );
}

function Textarea({
  label,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
}) {
  return (
    <div>
      <label className="block mb-2 text-sm text-zinc-300">
        {label}
      </label>

      <textarea
        rows={5}
        {...props}
        className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-3 outline-none focus:border-orange-500"
      />
    </div>
  );
}

function Info({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-sm uppercase tracking-wider text-orange-500">
        {title}
      </p>

      <p className="mt-2 text-lg text-zinc-300">
        {value}
      </p>
    </div>
  );
}