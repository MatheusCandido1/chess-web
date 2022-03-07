import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';

export const Container = styled.section`
  max-height: 325px;

  .card {
    height: 100%;
  }

  table {
    margin: auto;
    border-collapse: collapse;
    overflow-x: auto;
    display: block;
    width: fit-content;
    max-width: 100%;
  }
`;

export function ScoreboardCardSkeleton() {
  return (
    <Container className="column">
      <div className="card">
        <div className="card-content">
          <div className="content" />
          <Skeleton height={35} style={{ width: '100px', marginBottom: '1rem' }} />
          <div style={{ width: '100%', marginBottom: '1rem' }}>
            <Skeleton height={35} style={{ marginBottom: '1rem' }} />
            <Skeleton height={35} style={{ marginBottom: '1rem' }} />
            <Skeleton height={35} style={{ marginBottom: '1rem' }} />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default function ScoreboardCard() {
  return (
    <Container className="column">
      <div className="card">
        <div className="card-content">
          <div className="content" />
          <h3 className="title is-3">Placares</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Pos</th>
                <th>Jogador</th>
                <th>Vitórias</th>
                <th>Vitórias (Brancas)</th>
                <th>Derrotas (Brancas)</th>
                <th>Empate (Brancas)</th>
                <th>Vitórias (Pretas)</th>
                <th>Derrotas (Pretas)</th>
                <th>Empate (Pretas)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Candin</td>
                <th>1</th>
                <td>0</td>
                <td>1</td>
                <td>0</td>
                <td>1</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <th>2</th>
                <td>Max</td>
                <th>1</th>
                <td>0</td>
                <td>1</td>
                <td>0</td>
                <td>1</td>
                <td>0</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
}
