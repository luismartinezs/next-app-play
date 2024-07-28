"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="
        bg-purple-600 text-white px-4 py-1 hover:bg-purple-700 rounded-md
      "
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}
