import Link from "next/link";
import EventCard from "@/components/EventCard";
import ClubCard from "@/components/ClubCard";
import { getUpcomingEvents, getFeaturedClubs } from "@/lib/data";

export default function Home() {
  const upcoming = getUpcomingEvents(4);
  const featuredClubs = getFeaturedClubs();

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-emerald-800/40 bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-amber-400">
            Oʻahu · Hawaiʻi
          </p>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Find your next ride.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-emerald-100/90">
            One lightweight place for Oahu cycling clubs, group rides, and events.
            Built by riders, for riders.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/events"
              className="rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-semibold text-emerald-950 transition hover:bg-amber-400"
            >
              Browse Events
            </Link>
            <Link
              href="/clubs"
              className="rounded-lg border border-emerald-600/60 bg-emerald-900/50 px-5 py-2.5 text-sm font-semibold text-emerald-50 transition hover:bg-emerald-800/60"
            >
              View Clubs
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-white">Upcoming Events</h2>
            <p className="mt-1 text-sm text-emerald-300/80">
              Next rides and organized events on the island
            </p>
          </div>
          <Link
            href="/events"
            className="text-sm font-medium text-amber-400 hover:text-amber-300"
          >
            View all →
          </Link>
        </div>

        {upcoming.length === 0 ? (
          <p className="rounded-lg border border-emerald-800/50 bg-emerald-900/30 p-6 text-emerald-200">
            No upcoming events in the data yet.{" "}
            <Link href="/submit" className="text-amber-400 underline">
              Submit one
            </Link>
            .
          </p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {upcoming.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </section>

      {/* Featured Clubs */}
      <section className="border-t border-emerald-800/40 bg-emerald-950/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white">Featured Clubs</h2>
              <p className="mt-1 text-sm text-emerald-300/80">
                Active groups organizing rides on Oʻahu
              </p>
            </div>
            <Link
              href="/clubs"
              className="text-sm font-medium text-amber-400 hover:text-amber-300"
            >
              All clubs →
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {featuredClubs.map((club) => (
              <ClubCard key={club.id} club={club} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-emerald-700/50 bg-gradient-to-r from-emerald-900/80 to-teal-900/60 p-8 text-center sm:p-10">
          <h2 className="text-2xl font-bold text-white">Know of a ride or club?</h2>
          <p className="mx-auto mt-2 max-w-md text-emerald-100/90">
            Help keep the calendar current. Submissions are reviewed and added
            quickly.
          </p>
          <Link
            href="/submit"
            className="mt-6 inline-block rounded-lg bg-amber-500 px-6 py-2.5 text-sm font-semibold text-emerald-950 transition hover:bg-amber-400"
          >
            Submit an Event or Club
          </Link>
        </div>
      </section>
    </div>
  );
}
