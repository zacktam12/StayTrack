import styled from "styled-components";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;

const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
`;
function App() {
  return (
    <p>
      {" "}
      <H1>The wild oasis</H1>
    </p>
  );
}

export default App;
