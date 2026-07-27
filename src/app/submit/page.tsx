"use client";

import { useState, type FormEvent } from "react";

export default function SubmitPage() {
  const [type, setType] = useState<"event" | "club">("event");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Lightweight: in production you would POST to an API route,
    // Airtable, Formspree, or email. For now we just show success.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-xl px-4 py-16 text-center sm:px-6">
        <div className="rounded-2xl border border-emerald-700/50 bg-emerald-900/40 p-10">
          <p className="text-4xl">🤙</p>
          <h1 className="mt-4 text-2xl font-bold text-white">Mahalo!</h1>
          <p className="mt-2 text-emerald-200">
            Your submission was received. We&apos;ll review and add it to the
            site soon.
          </p>
          <a
            href="/"
            className="mt-6 inline-block text-amber-400 hover:underline"
          >
            Back to home →
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-bold text-white">Submit</h1>
      <p className="mt-2 text-emerald-200/90">
        Add an event or club so the community can find it. Fields marked * are
        required.
      </p>

      <div className="mt-6 flex gap-2">
        <button
          type="button"
          onClick={() => setType("event")}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
            type === "event"
              ? "bg-amber-500 text-emerald-950"
              : "bg-emerald-900/60 text-emerald-100 hover:bg-emerald-800"
          }`}
        >
          Event / Ride
        </button>
        <button
          type="button"
          onClick={() => setType("club")}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
            type === "club"
              ? "bg-amber-500 text-emerald-950"
              : "bg-emerald-900/60 text-emerald-100 hover:bg-emerald-800"
          }`}
        >
          Club / Group
        </button>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        {type === "event" ? (
          <>
            <div>
              <label className="block text-sm font-medium text-emerald-100">
                Event Title *
              </label>
              <input
                required
                name="title"
                className="mt-1 w-full rounded-lg border border-emerald-700 bg-emerald-950/60 px-3 py-2 text-emerald-50 placeholder:text-emerald-600 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                placeholder="e.g. Mauka Sunday Group Ride"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-emerald-100">
                  Date *
                </label>
                <input
                  required
                  type="date"
                  name="date"
                  className="mt-1 w-full rounded-lg border border-emerald-700 bg-emerald-950/60 px-3 py-2 text-emerald-50 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-emerald-100">
                  Start Time
                </label>
                <input
                  name="startTime"
                  className="mt-1 w-full rounded-lg border border-emerald-700 bg-emerald-950/60 px-3 py-2 text-emerald-50 placeholder:text-emerald-600 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  placeholder="07:00"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-emerald-100">
                Location / Start *
              </label>
              <input
                required
                name="location"
                className="mt-1 w-full rounded-lg border border-emerald-700 bg-emerald-950/60 px-3 py-2 text-emerald-50 placeholder:text-emerald-600 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                placeholder="e.g. Waipahu, Kapiolani Park"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-emerald-100">
                Organizing Club
              </label>
              <input
                name="club"
                className="mt-1 w-full rounded-lg border border-emerald-700 bg-emerald-950/60 px-3 py-2 text-emerald-50 placeholder:text-emerald-600 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                placeholder="Mauka Cycling Club"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-emerald-100">
                Description
              </label>
              <textarea
                name="description"
                rows={3}
                className="mt-1 w-full rounded-lg border border-emerald-700 bg-emerald-950/60 px-3 py-2 text-emerald-50 placeholder:text-emerald-600 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                placeholder="Pace, distance, what to expect..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-emerald-100">
                Link (registration / more info)
              </label>
              <input
                name="link"
                type="url"
                className="mt-1 w-full rounded-lg border border-emerald-700 bg-emerald-950/60 px-3 py-2 text-emerald-50 placeholder:text-emerald-600 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                placeholder="https://"
              />
            </div>
          </>
        ) : (
          <>
            <div>
              <label className="block text-sm font-medium text-emerald-100">
                Club Name *
              </label>
              <input
                required
                name="name"
                className="mt-1 w-full rounded-lg border border-emerald-700 bg-emerald-950/60 px-3 py-2 text-emerald-50 placeholder:text-emerald-600 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                placeholder="e.g. Mauka Cycling Club"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-emerald-100">
                Location / Area *
              </label>
              <input
                required
                name="location"
                className="mt-1 w-full rounded-lg border border-emerald-700 bg-emerald-950/60 px-3 py-2 text-emerald-50 placeholder:text-emerald-600 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                placeholder="Oahu, Windward, Central, etc."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-emerald-100">
                Description
              </label>
              <textarea
                name="description"
                rows={3}
                className="mt-1 w-full rounded-lg border border-emerald-700 bg-emerald-950/60 px-3 py-2 text-emerald-50 placeholder:text-emerald-600 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                placeholder="What kind of rides, who it's for..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-emerald-100">
                Website
              </label>
              <input
                name="website"
                type="url"
                className="mt-1 w-full rounded-lg border border-emerald-700 bg-emerald-950/60 px-3 py-2 text-emerald-50 placeholder:text-emerald-600 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                placeholder="https://"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-emerald-100">
                Facebook / Strava / Contact
              </label>
              <input
                name="contact"
                className="mt-1 w-full rounded-lg border border-emerald-700 bg-emerald-950/60 px-3 py-2 text-emerald-50 placeholder:text-emerald-600 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                placeholder="Link or how to join"
              />
            </div>
          </>
        )}

        <div>
          <label className="block text-sm font-medium text-emerald-100">
            Your email (optional, for follow-up)
          </label>
          <input
            name="email"
            type="email"
            className="mt-1 w-full rounded-lg border border-emerald-700 bg-emerald-950/60 px-3 py-2 text-emerald-50 placeholder:text-emerald-600 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
            placeholder="you@example.com"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-amber-500 py-2.5 text-sm font-semibold text-emerald-950 transition hover:bg-amber-400"
        >
          Submit {type === "event" ? "Event" : "Club"}
        </button>
      </form>

      <p className="mt-6 text-center text-xs text-emerald-400/70">
        This is a lightweight demo form. Wire it to Formspree, Airtable, or a
        Next.js API route for real submissions.
      </p>
    </div>
  );
}
