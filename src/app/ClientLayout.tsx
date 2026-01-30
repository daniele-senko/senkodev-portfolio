"use client";

import dynamic from "next/dynamic";

const AnimatedBackground = dynamic(
  () => import("./components/AnimatedBackground"),
  { ssr: false },
);

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AnimatedBackground />
      {children}
    </>
  );
}
