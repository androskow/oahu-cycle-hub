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
      <section className="relative overflow-hidden border-b border-cyan-900/40 bg-gradient-to-br from-[#0a1628] via-[#0c1e36] to-[#0a2a3d]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-500/15 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-orange-400">
            Oʻahu · Hawaiʻi
          </p>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Find your next ride.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-cyan-100/90">
            One place for Oahu cycling clubs, group rides, and events.
            Built by riders, for riders — with aloha.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/events"
              className="rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-semibold text-[#0a1628] transition hover:bg-orange-400"
            >
              Browse Events
            </Link>
            <Link
              href="/clubs"
              className="rounded-lg border border-cyan-600/50 bg-cyan-950/50 px-5 py-2.5 text-sm font-semibold text-cyan-50 transition hover:bg-cyan-900/60"
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
            <p className="mt-1 text-sm text-cyan-300/80">
              Next rides and organized events on the island
            </p>
          </div>
          <Link
            href="/events"
            className="text-sm font-medium text-orange-400 hover:text-orange-300"
          >
            View all →
          </Link>
        </div>

        {upcoming.length === 0 ? (
          <p className="rounded-lg border border-cyan-800/50 bg-cyan-950/40 p-6 text-cyan-200">
            No upcoming events in the data yet.{" "}
            <Link href="/submit" className="text-orange-400 underline">
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
      <section className="border-t border-cyan-900/40 bg-[#07101f]/80">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white">Featured Clubs</h2>
              <p className="mt-1 text-sm text-cyan-300/80">
                Active groups organizing rides on Oʻahu
              </p>
            </div>
            <Link
              href="/clubs"
              className="text-sm font-medium text-orange-400 hover:text-orange-300"
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
        <div className="rounded-2xl border border-cyan-700/40 bg-gradient-to-r from-cyan-950/80 to-[#0c2a3a] p-8 text-center sm:p-10">
          <h2 className="text-2xl font-bold text-white">Know of a ride or club?</h2>
          <p className="mx-auto mt-2 max-w-md text-cyan-100/90">
            Help keep the calendar current. Submissions are reviewed and added
            quickly.
          </p>
          <Link
            href="/submit"
            className="mt-6 inline-block rounded-lg bg-orange-500 px-6 py-2.5 text-sm font-semibold text-[#0a1628] transition hover:bg-orange-400"
          >
            Submit an Event or Club
          </Link>
        </div>
      </section>
    </div>
  );
}
