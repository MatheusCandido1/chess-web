import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2rem;
  padding: 0 2rem;
  margin-bottom: 2rem;

  .skeleton {
    width: 100%;
    height: 200px;
  }
`;

export const FirstRow = styled.section`
`;

export const History = styled.section`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-start;
  gap: 1rem;

  .card {
    width: 100%;
    height: 700px;
    max-height: 1000px;
  }
`;
