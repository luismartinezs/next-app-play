import { z } from "zod";

import { SubmitButton } from "./SubmitButton";

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const schema = z.object({
  name: z.string({
    invalid_type_error: "Invalid Email",
  }),
});

export function MyRSC() {
  async function submit(formData: FormData) {
    "use server";

    const name = formData.get("name") as string;

    const validatedFields = schema.safeParse({
      name,
    });

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    await sleep(1000); // simulate network request

    return {
      message: `Hello, ${name}!`,
    };
  }

  return (
    <div>
      <h1>Server Component</h1>
      <p>Form with inlined server action</p>
      <form action={submit} className="flex gap-4 items-center">
        <label htmlFor="name">Your name</label>
        <input id="name" type="text" name="name" placeholder="Name" required />
        <SubmitButton />
      </form>
    </div>
  );
}
