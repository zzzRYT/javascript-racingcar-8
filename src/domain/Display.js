import { Console } from '@woowacourse/mission-utils';

import { DISPLAY } from '../../constants.js';

export class Display {
  resultStart() {
    Console.print('\n실행 결과');
  }

  round(cars) {
    cars.forEach((car) => {
      Console.print(`${car.name} : ${this.#repeatMoveBar(car.move)}`);
    });
    Console.print('');
  }

  winners(winners) {
    const winnerString = this.#combineMultipleWinner(winners);
    Console.print(`${DISPLAY.WINNER.DESCRIPTION} : ${winnerString}`);
  }

  #repeatMoveBar(move) {
    const moves = '-'.repeat(move);
    return moves;
  }

  #combineMultipleWinner(winners) {
    if (this.#isMultipleWinner(winners)) {
      return winners.join(DISPLAY.WINNER.SEPARATOR);
    }
    return winners[0];
  }

  #isMultipleWinner(winners) {
    return winners.length > 1;
  }
}
