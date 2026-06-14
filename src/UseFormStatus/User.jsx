import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}

function User() {
  const handleSubmit = async (event) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // Handle form submission logic here
    console.log("Form submitted!");
  };

  return (
    <div>
      <h2>useFormStatus Example</h2>
      <form action={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <br />
        <SubmitButton />
      </form>
    </div>
  );
}

export default User;
