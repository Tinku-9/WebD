import React from "react";

function Background(props) {
  const colo = props.color;

  const HandleClick = () => {
    document.getElementById("div1").style.backgroundColor = colo;
  };

  return (
    <>
      <button onClick={HandleClick}>Click me</button>
      <div id="div1">Hello World</div>
    </>
  );
}

export default Background;
