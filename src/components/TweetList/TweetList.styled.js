import styled from 'styled-components';

export const List = styled.div`
  margin: 0px auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const Center = styled.div`
  margin: 0px auto;

  ${
    '' /* display: flex;
  justify-content: center;
  flex-wrap: wrap; */
  }
`;
export const Tweets = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media screen and (min-width: 980px) {
    padding: 0 50px;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 0 0 calc(50% - 10px);
    justify-content: space-between;
    width: 800px;
  }
  @media screen and (min-width: 1400px) {
    padding: 0;
    flex: 0 0 calc(33.33% - 10px);
    gap: 130px;
    justify-content: center;
    width: 100%;
  }
`;
export const Load = styled.div`
  margin: 50px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Li = styled.li`
  margin: 10;
`;
export const Delete = styled.button`
  background-color: #ffcec8;
  border: 1px solid grey;
  border-radius: 3px;
  margin-left: 7px;
  padding: 3px;
  font-size: 12px;
  height: min-content;
  &:hover,
  &:active,
  &:focus {
    background-color: teal;
  }
`;
export const End = styled.h1`
  margin: 50px auto;
  text-align: center;
`;
