import { useSelector, useDispatch } from 'react-redux';
import { statusFilters } from 'redux/constants';
import { selectStatusFilter } from 'redux/selectors';
import { setStatusFilter } from 'redux/filterSlice';
import { useState } from 'react';
import { Dropdown, List, Button } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const [close, setClose] = useState(true);
  const [select, setSelect] = useState(false);
  const filter = useSelector(selectStatusFilter);

  const handleDropdown = () => {
    setClose(!close);
  };
  const handleFilterChange = filter => {
    dispatch(setStatusFilter(filter));
    setSelect(true);
  };

  return (
    <div style={{ position: 'relative' }}>
      {close ? (
        <Dropdown condition={!close} onClick={handleDropdown}>
          FILTERS
        </Dropdown>
      ) : (
        <>
          <Dropdown condition={!close} onClick={handleDropdown}>
            FILTERS
          </Dropdown>
          <List>
            <Button
              condition={select}
              selected={filter === statusFilters.all}
              onClick={() => handleFilterChange(statusFilters.all)}
            >
              SHOW ALL
            </Button>
            <Button
              condition={select}
              selected={filter === statusFilters.active}
              onClick={() => handleFilterChange(statusFilters.active)}
            >
              FOLLOWINGS
            </Button>
            <Button
              condition={select}
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
