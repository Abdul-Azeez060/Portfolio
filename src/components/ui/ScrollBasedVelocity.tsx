import { VelocityScroll } from "./scroll-based-velocity";
import { Icons } from "../OrbitingcircleDemo";

export function ScrollBasedVelocityDemo() {
  return (
    //@ts-ignore
    <VelocityScroll
      text="000110011000100"
      default_velocity={10}
      className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
    />
  );
}
