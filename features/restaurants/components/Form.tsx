"use client";

import { useFormState } from "react-dom";

import { SubmitButton } from "./SubmitButton";
import { submit } from "../actions";

const initialState = {
  message: "",
};

export function Form() {
  const [state, formAction] = useFormState(submit, initialState);

  return (
    <form action={formAction} className="flex gap-4 items-center">
      <div>
        <div className="flex gap-4 items-end">
          <div className="flex flex-col">
            <label htmlFor="name">Your name</label>
            <input id="name" type="text" name="name" placeholder="Name" />
          </div>
          <div>
            <SubmitButton />
          </div>
        </div>
        {state?.message && <p aria-live="polite">{state?.message}</p>}
        {state?.errors?.name && (
          <p aria-live="assertive" className="text-red-500">
            {state?.errors?.name?.join(", ")}
          </p>
        )}
      </div>
    </form>
  );
}
