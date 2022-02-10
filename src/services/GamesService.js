/* eslint-disable class-methods-use-this */
import { Http } from './utils/http';

class GamesService {
  async listGames() {
    const response = await Http.get('games');
    return response.data.data;
  }
}

export default new GamesService();
