"use client";
import { createPosts } from "@/actions/actions";
import React from "react";

const page = () => {
  return (
    <main className="text-center pt-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">Create Post:</h1>
      <form
        action={createPosts}
        method="post"
        className="h-[100px] space-x-2 mt-10 flex flex-col  gap-5 text-center items-center"
      >
        <input
          name="title"
          placeholder="Title for new post"
          className="border-black rounded px-3 w-[500px] "
          type="text"
        />
        <input
          name="body"
          placeholder="Body for new post"
          className="border-black rounded px-3 w-[500px] "
          type="text"
        />
        <button className="h-full bg-sky-400 px-5 rounded text-white">
          Submit
        </button>
      </form>
    </main>
  );
};

export default page;
