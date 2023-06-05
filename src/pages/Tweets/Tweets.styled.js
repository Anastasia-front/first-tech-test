import styled from 'styled-components';

export const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 980px) {
    padding: 20px 100px 0;
  }
  @media screen and (min-width: 1400px) {
    padding: 30px 200px 0;
  }
`;
export const Container = styled.div`
  margin: 0 auto;
  max-width: 1600px;
`;
