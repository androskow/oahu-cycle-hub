import type { Event } from "@/lib/types";
import { formatDate } from "@/lib/data";

interface Props {
  event: Event;
}

export default function EventCard({ event }: Props) {
  return (
    <article className="group flex flex-col rounded-xl border border-cyan-800/40 bg-cyan-950/30 p-5 transition hover:border-cyan-500/50 hover:bg-cyan-900/30">
      <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
        <div>
          <time className="text-sm font-medium text-orange-400">
            {formatDate(event.date)}
            {event.startTime && ` · ${event.startTime}`}
          </time>
          <h3 className="mt-1 text-lg font-semibold text-cyan-50 group-hover:text-white">
            {event.title}
          </h3>
        </div>
        {event.featured && (
          <span className="rounded-full bg-orange-500/20 px-2.5 py-0.5 text-xs font-medium text-orange-300">
            Featured
          </span>
        )}
      </div>

      <p className="mb-3 text-sm text-cyan-100/75 line-clamp-2">
        {event.description}
      </p>

      <div className="mt-auto space-y-1 text-sm text-cyan-200/80">
        <p>
          <span className="text-cyan-400/70">📍</span> {event.location}
        </p>
        <p>
          <span className="text-cyan-400/70">🏷</span> {event.type}
          {event.distance && ` · ${event.distance}`}
        </p>
        <p>
          <span className="text-cyan-400/70">👥</span> {event.club}
        </p>
      </div>

      {event.link && (
        <a
          href={event.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex text-sm font-medium text-orange-400 hover:text-orange-300"
        >
          Details / Register →
        </a>
      )}
    </article>
  );
}
