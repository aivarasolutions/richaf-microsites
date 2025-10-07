import dynamic from 'next/dynamic';
import Head from 'next/head';

// Lazy-load the demo page; duplicate/replace for each client
const Demo = dynamic(() => import('@/components/RichAFQuintanaRoo'), { ssr: false });

export default function ClientPage() {
  return (
    <>
      <Head>
        <title>Rich AF Client Page</title>
        <meta name="robots" content={process.env.NEXT_PUBLIC_INDEX_CLIENT === 'true' ? 'index,follow' : 'noindex,nofollow'} />
      </Head>
      <Demo />
    </>
  );
}
