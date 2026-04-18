import { GlowCard } from "@/components/ui/spotlight-card";

export function Default(){
  return(
    <div className="w-screen min-h-screen bg-black flex flex-row items-center justify-center gap-10 custom-cursor">
      <GlowCard glowColor="blue" size="md">
        <div className="flex flex-col items-center justify-center p-8 h-full">
            <h2 className="text-white text-2xl font-bold">First</h2>
        </div>
      </GlowCard>
      <GlowCard glowColor="purple" size="md">
        <div className="flex flex-col items-center justify-center p-8 h-full">
            <h2 className="text-white text-2xl font-bold">Second</h2>
        </div>
      </GlowCard>
      <GlowCard glowColor="orange" size="md">
        <div className="flex flex-col items-center justify-center p-8 h-full">
            <h2 className="text-white text-2xl font-bold">Third</h2>
        </div>
      </GlowCard>
    </div>
  );
};
