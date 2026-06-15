import React, { startTransition, useActionState } from "react";

export default function StudentFormPage() {
  // action receives (previousState, payload) and returns the new state (or Promise)
  const handleAction = async (previous = [], formData) => {
    const name = String(formData.get("name") || "").trim();
    if (!name) return previous;
    await new Promise((r) => setTimeout(r, 500)); // simulate async work
    return [...previous, name];
  };

  const [students, dispatch, pending] = useActionState(handleAction, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    startTransition(() => dispatch(fd));
  };

  return (
    <div>
      <h2>Student Form using useActionState</h2>
      <form onSubmit={onSubmit}>
        <label>
          Name:
          <input name="name" type="text" placeholder="Enter name" />
        </label>
        <button type="submit" disabled={pending}>
          {pending ? "Adding…" : "Add"}
        </button>
      </form>

      <h3>Students</h3>
      <ul>
        {students.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  );
}
