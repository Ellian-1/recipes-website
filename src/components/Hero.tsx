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
        src={`${recipes.image}`}
        alt={`${recipes.name}`}
      />
    </div>
  );
};

export default Hero;
