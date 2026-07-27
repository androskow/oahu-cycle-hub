export default function Footer() {
  return (
    <footer className="mt-auto border-t border-emerald-900/30 bg-emerald-950 text-emerald-200/80">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-medium text-emerald-50">Oahu Cycle Hub</p>
            <p className="mt-1 text-sm">
              Community-driven aggregator of cycling clubs & events on Oʻahu.
            </p>
          </div>
          <div className="text-sm">
            <p>Built for local riders • Not affiliated with any single club</p>
            <p className="mt-1 text-emerald-300/70">
              Data is community-maintained. Always verify details with organizers.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
