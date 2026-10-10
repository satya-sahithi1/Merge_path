import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4"
      style={{ background: "var(--background)" }}>
      <div className="max-w-xl w-full text-center space-y-6">
        <h1 className="text-3xl font-semibold" style={{ color: "var(--text-primary)" }}>
          Merge Path
        </h1>
        <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
          Learn to tell in minutes whether a repo and an issue are worth your time.
        </p>
        <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
          Practice on a fake repo. Get it wrong. It costs nothing here.
        </p>
        <Link
          href="/repo/notes-app"
          className="inline-block px-6 py-3 rounded-md text-sm font-medium transition-colors"
          style={{ background: "var(--accent)", color: "#fff" }}
        >
          Start exploring →
        </Link>
      </div>
    </main>
  );
}
