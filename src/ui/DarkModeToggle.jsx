import { useDarkMode } from "./DarkModeContext"; // Ensure this file exists
import styled from "styled-components";

const ToggleButton = styled.button`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 5px;
`;

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ToggleButton onClick={toggleDarkMode}>
      {isDarkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </ToggleButton>
  );
}

export default DarkModeToggle;
