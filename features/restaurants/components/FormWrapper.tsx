import { Form } from "./Form";

export function FormWrapper() {
  return (
    <div>
      <h2>Form RSC wrapper</h2>
      <p>Server component that wraps a client component. Client component renders a form. The form submits a server action</p>
      <p>useFormState hook is used for rendering the result of the server action on the client</p>
      <p>useFormStatus hook to render a loading state for the submit button</p>
      <Form />
    </div>
  );
}
