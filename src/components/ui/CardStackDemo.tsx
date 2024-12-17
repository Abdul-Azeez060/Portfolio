"use client";
import { CardStack } from "../ui/card-stack";
import { cn } from "@/lib/utils";
export function CardStackDemo() {
  return (
    <div className="flex justify-center items-center">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}>
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "TypeScript or JavaScript",
    content: (
      <p>
        typescript is used in making <Highlight>bigger projects</Highlight> as
        it saves so much time, by fixing the errors and bugs at the compile time
        without running it.
      </p>
    ),
  },
  {
    id: 1,
    name: "Basics of Networking",
    content: (
      <p>
        Network of networks. A network that consists of billions of resources.
        The word internet means{" "}
        <Highlight> Inter - Interconnected, net - networks</Highlight>{" "}
        (interconnected networks)
      </p>
    ),
  },
  {
    id: 2,
    name: "Domain Name Resolution",
    content: (
      <p>
        <Highlight>Domain name resolution </Highlight>, also known as DNS
        resolution, is the process by which a domain name is translated into the
        corresponding IP address of the server of the website.
      </p>
    ),
  },
];
