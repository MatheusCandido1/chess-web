import { useEffect, useState, useCallback } from 'react';

import Skeleton from 'react-loading-skeleton';
import GamesService from '../../services/GamesService';
import { Container, FirstRow, History } from './style';

import NextMatchCard, { NextMatchCardSkeleton } from '../../components/Home/NextMatchCard';
import MatchCard from '../../components/Home/MatchCard';
import ScoreboardCard, { ScoreboardCardSkeleton } from '../../components/Home/ScoreboardCard';

import delay from '../../utils/delay';

function HistorySkeleton() {
  return (
    <History className="columns is-desktop">
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
            <Skeleton width={100} height={35} />
          </p>
        </header>
        <div className="card-content">
          <div className="content">

            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Skeleton width={300} height={35} />
            </div>
          </div>

        </div>
      </div>
    </History>
  );
}

export default function Home() {
  const [nextGame, setNextGame] = useState({});
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  const getGames = useCallback(async () => {
    setLoading(true);
    const gamesList = await GamesService.listGames();
    setNextGame(gamesList.next_game);
    setGames(gamesList.games);

    await delay(1000);
    setLoading(false);
  }, []);

  useEffect(() => {
    getGames();
  }, [getGames]);

  return (
    <Container>
      <FirstRow className="columns is-desktop">
        {
          loading
            ? <NextMatchCardSkeleton />
            : nextGame
          && nextGame
          && nextGame.whites
          && nextGame.blacks
            && <NextMatchCard game={nextGame} />
        }
        {
          loading
            ? <ScoreboardCardSkeleton />
            : <ScoreboardCard />
        }
      </FirstRow>

      { loading
        ? <HistorySkeleton />
        : (
          <History className="columns is-desktop">
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">
                  Histórico de Confrontos
                </p>
              </header>
              <div className="card-content">
                <div className="content">
                  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {
                  games && games.length > 0
                    ? (
                      games.map((game) => (
                        <MatchCard key={game.id} game={game} />
                      ))
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
        )}
    </Container>
  );
}
