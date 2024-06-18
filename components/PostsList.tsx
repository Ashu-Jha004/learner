import React from "react";
import Link from "next/link";

const PostsList = async () => {
  try {
    const response = await fetch("https://dummyjson.com/posts?limit=10");
    const data = await response.json();
    console.log(data.posts);
    return (
      <>
        <ul className=" grid auto-cols-auto">
          {data.posts.map((post) => (
            <li key={post.id} className="mb-3 grid auto-cols-auto ">
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  } catch (error) {
    return (
      <>
        <h1>Api is not working...</h1>
      </>
    );
  }
};

export default PostsList;
