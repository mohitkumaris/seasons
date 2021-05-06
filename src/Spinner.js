import React from "react";

const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};
// default props if prop value is passed
Spinner.defaultProps = {
  message: "Loading",
};
export default Spinner;
