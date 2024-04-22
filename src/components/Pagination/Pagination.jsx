import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Pagination from 'react-js-pagination';
import StyledPagination from './Pagination.styled';

function Paging({ page, setPage }) {
  const navigate = useNavigate();

  const handlePageChange = (newPage) => {
    navigate(`/list/?page=${newPage}`);
    setPage(newPage);
  };

  return (
    <StyledPagination>
      <Pagination
        activePage={page}
        itemsCountPerPage={8}
        totalItemsCount={450}
        pageRangeDisplayed={5}
        prevPageText="<"
        nextPageText=">"
        onChange={handlePageChange}
        hideFirstLastPages
      />
    </StyledPagination>
  );
}

Paging.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default Paging;
