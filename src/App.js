import { Console } from '@woowacourse/mission-utils';

import { INPUT_DESCRIPTION } from '../constants.js';
import { Game } from './domain/Game.js';
import { Display } from './domain/Display.js';

class App {
  constructor() {
    this.game = new Game();
    this.display = new Display();
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

      this.display.resultStart();
      for (let i = 0; i < this.game.getRound(); i++) {
        const currentCars = this.game.playRound();
        this.display.round(currentCars);
      }

      const winners = this.game.getWinners();
      this.display.winners(winners);
    } catch (error) {
      throw error;
    }
  }
}

export default App;
