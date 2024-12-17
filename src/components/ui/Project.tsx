import Image from "next/image";

interface ProjectProps {
  image?: string | any;
}

export function Project({ image }: ProjectProps) {
  return (
    <div className="">
      <Image className="object-cover" src={image} alt="velgo project pic" />
    </div>
  );
}
