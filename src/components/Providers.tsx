'use client'; // This is a Client Component

import dynamic from 'next/dynamic';

// We dynamically import the Lenis provider here, where it is allowed
const ReactLenis = dynamic(
  () => import('lenis/react').then((mod) => mod.ReactLenis),
  { ssr: false }
);

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.07, duration: 1.2, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}