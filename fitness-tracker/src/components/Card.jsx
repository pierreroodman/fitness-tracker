import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardWrapper = styled.div`
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-3px);
  }
`;

// 'children' is whatever is placed between <Card> and </Card>
function Card({ children }) {
  return <CardWrapper>{children}</CardWrapper>;
}

Card.propTypes = {
  children: PropTypes.node,
};

export default Card;