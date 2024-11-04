"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type Props = {
  params: {
    id: number;
  };
};

const NewPage = ({ params }: Props) => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [steps, setSteps] = useState("");
  const [image, setImage] = useState("");

  return <div>NewPage</div>;
};

export default NewPage;
