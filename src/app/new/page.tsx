"use client";
import React, { useState, useEffect, FormEvent } from "react";
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

  useEffect(() => {
    if (params.id) {
      fetch(`/api/recipes/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setName(data.name);
          setSteps(data.steps);
          setImage(data.image);
        });
    }
  }, []);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (params.id) {
      const res = await fetch(`/api/recipes/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({ name, steps, image }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
    } else {
      const res = await fetch("/api/recipes", {
        method: "POST",
        body: JSON.stringify({ name, steps, image }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
    }

    router.refresh();
    router.push("/");
  };

  return (
    <form className="max-w-sm mx-auto" onSubmit={onSubmit}>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-white dark:text-gray-900"
        >
          Name:
        </label>
        <input
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-white dark:text-gray-900"
        >
          Steps:
        </label>
        <input
          type="password"
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Steps"
          onChange={(e) => setSteps(e.target.value)}
          value={steps}
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-white dark:text-gray-900"
        >
          Image:
        </label>
        <input
          type="password"
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Image"
          onChange={(e) => setImage(e.target.value)}
          value={image}
          required
        />
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
      {params.id && (
        <button
          type="button"
          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          onClick={async () => {
            const res = await fetch(`/api/recipes/${params.id}`, {
              method: "DELETE",
            });
            const data = await res.json();

            router.refresh();
            router.push("/");
          }}
        >
          Delete
        </button>
      )}
    </form>
  );
};

export default NewPage;
