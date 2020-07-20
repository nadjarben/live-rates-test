import React from "react";
import { Wrapper } from "./style"

const Notification = ({ message, isError }) => {
  return (
    <Wrapper isError={isError}>
      <p>{message}</p>
    </Wrapper>
  );
};

export default Notification;
