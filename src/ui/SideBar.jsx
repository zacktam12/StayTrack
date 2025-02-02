import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidBar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.5rem 2.4rem 4.8rem;
  border-right: 1px solid var(--color-gey-100);
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;
function SideBar() {
  return (
    <StyledSidBar>
      <Logo />
      <MainNav />
    </StyledSidBar>
  );
}

export default SideBar;
