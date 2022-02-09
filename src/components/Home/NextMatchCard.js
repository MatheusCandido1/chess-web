import styled from 'styled-components';

const Container = styled.section`
  max-height: 325px;

  .card {
    height: 100%;
  }

`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    margin-top: 1rem;
    width: 100%;
  }

  footer {
    width: 100%;
    gap: 1rem;
  }
`;

const Score = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

  div {
    display: flex;
    flex-direction: column
  }
`;

const Schedule = styled.div`
  margin-top: 1rem;
`;

export default function NextMatchCard() {
  return (
    <Container className="column">
      <div className="card">
        <div className="card-content">
          <div className="content" />
          <Content>
            <Score>
              <div>
                <span className="subtitle is-3">Candin</span>
                <span className="tag is-black">Pretas</span>
              </div>

              <div>
                <span className="subtitle is-3">X</span>
              </div>

              <div>
                <span className="subtitle is-3">Max</span>
                <span className="tag is-light">Brancas</span>
              </div>
            </Score>
            <Schedule>
              <span className="tag is-info">09/02/2022 - 20:45 (BRT)</span>
            </Schedule>
            <footer className="field is-grouped">
              <button
                type="button"
                className="button is-info"
              >
                <span>Jogar</span>
                <span className="icon is-small">
                  <i className="fas fa-chess" />
                </span>
              </button>
            </footer>
          </Content>
        </div>
      </div>
    </Container>
  );
}
