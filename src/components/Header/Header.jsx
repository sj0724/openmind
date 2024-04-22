import * as S from './Header.styled';
import DropdownMenu from './DropdownMenu';
import arrowDownImage from '../../assets/Arrow-down.svg';
import arrowUpImage from '../../assets/Arrow-up.svg';

// eslint-disable-next-line react/prop-types
function Header({ selectedItem, handleItemClick, view, toggleDropdown, options }) {
  return (
    <S.HeaderContainer>
      <S.QuestionHeading>누구에게 질문할까요?</S.QuestionHeading>
      <S.DropdownWrapper>
        <S.DropdownSelect onClick={toggleDropdown} $fold={view}>
          {selectedItem}
          {view ? (
            <S.ArrowIcon src={arrowUpImage} alt="up arrow" />
          ) : (
            <S.ArrowIcon src={arrowDownImage} alt="down arrow" />
          )}
        </S.DropdownSelect>
        {view && <DropdownMenu options={options} handleItemClick={handleItemClick} />}
      </S.DropdownWrapper>
    </S.HeaderContainer>
  );
}

export default Header;
