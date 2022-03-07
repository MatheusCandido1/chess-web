/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unused-prop-types */
import propTypes from 'prop-types';
import styled from 'styled-components';
import { useState } from 'react';

const Card = styled.section`
  max-height: 100%;

  .panel-heading {
    text-align: center;
  }

  header {
    display: flex;
    justify-content: space-between;

    .tag {
      border-radius: 10px;
    }
  }

  section {
    display: flex;
    justify-content: center;
    padding-left: 1rem;
    padding-right: 1rem;
    gap: 0.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;

    .is-light {
      color: #000;
      border: 1px solid #000;
      background: #FFF;
    }
  }

  .panel-block {
    display: flex;
    flex-direction: column;

    iframe {
      width: 100%;
      height: 400px;
      margin-bottom: 1rem;
    }

    button {
    }
  }
`;
export default function MatchCard({ game }) {
  return (
    <Card className="column is-one-third">
      <nav className="panel">
        <p className="panel-heading">
          <header>
            <span>Partida #{game.id}</span>
          </header>
        </p>
        <section>
          <span className={`tag is-medium ${game.winner_color === 'white' ? 'is-light' : 'is-black'}`}>Ganhador: {game?.winner.name} </span>
          <span className={`tag is-medium ${game.loser_color === 'white' ? 'is-light' : 'is-black'}`}>Perdedor: {game?.loser.name}</span>
        </section>
        <div className="panel-block">
          <iframe
            title={game.play.split('/').pop()}
            src={`https://lichess.org/embed/${game.play.split('/').pop()}#108?theme=auto&bg=auto`}
          />
          <button onClick={() => window.open(game.play, '_blank')} type="button" className="button is-info is-fullwidth">
            <span>Ver Partida</span>
            <span className="icon is-small">
              <i className="fas fa-chess-board" />
            </span>
          </button>
        </div>
      </nav>
    </Card>
  );
}

MatchCard.propTypes = {
  game: propTypes.object.isRequired,
};
