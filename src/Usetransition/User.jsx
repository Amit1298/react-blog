import { useTransition } from "react";

function User1() {
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Transition started");
    });
  };

  return (
    <div>
      <h1>UseTransition hook</h1>
      {isPending && <p>Loading...</p>}
      <button disabled={isPending} onClick={handleClick}>
        Start Transition
      </button>
    </div>
  );
}

export default User1;
