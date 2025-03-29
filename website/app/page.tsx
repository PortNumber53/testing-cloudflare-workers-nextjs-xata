import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Professional Software Testing Platform
        </h1>
        <p className="text-xl text-[var(--secondary)] mb-8 max-w-2xl mx-auto">
          Streamline your testing process with our modern and efficient
          platform. Run tests, generate reports, and track results all in one
          place.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/tests" className="btn btn-primary">
            Start Testing
          </Link>
          <Link href="/reports" className="btn btn-secondary">
            View Reports
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <h3 className="text-xl font-bold mb-4">Automated Testing</h3>
          <p className="text-[var(--secondary)] mb-4">
            Set up and run automated tests with our intuitive interface. Support
            for multiple testing frameworks.
          </p>
          <Link href="/tests" className="text-[var(--primary)] hover:underline">
            Learn more →
          </Link>
        </div>

        <div className="card">
          <h3 className="text-xl font-bold mb-4">Test Reports</h3>
          <p className="text-[var(--secondary)] mb-4">
            Generate detailed reports with insights and analytics. Track test
            coverage and identify issues.
          </p>
          <Link
            href="/reports"
            className="text-[var(--primary)] hover:underline"
          >
            View reports →
          </Link>
        </div>

        <div className="card">
          <h3 className="text-xl font-bold mb-4">Team Collaboration</h3>
          <p className="text-[var(--secondary)] mb-4">
            Work together with your team. Share results, assign tasks, and track
            progress.
          </p>
          <Link
            href="/settings"
            className="text-[var(--primary)] hover:underline"
          >
            Get started →
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="card text-center">
          <div className="text-3xl font-bold text-[var(--primary)] mb-2">
            10K+
          </div>
          <div className="text-[var(--secondary)]">Tests Run</div>
        </div>
        <div className="card text-center">
          <div className="text-3xl font-bold text-[var(--success)] mb-2">
            98%
          </div>
          <div className="text-[var(--secondary)]">Success Rate</div>
        </div>
        <div className="card text-center">
          <div className="text-3xl font-bold text-[var(--warning)] mb-2">
            2.5s
          </div>
          <div className="text-[var(--secondary)]">Avg. Test Time</div>
        </div>
        <div className="card text-center">
          <div className="text-3xl font-bold text-[var(--accent)] mb-2">
            500+
          </div>
          <div className="text-[var(--secondary)]">Active Users</div>
        </div>
      </section>
    </div>
  );
}
