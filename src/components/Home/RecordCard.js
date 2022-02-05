import styled from 'styled-components';

export const Container = styled.section`
  width: 40%;
  height: 300px;
`;

export default function RecordCard() {
  return (
    <Container>
      <div className="card">
        <div className="card-content">
          <div className="content" />
        </div>
      </div>
    </Container>
  );
}
