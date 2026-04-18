import RotatingEarth from "@/components/ui/wireframe-dotted-globe";

export default function DemoOne() {
  return (
    <main className="min-h-screen w-full bg-black flex flex-col items-center justify-center p-8">
        <h1 className="text-white text-3xl font-mono mb-8 font-semibold tracking-tight">D3 Dotted Rotating Globe</h1>
        <RotatingEarth width={1000} height={1000} />
    </main>
  );
}
