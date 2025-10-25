import { Console } from '@woowacourse/mission-utils';

import { WINNER_DESCRIPTION, WINNER_SEPARATOR } from '../../constants.js';

export class View {
  displayResultStart() {
    Console.print('\n실행 결과');
  }

  displayRound(cars) {
    cars.forEach((car) => {
      Console.print(`${car.name} : ${this.#repeatMoveBar(car.move)}`);
    });
    Console.print('');
  }

  displayWinners(winners) {
    const winnerString = this.#combineMultipleWinner;
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
