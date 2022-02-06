import { Container, FirstRow, History } from './style';

import NextMatchCard from '../../components/Home/NextMatchCard';
import ScoreboardCard from '../../components/Home/ScoreboardCard';
import MatchCard from '../../components/Home/MatchCard';

export default function Home() {
  return (
    <Container>
      <FirstRow className="columns is-desktop">
        <NextMatchCard />
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
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <MatchCard />
                <MatchCard />
                <MatchCard />
                <MatchCard />
              </div>
            </div>
          </div>
        </div>
      </History>
    </Container>
  );
}
