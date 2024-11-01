import React from "react";

type Props = {
  recipes: {
    name: string;
    steps: string;
    image: string;
  };
};

const Hero = (recipes: Props) => {
  return (
    <div>
      <img
        className="h-auto max-w-full rounded-lg"
        src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
        alt=""
      />
    </div>
  );
};

export default Hero;
