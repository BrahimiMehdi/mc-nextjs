export const dynamic ="force-static"
import Content from "../Content";

export default function SSG() {
    
  return (
    <main className="flex min-h-screen flex-col items-center gap-y-8 p-24">
        <h1 className="text-center text-4xl text-white font-bold">
            This is SSG
        </h1>
        <Content />
    </main>
  );
}

