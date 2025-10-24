import { Console } from '@woowacourse/mission-utils';

import { INPUT_DESCRIPTION } from '../constants.js';
import { Game } from './domain/Game.js';
import { View } from './domain/View.js';

class App {
  constructor() {
    this.game = new Game();
    this.view = new View();
  }

  async run() {
    try {
      const carNames = await Console.readLineAsync(
        `${INPUT_DESCRIPTION.CAR}\n`
      );
      const gameRound = await Console.readLineAsync(
        `${INPUT_DESCRIPTION.ROUND}\n`
      );

      this.game.setting(carNames, gameRound);

      this.view.displayResultStart();
      for (let i = 0; i < this.game.getRound(); i++) {
        const currentCars = this.game.playRound();
        this.view.displayRound(currentCars);
      }

      const winners = this.game.getWinners();
      this.view.displayWinners(winners);
    } catch (error) {
      throw error;
    }
  }
}

export default App;
