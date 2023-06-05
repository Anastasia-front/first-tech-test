import { ButtonStyle } from './LoadButton.styled';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  return (
    <ButtonStyle type="button" onClick={onClick}>
      Load more
    </ButtonStyle>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};