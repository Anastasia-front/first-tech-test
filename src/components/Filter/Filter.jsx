import { useSelector, useDispatch } from 'react-redux';
import { statusFilters } from 'redux/constants';
import { selectStatusFilter } from 'redux/selectors';
import { setStatusFilter } from 'redux/filterSlice';
import { useState, useRef, useEffect } from 'react';
import { Dropdown, List, Button } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const [close, setClose] = useState(true);
  const [filterText, setFilterText] = useState('FILTERS');
  const filter = useSelector(selectStatusFilter);

  const dropdownRef = useRef(null);
  const listRef = useRef(null);

  const handleDropdownOpen = () => {
    setClose(false);
  };
  const handleDropdownClose = event => {
    event.stopPropagation();
    setClose(true);
  };

  const handleFilterChange = filter => {
    dispatch(setStatusFilter(filter));
    setFilterText(`FILTER - ${filter}`);
  };

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        listRef.current &&
        !listRef.current.contains(event.target)
      ) {
        setClose(true);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      {close ? (
        <Dropdown condition={!close} onClick={handleDropdownOpen}>
          {filterText}
        </Dropdown>
      ) : (
        <>
          <Dropdown
            condition={!close}
            onClick={handleDropdownClose}
            ref={dropdownRef}
          >
            {filterText}
          </Dropdown>
          <List ref={listRef}>
            <Button
              selected={filter === statusFilters.all}
              onClick={() => handleFilterChange(statusFilters.all)}
            >
              SHOW ALL
            </Button>
            <Button
              selected={filter === statusFilters.active}
              onClick={() => handleFilterChange(statusFilters.active)}
            >
              FOLLOWINGS
            </Button>
            <Button
              selected={filter === statusFilters.completed}
              onClick={() => handleFilterChange(statusFilters.unActive)}
            >
              FOLLOW
            </Button>
          </List>
        </>
      )}
    </div>
  );
};
export default Filter;
