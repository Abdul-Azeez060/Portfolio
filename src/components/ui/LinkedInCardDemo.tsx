import { LinkedInCard } from "./LinkedInCard";
import ProfileImage from "@/../assets/Profile.jpeg";
import BannerImage from "@/../assets/Banner.jpeg";
import CollgeImage from "@/../assets/collegeImage.jpeg";
export function LinkedInCardDemo() {
  return (
    <div className="w-full h-full border ">
      <LinkedInCard
        image={BannerImage}
        profileImage={ProfileImage}
        collegeImage={CollgeImage}
      />
    </div>
  );
}
