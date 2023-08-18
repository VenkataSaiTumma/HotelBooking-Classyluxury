import { useState } from "react";
import styled from "styled-components";

const FormData = ({
  type,
  name,
  value,
  handleChange,
  placeholder,
  message,
  errormessage,
  pattern,
}) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <Wrapper>
      <div>
        <label htmlFor={name}>{name}</label> <br />
        <input
          placeholder={placeholder}
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          required={true}
          errormessage={message}
          pattern={pattern}
          onBlur={handleFocus}
          focused={focused.toString()}
        />
        <span>{errormessage}</span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  span {
    font-size: 12px;
    color: red;
    padding-top: 0.01rem;
    padding-bottom: 0.01rem;
    display: none;
  }
  input:invalid[focused="true"] ~ span {
    display: block;
    width: 150px;
  }
`;

export default FormData;
