import React, { useState } from "react";
import styled from "styled-components";

const StyledErrorWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  form {
    display: flex;
    flex-direction: column;
    input {
      width: 300px;
      height: 38px;
      padding-left: 10px;
    }

    button {
      height: 34px;
    }
  }
`;

export default function LocationErrorFallback({ error }: any) {
  const [input, setInput] = useState("");

  const handleTryAgain = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input)
      return alert("You must include a location before reloading the page");

    window.location.replace(
      `http://localhost:3000/vaccine-locator?location=${input}`
    );
  };

  return (
    <StyledErrorWrap role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <form onSubmit={handleTryAgain}>
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
          type="text"
          placeholder="try another location"
        />
        <button type="submit">Try again</button>
      </form>
    </StyledErrorWrap>
  );
}
