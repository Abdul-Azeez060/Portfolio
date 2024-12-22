import AvatarCircles from "@/components/ui/avatar-circles";

const avatars = [
  {
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D4E03AQE6PLCTtdOeBw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1694834108800?e=2147483647&v=beta&t=g4FnHxAc_BsKsATvNfe94dDAZyFvU5gX5UGs3j9rozw",
    profileUrl: "https://www.linkedin.com/in/madivada-prithvi-501005270/",
  },
  {
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D5635AQFdoGCeZHDEgw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1726476792483?e=1735498800&v=beta&t=EgERRRGIm9dm2OMQCFxpPyFODaflD3_81NJyHKqWl6A",
    profileUrl: "https://www.linkedin.com/in/chakri-kottana-57a57725a/",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/106103625",
    profileUrl: "https://github.com/BankkRoll",
  },
];

export function AvatarCirclesDemo() {
  return (
    <AvatarCircles className="min-w-fit" numPeople={99} avatarUrls={avatars} />
  );
}
