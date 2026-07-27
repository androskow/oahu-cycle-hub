import EventCard from "@/components/EventCard";
import { getUpcomingEvents, events } from "@/lib/data";
import Link from "next/link";

export const metadata = {
  title: "Events | Oahu Cycle Hub",
  description: "Upcoming cycling events, group rides, and races on Oʻahu",
};

export default function EventsPage() {
  const upcoming = getUpcomingEvents();
  const past = events
    .filter((e) => e.date < new Date().toISOString().slice(0, 10))
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Events</h1>
        <p className="mt-2 text-emerald-200/90">
          Group rides, centuries, clinics, and more across Oʻahu. Always double-check
          details with the organizing club.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-emerald-100">
          Upcoming ({upcoming.length})
        </h2>
        {upcoming.length === 0 ? (
          <div className="rounded-xl border border-emerald-800/50 bg-emerald-900/30 p-8 text-center">
            <p className="text-emerald-200">No upcoming events currently listed.</p>
            <Link
              href="/submit"
              className="mt-4 inline-block text-amber-400 hover:underline"
            >
              Submit an event →
            </Link>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {upcoming.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </section>

      {past.length > 0 && (
        <section>
          <h2 className="mb-4 text-xl font-semibold text-emerald-100/70">
            Recently Past
          </h2>
          <div className="grid gap-4 opacity-70 sm:grid-cols-2">
            {past.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
