import { useState } from 'react';
import styled from 'styled-components';
import delay from '../../utils/delay';

const Container = styled.section`
  width: 60%;
  height: 300px;
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

export default function NextGameCard() {
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(false);

  const HandleConfirmMatchButton = async () => {
    setLoading(true);
    setReady(true);
    await delay(2000);
    setLoading(false);
  };

  return (
    <Container>
      <div className="card">
        <div className="card-content">
          <div className="content" />
          <Content>
            <Score>
              <div>
                <span className="subtitle is-3">Matheus</span>
                <span className="tag is-black">Pretas</span>
              </div>

              <div>
                <span className="subtitle is-3">X</span>
              </div>

              <div>
                <span className="subtitle is-3">Gabriel</span>
                <span className="tag is-light">Brancas</span>
              </div>
            </Score>
            <Schedule>
              <span className="tag is-info">07/02/2022 - 16:00</span>
            </Schedule>
            <footer className="field is-grouped">
              {ready && !loading
                ? (
                  <button
                    type="button"
                    className="is-info is-outlined button"
                  >
                    <span>Jogar</span>
                    <span className="icon is-small">
                      <i className="fas fa-chess" />
                    </span>
                  </button>
                )
                : (
                  <button
                    type="button"
                    className={`button is-success ${loading ? 'is-loading' : ''}`}
                    onClick={HandleConfirmMatchButton}
                  >
                    <span className="icon is-small">
                      <i className="fas fa-check" />
                    </span>
                    <span>Confirmar Partida</span>
                  </button>
                )}
            </footer>
          </Content>
        </div>
      </div>
    </Container>
  );
}
