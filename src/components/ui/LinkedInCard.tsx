import Image, { StaticImageData } from "next/image";
import { AvatarCirclesDemo } from "./AvatorCirclesDemo";

interface LinkedInCardProps {
  image?: string | StaticImageData;
  profileImage?: string | StaticImageData;
  collegeImage?: string | StaticImageData;
}
export function LinkedInCard({
  image,
  profileImage,
  collegeImage,
}: LinkedInCardProps) {
  return (
    <div className="p-2 bg-[#F4F2EE]">
      <div className=" bg-white mb-2 rounded-sm">
        <div className="w-full">
          <Image
            alt="Banner"
            className="rounded-t-sm"
            src={image || ""}></Image>
        </div>

        <div className="relative bottom-11 left-6 lg:bottom-14 w-16 h-16 lg:w-24 lg:h-24 ">
          <div className="p-1 bg-white w-full h-full rounded-full">
            <Image
              alt="profile"
              src={profileImage || ""}
              className=" rounded-full"></Image>
          </div>
        </div>
        <div className="relative bottom-11 lg:bottom-14 px-2">
          <div className="flex justify-between">
            <div className="flex flex-col w-[75%] ">
              <h2 className=" tracking-tight  md:text-lg font-semibold">
                Abdul Azeez Md
              </h2>
              <p className="text-[0.50rem] md:text-[0.70rem]">
                Building cool websites using Next, React | Creative Wordsmith in
                My Spare Time | Debugging Code... and Life
              </p>
              <p className="text-slate-500 text-[0.40rem] md:text-[0.60rem] my-1 ">
                Bhimavaram, Andhra Pradesh, India{" "}
                <span>
                  <a
                    className="text-[#2D64BC] hover:underline decoration-1  font-semibold"
                    href="https://www.linkedin.com/in/abdul-azeez-md-156822258/">
                    Contact Info
                  </a>
                </span>
              </p>
              <p className="text-[#2D64BC] font-semibold text-[0.40rem] md:text-[0.60rem]">
                <a
                  className="hover:text-[#2D64BC] hover:underline decoration-1  font-semibold"
                  href="https://www.linkedin.com/mynetwork/invite-connect/connections/">
                  250 connections
                </a>
              </p>
              <div className="my-1 flex">
                <AvatarCirclesDemo />
                <div className="px-1 leading-[0.2rem] sm:leading-4 ">
                  <a
                    href="https://www.linkedin.com/mynetwork/invite-connect/connections/"
                    className="hover:text-[#2D64BC] hover:underline decoration-1 text-slate-500 text-[0.40rem] md:text-[0.60rem] ">
                    <span className="hover:text-[#2D64BC] text-slate-600 font-medium">
                      Madivada Prithvi, Chakri Kottana,
                    </span>{" "}
                    and 248 other mutual connections
                  </a>
                </div>
              </div>
            </div>
            <div className="w-[25%]">
              <div className=" flex ">
                <div className="w-8 h-8 lg:w-8 lg:h-8 rounded-full">
                  <Image src={collegeImage || ""} alt="CollegeImage" />
                </div>

                <p className="text-[0.4rem] md:text-[0.5rem] font-semibold px-1">
                  <a
                    className="hover:text-[#2D64BC] hover:underline decoration-1  font-semibold"
                    href="https://www.linkedin.com/school/vitbhimavaram/posts/?feedView=all">
                    Vishnu Institute of Technology (Autonomous)
                  </a>
                </p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-white p-3 rounded-sm">
        <div className="">
          <h2 className=" tracking-tight text-[0.5rem]  md:text-lg font-medium my-2">
            About
          </h2>
          <p className="text-[0.50rem] md:text-[0.60rem]">
            I am Abdul Azeez, I am in my 3rd year computer science engineering,
            I build webites and deploy it to make our lives smother. Love to
            write blogs on hashnode and medium. Special love for Typescript,
            building backends, I work with React.js, Next.js, Express, AWS,
            Postgresql, Edge Networks, curious about Blockchain.
          </p>
        </div>
      </div>
    </div>
  );
}
