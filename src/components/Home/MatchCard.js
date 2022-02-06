/* eslint-disable jsx-a11y/label-has-associated-control */
import styled from 'styled-components';

const Card = styled.section`
  max-height: 250px;

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




`;

export default function MatchCard() {
  return (
    <Card className="column is-one-third">
      <nav className="panel">
        <p className="panel-heading">
          <header>
            <span>Partida #1</span>
            <span className="tag is-info is-light is-medium">Lances: 34</span>
          </header>

        </p>
        <p className="panel-tabs">
          <a href className="is-active">Resultado</a>
          <a href>Precisão</a>
        </p>

        <div className="panel-block">
          <button type="button" className="button is-info is-fullwidth">
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
