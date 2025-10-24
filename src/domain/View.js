import { Console } from '@woowacourse/mission-utils';
import { WINNER_DESCRIPTION } from '../../constants.js';

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
    let winnerString = winners[0];
    if (this.#isMultipleWinner(winners)) {
      winnerString = winners.join(', ');
    }
    Console.print(`${WINNER_DESCRIPTION} : ${winnerString}`);
  }

  #repeatMoveBar(move) {
    const moves = '-'.repeat(move);
    return moves;
  }

  #isMultipleWinner(winners) {
    return winners.length > 1;
  }
}
