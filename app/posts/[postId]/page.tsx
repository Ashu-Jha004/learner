import React, { Suspense } from "react";

const SinglePost = async ({ params }: any) => {
  try {
    const { postId } = params;
    const response = await fetch(`https://dummyjson.com/posts/${postId}`);
    const data = await response.json();

    return (
      <main className="px-7 pt-10 text-center flex flex-col justify-center items-center border-2">
        <Suspense fallback="Loading....">
          <h1 className="text-5xl font-semibold font-serif mb-7">
            {data.title}
          </h1>
          <p className="max-w-[700px]">{data.body}</p>
        </Suspense>
      </main>
    );
  } catch (error) {
    return (
      <>
        <h1 className="text-center animate-bounce">Api is not working...</h1>
      </>
    );
  }
};

export default SinglePost;
