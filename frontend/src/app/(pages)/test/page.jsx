"use client";

import dynamic from "next/dynamic";

const MyMap = dynamic(() => import("@/components/map/MapComponent"), {
  ssr: false,
});

export default function TestPage() {
  return (
    <main style={{ width: "100vw", height: "100vh" }}>
      <MyMap />
    </main>
  );
}
