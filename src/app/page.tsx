import { HeroHighlightDemo } from "@/components/Hero";

import { About } from "@/components/About";
import { FloatingDockDemo } from "@/components/ui/FloatingDock";

export default function Home() {
  return (
    <div>
      <div className="w-screen h-screen">
        <HeroHighlightDemo />
      </div>

      <div className="p-6">
        <About />
      </div>
      <div className="">
        <h1>footer</h1>
        <FloatingDockDemo />
      </div>
    </div>
  );
}
