import Image, { StaticImageData } from "next/image";

interface ProjectProps {
  image?: string | StaticImageData;
}

export function Project({ image }: ProjectProps) {
  return (
    <div className="">
      <Image
        className="object-cover"
        src={image || ""}
        alt="velgo project pic"
      />
    </div>
  );
}
