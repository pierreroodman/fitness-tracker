import styled from 'styled-components';
import PropTypes from 'prop-types';

// Pick a background color depending on the 'variant' prop
const colors = {
  primary: '#2563eb',
  danger: '#dc2626',
  secondary: '#6b7280',
};

const StyledButton = styled.button`
  background: ${(props) => colors[props.$variant]};
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};

  &:hover {
    filter: brightness(1.1);
  }
`;

function Button({ text, onClick, variant = 'primary', disabled = false }) {
  return (
    <StyledButton $variant={variant} onClick={onClick} disabled={disabled}>
      {text}
    </StyledButton>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'danger', 'secondary']),
  disabled: PropTypes.bool,
};

export default Button;