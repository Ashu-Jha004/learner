import PostsList from "@/components/PostsList";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";

const Posts = async () => {
  //server fetching.
  try {
    const response = await fetch("https://dummyjson.com/posts?limit=10");
    const data = await response.json();
    return (
      <main className="text-center px-5">
        <h1 className="text-4xl md:text-5xl font-bold mb-5">All Posts</h1>
        <Suspense fallback="Loading...">
          <PostsList />
        </Suspense>
      </main>
    );
  } catch (error) {
    return (
      <>
        <h1>Api is not working.</h1>
      </>
    );
  }
};

export default Posts;
