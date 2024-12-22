import { FormElement } from "../FormElement";
import { LinkedInCardDemo } from "./LinkedInCardDemo";

import ShineBorder from "./shine-border";
import { TypingAnimationDemo } from "./TypeAnimation";

export function ShineBorderDemo() {
  return (
    <ShineBorder
      className="relative flex  w-full flex-col items-center justify-center rounded-lg border bg-background md:shadow-xl"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10"></span>
      <div className="grid grid-cols-12 w-full h-full ">
        <div className="w-full p-4  col-span-12 md:col-span-5 flex flex-col justify-center align-middle order-last">
          <TypingAnimationDemo />
          <FormElement />
        </div>

        <div className="w-full  col-span-12 md:col-span-5 flex flex-col justify-center align-middle">
          <LinkedInCardDemo />
        </div>
      </div>
    </ShineBorder>
  );
}
