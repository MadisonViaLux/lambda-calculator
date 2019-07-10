import React from "react";

export const SpecialButton = (props) => {
  console.log(props)
  return (
    <>
      <button>{props.specials}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};
