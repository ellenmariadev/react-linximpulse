import React from "react";

const Radio = (props) => {
  const { label, id, ...inputProps } = props;

  return (
    <div className="radio">
      <label  htmlFor={id}>{label}</label>
      <input id={id}
        {...inputProps}
      />
    </div>
  );
};

export default Radio;