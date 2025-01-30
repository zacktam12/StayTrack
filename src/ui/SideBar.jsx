import styled from "styled-components";

const StyledSidBar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.5rem 2.4rem 4.8rem;
  border-right: 1px solid var(--color-gey-100);
  grid-row: 1/-1;
`;
function SideBar() {
  return <StyledSidBar>SideBar</StyledSidBar>;
}

export default SideBar;
