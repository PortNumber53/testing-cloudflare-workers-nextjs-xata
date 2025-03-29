import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <div className="space-y-6">
        <h1 className="text-6xl font-bold text-[var(--primary)]">404</h1>
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Page Not Found</h2>
          <p className="text-[var(--secondary)] max-w-md">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Let&apos;s get you back on track.
          </p>
        </div>
        <div className="pt-4">
          <Link href="/" className="btn btn-primary">
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
