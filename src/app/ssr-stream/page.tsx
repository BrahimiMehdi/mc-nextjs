export const dynamic = "force-dynamic";

import Content from "../Content";
import { Suspense } from "react";
import Skeleton from "../Skeleton";
export default function SSRStream() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-y-8 p-24">
      <h1 className="text-center text-4xl text-white font-bold">
        This is SSR with <span className="text-green-400">streaming</span> data
      </h1>
      <Suspense fallback={<Skeleton />}>
        <Content />
      </Suspense>
    </main>
  );
}

