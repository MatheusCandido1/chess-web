import styled from 'styled-components';

export const Container = styled.section`
  width: 60%;
  height: 300px;
  border: 2px solid #3B3B3B;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.2);
`;

export default function NextGameCard() {
  return (
    <Container />
  );
}
