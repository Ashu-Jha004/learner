"use server";
import prisma from "@/lib/db";
export async function createPosts(formData: FormData) {
  const title = formData.get("title") as string;
  const body = formData.get("body") as string;
  console.log("Server Actions", title);
  console.log("Server Actions", body);

  await prisma.post.create({
    data: {
      title,
      body,
    },
  });
  return "200";
}
