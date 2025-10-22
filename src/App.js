import { Console } from '@woowacourse/mission-utils';

import { INPUT_DESCRIPTION } from '../constants.js';
import { Game } from './domain/Game.js';

class App {
  constructor() {
    this.game = new Game();
  }

  async userInput() {
    const userInput = await Console.readLineAsync(INPUT_DESCRIPTION);
    return userInput;
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
      this.game.start();
    } catch (error) {
      throw error;
    }
  }
}

export default App;
