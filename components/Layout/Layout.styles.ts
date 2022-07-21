import styled from 'styled-components';

const Container = styled.div`
  min-width: 414px;
  min-height: 100vh;
  padding: 0 21px;
  margin: auto auto 0;
  background-color: ${({ theme }) => theme.background};

  @media screen and (min-width: 768px) {
    min-width: 768px;
    padding: 0 22px;
  }

  @media screen and (max-width: 1200px) {
    min-width: 1200px;
  }
`;

const L = {
  Container,
};

export default L;