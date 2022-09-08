import React from "react";

const Input = (props) => {
  const [focused, setFocused] = React.useState(false);
  const { label, errorMsg, onChange, ...inputProps } = props;

  const onFocus = (e) => {
    setFocused(true);
  };
  
  return (
    <div>
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={onFocus}
        focused={focused.toString()}
      />
      <small>{errorMsg}</small>
    </div>
  );
};

export default Input;
