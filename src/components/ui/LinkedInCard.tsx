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
    <div className="p-2 bg-[#F4F2EE] max-w-[44rem]">
      <div className=" bg-white mb-2 rounded-sm">
        <div className="w-full">
          <Image
            alt="Banner"
            className="rounded-t-sm w-full"
            src={image || ""}></Image>
        </div>

        <div className="relative bottom-11 left-5 size-1/5 js:bottom-16 sm:bottom-20 md:bottom-20 ">
          <div className="p-1 bg-white w-full h-full rounded-full 2xl:w-fit 2xl:h-fit">
            <Image
              alt="profile"
              src={profileImage || ""}
              className="rounded-full"></Image>
          </div>
        </div>
        <div className="-mb-14 md:-mb-28 relative bottom-11 js:bottom-16 sm:bottom-20 px-4 ">
          <div className="flex justify-between">
            <div className="flex flex-col w-[75%] pr-2 ">
              <h2 className=" tracking-tight text-xs  js:text-lg sm:text-xl  font-semibold">
                Abdul Azeez Md
              </h2>
              <p className="leading-3 text-[0.55rem] js:text-[0.7rem] js:leading-4 sm:text-[0.9rem] sm:leading-5  ">
                Building cool websites using Next, React | Creative Wordsmith in
                My Spare Time | Debugging Code... and Life
              </p>
              <p className="text-slate-500  my-1 leading-3 text-[0.50rem] js:text-[0.6rem] js:leading-3 sm:text-[0.7rem] sm:leading-4 ">
                Bhimavaram, Andhra Pradesh, India{" "}
                <span>
                  <a
                    className="text-[#2D64BC] hover:underline decoration-1  font-semibold"
                    href="https://www.linkedin.com/in/abdul-azeez-md-156822258/">
                    Contact Info
                  </a>
                </span>
              </p>
              <p className="text-[#2D64BC] font-semibold leading-3 text-[0.50rem] js:text-[0.6rem] js:leading-3 sm:text-[0.7rem] sm:leading-4 ">
                <a
                  className="hover:text-[#2D64BC] hover:underline decoration-1  font-semibold "
                  href="https://www.linkedin.com/mynetwork/invite-connect/connections/">
                  500 connections
                </a>
              </p>
              <div className="my-1 flex items-center">
                <AvatarCirclesDemo />
                <div className="px-1 leading-[0.4rem]">
                  <a
                    href="https://www.linkedin.com/mynetwork/invite-connect/connections/"
                    className="hover:text-[#2D64BC] hover:underline decoration-1 text-slate-500 leading-3 text-[0.50rem] js:text-[0.6rem] js:leading-3 sm:text-[0.7rem] sm:leading-4 ">
                    <span className="hover:text-[#2D64BC] text-slate-600 font-medium  ">
                      Madivada Prithvi, Chakri Kottana,
                    </span>{" "}
                    and 500 other mutual connections
                  </a>
                </div>
              </div>
            </div>
            <div className="w-[25%]">
              <div className="flex flex-col items-center justify-center">
                <div className=" flex h-fit">
                  <div className="w-8 h-4 lg:w-8  lg:h-8  rounded-full">
                    <Image
                      src={collegeImage || ""}
                      alt="CollegeImage "
                      className=""
                    />
                  </div>

                  <p className="leading-[0.4rem] text-[0.30rem] js:text-[0.6rem] js:leading-3 sm:text-[0.7rem] sm:leading-4 max-h-fit ">
                    <a
                      className="hover:text-[#2D64BC] hover:underline decoration-1  font-semibold w-full"
                      href="https://www.linkedin.com/school/vitbhimavaram/posts/?feedView=all">
                      Vishnu Institute of Technology (Autonomous)
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-white p-3 rounded-sm">
        <div className="">
          <h2 className=" tracking-tight font-medium  my-2 text-[0.55rem] js:text-[0.7rem] js:leading-4 sm:text-[0.9rem] sm:leading-5 ">
            About
          </h2>
          <p className="leading-3 text-[0.50rem] js:text-[0.6rem] js:leading-3 sm:text-[0.7rem] sm:leading-4 ">
            I am Abdul Azeez, I am in my 4th year computer science engineering,
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
