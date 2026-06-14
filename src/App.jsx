import { useState } from "react";
import { Apple } from "./fruits/Apple";
import Wrapper from "./Wrapper";
import Input from "./Input";
import { Controlled } from "./ControlledAndUnontrolled/Controlled";
import Uncontrolled from "./ControlledAndUnontrolled/Uncontrolled";
import Checkbox from "./ControlledAndUnontrolled/Checkbox";
import RadioButton from "./ControlledAndUnontrolled/RadioButton";
import MapLooping from "./loopmap/MapLooping";
import Dropdown from "./StopWatch/Dropdown";
import NestedLoop from "./nestedLoop/NestedLoop";
import LifeCycle from "./LifeCycle/LifeCycle";
import BootstrapComponent from "./bootstrapcomponent/BootstrapComponent";
import UserInput from "./forwordRef/UserInput";
import User from "./UseFormStatus/User";

function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);
  function handleIncrement() {
    setCount(count + 1);
  }
  function handleDecrement() {
    if (count > 0) setCount(count - 1);
  }
  function handleReset() {
    setCount(0);
  }
  return (
    <>
      <h1>Welcome to Vite + React</h1>
      <User />
      <UserInput />
      <BootstrapComponent />
      {show && <LifeCycle />}
      <button onClick={() => setShow(!show)}>Toggle LifeCycle Component</button>
      <hr />
      <NestedLoop />
      <Dropdown />
      <MapLooping />
      <RadioButton />
      <Checkbox />
      <Controlled />
      <Uncontrolled />
      <Input />
      <h3>Count: {count >= 0 ? count : "not set"}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      <hr />
      <Wrapper>
        <Apple />
      </Wrapper>
    </>
  );
}

export default App;
