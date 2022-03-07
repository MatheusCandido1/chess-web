/* eslint-disable react/no-unused-prop-types */
import propTypes from 'prop-types';

import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';

import toast from 'react-hot-toast';

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
    margin-top: 2rem;
    width: 100%;
    outline: 0;
    border: 0;
  }

  footer {
    width: 100%;
    gap: 1rem;

    div {
      margin-top: 2rem;
      width: 100%;
    }
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

export function NextMatchCardSkeleton() {
  return (
    <Container className="column">
      <div className="card">
        <div className="card-content">
          <div className="content" />
          <Content>
            <Score>
              <div style={{ gap: '2rem' }}>
                <Skeleton height={25} width={100} />
                <Skeleton height={10} width={100} />
              </div>

              <div>
                <span className="subtitle is-3"><Skeleton width={25} /></span>
              </div>

              <div style={{ gap: '2rem' }}>
                <Skeleton height={25} width={100} />
                <Skeleton height={10} width={100} />
              </div>
            </Score>
            <Schedule>
              <Skeleton height={25} width={150} />
            </Schedule>
            <footer className="field is-grouped">
              <div>
                <Skeleton height={35} />
              </div>
            </footer>
          </Content>
        </div>
      </div>
    </Container>
  );
}

export default function NextMatchCard({ game }) {
  return (
    <Container className="column">
      <div className="card">
        <div className="card-content">
          <div className="content" />
          <Content>
            <Score>
              <div>
                <span className="subtitle is-3">{game.blacks.name}</span>
                <span className="tag is-black">Pretas</span>
              </div>

              <div>
                <span className="subtitle is-3">X</span>
              </div>

              <div>
                <span className="subtitle is-3">{game.whites.name}</span>
                <span className="tag is-light">Brancas</span>
              </div>
            </Score>
            <Schedule>
              <span className="tag is-info">{game.schedule} (BRT)</span>
            </Schedule>
            <footer className="field is-grouped">
              <button
                type="button"
                className="button is-info"
                onClick={() => toast.success('This match is not ready. Try again later!', {
                  icon: '🕐',
                })}
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

NextMatchCard.propTypes = {
  game: propTypes.object.isRequired,
};
