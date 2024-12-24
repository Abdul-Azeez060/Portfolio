import { HeroHighlightDemo } from "@/components/Hero";

import { About } from "@/components/About";
import { FloatingDockDemo } from "@/components/ui/FloatingDock";
import { ShineBorderDemo } from "@/components/ui/ShineBorderDemp";

export default function Home() {
  return (
    <div className="p-2">
      <div className="w-screen h-screen">
        <HeroHighlightDemo />
      </div>

      <div className="p-4">
        <About />
      </div>

      <div className="">
        <ShineBorderDemo />
      </div>
      <div className="flex justify-center align-middle w-full">
        <FloatingDockDemo />
      </div>
    </div>
  );
}
