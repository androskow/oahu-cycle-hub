import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-cyan-900/40 bg-[#0a1628]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0a1628]/85">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight text-cyan-50">
          <span className="text-2xl">🚲</span>
          <span className="hidden sm:inline">Oahu Cycle Hub</span>
          <span className="sm:hidden">Cycle Hub</span>
        </Link>
        <nav className="flex items-center gap-1 text-sm font-medium sm:gap-4">
          <Link
            href="/events"
            className="rounded-md px-3 py-2 text-cyan-100/90 transition hover:bg-cyan-900/50 hover:text-white"
          >
            Events
          </Link>
          <Link
            href="/clubs"
            className="rounded-md px-3 py-2 text-cyan-100/90 transition hover:bg-cyan-900/50 hover:text-white"
          >
            Clubs
          </Link>
          <Link
            href="/submit"
            className="rounded-md bg-orange-500 px-3 py-2 text-[#0a1628] font-semibold transition hover:bg-orange-400"
          >
            Submit
          </Link>
        </nav>
      </div>
    </header>
  );
}
