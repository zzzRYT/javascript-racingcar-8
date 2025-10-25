import { Console } from '@woowacourse/mission-utils';

import { INPUT_DESCRIPTION } from '../constants.js';

class App {
  constructor(game, view) {
    this.game = game;
    this.view = view;
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
