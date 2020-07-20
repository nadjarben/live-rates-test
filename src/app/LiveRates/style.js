import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;

  & > h1 {
    text-align: center;
  }

  & > h3 {
    text-align: center;
    color: red;
  }

  & > table {
    border: 1px solid #ddd;
    padding: 8px;
    width: 100%;
  }

  th {
    padding-top: 15px;
    padding-bottom: 15px;
    text-align: center;
    background-color: #5652BF;
    color: white;
  }

  tr {
    text-align: center;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
  }

  td {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

export { Wrapper };
