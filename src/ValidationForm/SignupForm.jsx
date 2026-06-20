import React, { useActionState } from "react";

// Validation + "submit" function
async function signupAction(prevState, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  const errors = {};

  if (!name || name.trim().length < 3) {
    errors.name = "Name kam se kam 3 characters ka hona chahiye";
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Valid email daalo";
  }

  if (!password || password.length < 6) {
    errors.password = "Password kam se kam 6 characters ka hona chahiye";
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, errors, values: { name, email } };
  }

  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    success: true,
    errors: {},
    message: `Welcome ${name}! Signup successful.`,
  };
}

function SignupForm() {
  const [state, formAction, isPending] = useActionState(signupAction, {
    success: false,
    errors: {},
    message: "",
  });

  console.log("state-->", state);

  return (
    <div
      style={{ maxWidth: 400, margin: "40px auto", fontFamily: "sans-serif" }}
    >
      <h2>Signup Form (useActionState)</h2>

      <form action={formAction}>
        <div style={{ marginBottom: 12 }}>
          <input
            name="name"
            placeholder="Name"
            defaultValue={state.values?.name}
            style={{ width: "100%", padding: 8 }}
          />
          {state.errors?.name && (
            <p style={{ color: "red", fontSize: 13 }}>{state.errors.name}</p>
          )}
        </div>

        <div style={{ marginBottom: 12 }}>
          <input
            name="email"
            placeholder="Email"
            defaultValue={state.values?.email}
            style={{ width: "100%", padding: 8 }}
          />
          {state.errors?.email && (
            <p style={{ color: "red", fontSize: 13 }}>{state.errors.email}</p>
          )}
        </div>

        <div style={{ marginBottom: 12 }}>
          <input
            type="password"
            name="password"
            placeholder="Password"
            style={{ width: "100%", padding: 8 }}
          />
          {state.errors?.password && (
            <p style={{ color: "red", fontSize: 13 }}>
              {state.errors.password}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isPending}
          style={{ padding: "8px 20px" }}
        >
          {isPending ? "Submitting..." : "Sign Up"}
        </button>
      </form>

      {state.success && (
        <p style={{ color: "green", marginTop: 16 }}>{state.message}</p>
      )}
    </div>
  );
}

export default SignupForm;
