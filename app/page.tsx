import Live from "./live";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-3">
      <Live />
      <section className="border-t px-6 py-8 max-w-2xl mx-auto text-center text-sm text-muted-foreground">
        <h2 className="text-base font-medium text-foreground mb-3">
          Website Screenshot Viewer
        </h2>
        <p className="mb-3">
          Take screenshots of any website during crawl.
        </p>
        <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs">
          <li>Full-page capture</li>
          <li>Batch screenshots</li>
          <li>Real-time streaming</li>
        </ul>
      </section>
    </main>
  );
}
