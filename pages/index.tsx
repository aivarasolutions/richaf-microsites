import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#FAF8F5]">
      <div className="max-w-xl text-center p-8">
        <h1 className="text-3xl font-serif mb-3">Rich AF Microsites</h1>
        <p className="text-black/70 mb-6">Launch client‑specific pages as subpaths under one subdomain.</p>
        <Link className="inline-block px-6 py-3 rounded-full bg-black text-white" href="/client/quintana-roo">
          Open Demo Page
        </Link>
      </div>
    </main>
  );
}
