import clubsData from "@/data/clubs.json";
import eventsData from "@/data/events.json";
import type { Club, Event } from "./types";

export const clubs: Club[] = clubsData as Club[];
export const events: Event[] = eventsData as Event[];

export function getUpcomingEvents(limit?: number): Event[] {
  const today = new Date().toISOString().slice(0, 10);
  const upcoming = events
    .filter((e) => e.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date));
  return limit ? upcoming.slice(0, limit) : upcoming;
}

export function getFeaturedEvents(): Event[] {
  return events.filter((e) => e.featured);
}

export function getFeaturedClubs(): Club[] {
  return clubs.filter((c) => c.featured);
}

export function getClubById(id: string): Club | undefined {
  return clubs.find((c) => c.id === id);
}

export function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T12:00:00");
  return d.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
