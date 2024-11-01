import React from "react";
import { useRouter } from "next/navigation";

type Props = {
  recipes: {
    id: number;
    name: string;
    steps: string;
    image: string;
  };
};

const Hero = ({ recipes }: Props) => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push(`/recipes/edit/${recipes.id}`);
      }}
    >
      <img
        className="h-auto max-w-full rounded-lg"
        src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
        alt=""
      />
    </div>
  );
};

export default Hero;
