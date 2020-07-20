import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${props => props.isError ? "red" : "green"};
  color: white;
  padding: 5px;
  margin-left: 20px;
  margin-right: 20px;

  p {
    text-align: center;
  }
`

