import ClubCard from "@/components/ClubCard";
import { clubs } from "@/lib/data";
import Link from "next/link";

export const metadata = {
  title: "Clubs | Oahu Cycle Hub",
  description: "Cycling clubs and groups on Oʻahu and around Hawaiʻi",
};

export default function ClubsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Clubs & Groups</h1>
        <p className="mt-2 text-emerald-200/90">
          Local clubs organizing regular rides, racing, advocacy, and community
          events. Reach out directly or join via their links.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {clubs.map((club) => (
          <ClubCard key={club.id} club={club} />
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-dashed border-emerald-700/50 bg-emerald-900/20 p-6 text-center">
        <p className="text-emerald-200">
          Missing a club?{" "}
          <Link href="/submit" className="font-medium text-amber-400 hover:underline">
            Submit it
          </Link>{" "}
          so others can find it.
        </p>
      </div>
    </div>
  );
}
