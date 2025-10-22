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
    const carNames = await Console.readLineAsync(`${INPUT_DESCRIPTION.CAR}\n`);
    const gameRound = await Console.readLineAsync(
      `${INPUT_DESCRIPTION.ROUND}\n`
    );
    Console.print(carNames);
    Console.print(gameRound);
  }
}

export default App;
