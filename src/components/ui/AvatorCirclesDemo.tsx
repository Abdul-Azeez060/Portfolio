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
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D5635AQGXW0U7XhrOLA/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1660002772504?e=1737712800&v=beta&t=DkudJvLC_EiYK5Bgk7nPqfJXndXd0hyIh3bPZsbWHyE",
    profileUrl:
      "https://www.linkedin.com/in/sivaramteja-mamidisetty-717b6725a/",
  },
];

export function AvatarCirclesDemo() {
  return (
    <AvatarCircles className="min-w-fit" numPeople={99} avatarUrls={avatars} />
  );
}
