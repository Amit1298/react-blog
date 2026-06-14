import React from "react";

let renderCount = 0;

function PureComponent() {
  return (
    <>
      <div>PureComponent</div>
      <RenderCount />
      <RenderCount />
    </>
  );
}

const RenderCount = () => {
  renderCount++;
  console.log(`PureComponent rendered ${renderCount} times`);
  return (
    <div>
      <h3>PureComponent rendered {renderCount} times</h3>
    </div>
  );
};

export default PureComponent;
