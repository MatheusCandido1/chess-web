import { useEffect, useState, useCallback } from 'react';

import GamesService from '../../services/GamesService';
import { Container, FirstRow, History } from './style';

import NextMatchCard from '../../components/Home/NextMatchCard';
import MatchCard from '../../components/Home/MatchCard';
import ScoreboardCard from '../../components/Home/ScoreboardCard';

export default function Home() {
  const [nextGame, setNextGame] = useState({});
  const [games, setGames] = useState([]);

  const getGames = useCallback(async () => {
    const gamesList = await GamesService.listGames();
    setNextGame(gamesList.next_game);
    setGames(gamesList.games);
  }, []);

  useEffect(() => {
    getGames();
  }, [getGames]);

  return (
    <Container>
      <FirstRow className="columns is-desktop">
        {
          nextGame
          && nextGame
          && nextGame.whites
          && nextGame.blacks
          && <NextMatchCard game={nextGame} />
        }
        <ScoreboardCard />
      </FirstRow>

      <History className="columns is-desktop">
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">
              Histórico de Confrontos
            </p>
          </header>
          <div className="card-content">
            <div className="content">
              <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>

                {
                  games && games.length > 0
                    ? (
                      <MatchCard />
                    )
                    : (
                      <div className="notification">
                        Nenhuma partida foi jogada entre os jogadores.
                      </div>
                    )
                }
              </div>

            </div>
          </div>
        </div>
      </History>
    </Container>
  );
}
