import { Container } from './style';

import NextGameCard from '../../components/Home/NextGameCard';
import RecordCard from '../../components/Home/RecordCard';

export default function Home() {
  return (
    <Container>
      <NextGameCard />
      <RecordCard />

    </Container>
  );
}
