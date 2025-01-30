import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyle";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  /* background-color: red; */
  padding: 58px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row type="vertical">
          <Row type="horizontal">
            <Heading as="h1">The wild Oasis</Heading>
            <div>
              <Heading as="h2">CheckOut and in</Heading>
              <Button
                variation="secondary"
                size="large"
                onClick={() => alert("check in")}
              >
                Check in
              </Button>
              <Button onClick={() => alert("check out")}>Check out</Button>
            </div>
          </Row>
          <Row type="vertical">
            <Heading as="h3">Form</Heading>
            <from>
              <Input type="number" placeholder="Number of guests" />
              <Input type="number" placeholder="Number of guests" />
            </from>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
