"use server"

import { z } from "zod";

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const schema = z.object({
  name: z.string().min(2),
});

export async function submit(prevState: any, formData: FormData) {
  const name = formData.get("name");

  const validatedFields = schema.safeParse({
    name: formData.get("name"),
  });

  console.log(JSON.stringify(validatedFields));


  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  await sleep(1000); // simulate network request

  return {
    message: `Hello, ${name}!`,
  };
}