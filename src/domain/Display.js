import { Console } from '@woowacourse/mission-utils';

import { WINNER_DESCRIPTION, WINNER_SEPARATOR } from '../../constants.js';

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
    Console.print(`${WINNER_DESCRIPTION} : ${winnerString}`);
  }

  #repeatMoveBar(move) {
    const moves = '-'.repeat(move);
    return moves;
  }

  #combineMultipleWinner(winners) {
    if (this.#isMultipleWinner(winners)) {
      return winners.join(WINNER_SEPARATOR);
    }
    return winners[0];
  }

  #isMultipleWinner(winners) {
    return winners.length > 1;
  }
}
