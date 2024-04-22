import PropTypes from 'prop-types';
import * as S from './DropdownMenu.styled';

function DropdownMenu({ options, handleItemClick }) {
  return (
    <S.DropdownMenu>
      {options.map((option) => (
        <S.DropdownMenuItem key={option.value} onClick={() => handleItemClick(option.value)}>
          {option.label}
        </S.DropdownMenuItem>
      ))}
    </S.DropdownMenu>
  );
}

DropdownMenu.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handleItemClick: PropTypes.func.isRequired,
};

export default DropdownMenu;
