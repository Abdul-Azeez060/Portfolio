import { cn } from "@/lib/utils";
import Marquee from "./marquee";
import { Icons } from "../OrbitingcircleDemo";

const reviews = [
  {
    name: "TypeScript",
    img: "https://avaseftar.vercel.sh/jack",
    icon: <Icons.typescript />,
  },
  {
    name: "JavaScript",
    img: "https://avatsefar.vercel.sh/jill",
  },
  {
    name: "Java",
    img: "https://avatar.sefvercel.sh/john",
  },
  {
    name: "Python",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "PostgreSQL",
    img: "https://avatar.vesdfrcel.sh/jenny",
  },
  {
    name: "MySQL",
    img: "https://avsfatar.vsfercel.sh/jenny",
  },
  {
    name: "MongoDB",
    img: "https://avafstar.vercel.sh/jenny",
  },
  {
    name: "PrismaORM",
    img: "https://sedfavatar.vercel.sh/james",
  },
  {
    name: "Sequilize",
    img: "https://vatar.vercel.sh/james",
  },
  {
    name: "Nextjs",
    img: "https://aatasdfr.vercel.sh/james",
  },
  {
    name: "Reactjs",
    img: "https:/avatsdfar.vercel.sh/james",
  },
  {
    name: "Reactjs",
    img: "https://avatfsdar.vercel.sh/james",
  },
  {
    name: "Express",
    img: "htps://avatsdfar.vercel.sh/james",
  },
  {
    name: "Hono",
    img: "ttps://avasfseftar.vercel.sh/james",
  },
  {
    name: "AWS",
    img: "http://avatfsar.vercel.sh/james",
  },
  {
    name: "Firebase",
    img: "https://avsefdatar.vercel.sh/james",
  },
  {
    name: "Appwrite",
    img: "https://avafsetar.vercel.sh/james",
  },
  {
    name: "Git",
    img: "https://avafestar.vercel.sh/james",
  },
  {
    name: "Github",
    img: "https://avfrgatar.vercel.sh/james",
  },
  {
    name: "Docker",
    img: "https://avsefatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  name,

  icon,
}: {
  name: string;
  icon?: React.ReactElement;
}) => {
  return (
    <figure
      className={cn(
        "relative  cursor-pointer overflow-hidden rounded-xl  p-4",
        // light styles
        " bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        " dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}>
      <div className="flex flex-row justify-center items-center gap-2">
        {icon}
        <figcaption className="text-sm font-medium dark:text-white">
          {name}
        </figcaption>
      </div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="w-full">
      <Marquee pauseOnHover className="[--duration:15s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} icon={review.icon} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:15s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.img} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0  bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
