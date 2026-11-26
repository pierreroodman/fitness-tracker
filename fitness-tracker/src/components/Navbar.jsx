import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  gap: 16px;
  padding: 12px 24px;
  background: #1e293b;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const StyledLink = styled(NavLink)`
  color: #cbd5e1;
  text-decoration: none;

  &:hover { color: white; }
  &.active { color: white; font-weight: bold; border-bottom: 2px solid #38bdf8; }
`;

function Navbar() {
  return (
    <Nav>
      <StyledLink to="/" end>Home</StyledLink>
      <StyledLink to="/exercises">Exercises</StyledLink>
      <StyledLink to="/workout-planner">Planner</StyledLink>
      <StyledLink to="/history">History</StyledLink>
      <StyledLink to="/progress">Progress</StyledLink>
    </Nav>
  );
}
export default Navbar;