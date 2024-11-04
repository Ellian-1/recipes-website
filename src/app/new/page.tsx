"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type Props = {
  params: {
    id: number;
  };
};

const NewPage = ({ params }: Props) => {
  return <div>NewPage</div>;
};

export default NewPage;
