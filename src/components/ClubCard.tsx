import type { Club } from "@/lib/types";

interface Props {
  club: Club;
}

export default function ClubCard({ club }: Props) {
  return (
    <article className="flex flex-col rounded-xl border border-emerald-800/40 bg-emerald-950/40 p-5 transition hover:border-emerald-600/60 hover:bg-emerald-900/40">
      <div className="mb-3 flex items-start justify-between gap-2">
        <h3 className="text-lg font-semibold text-emerald-50">{club.name}</h3>
        {club.featured && (
          <span className="rounded-full bg-amber-500/20 px-2.5 py-0.5 text-xs font-medium text-amber-300">
            Featured
          </span>
        )}
      </div>

      <p className="mb-3 text-sm text-emerald-200/80">{club.description}</p>

      <div className="mt-auto space-y-1.5 text-sm text-emerald-300/90">
        <p>
          <span className="text-emerald-400/70">📍</span> {club.location}
        </p>
        <p>
          <span className="text-emerald-400/70">🏷</span> {club.type.join(" · ")}
        </p>
        {club.meetingPoint && (
          <p>
            <span className="text-emerald-400/70">🏁</span> {club.meetingPoint}
          </p>
        )}
      </div>

      <div className="mt-4 flex flex-wrap gap-3 text-sm">
        {club.website && (
          <a
            href={club.website}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-amber-400 hover:text-amber-300"
          >
            Website →
          </a>
        )}
        {club.facebook && (
          <a
            href={club.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-amber-400 hover:text-amber-300"
          >
            Facebook →
          </a>
        )}
        {club.strava && (
          <a
            href={club.strava}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-amber-400 hover:text-amber-300"
          >
            Strava →
          </a>
        )}
      </div>
    </article>
  );
}
