import { Console } from '@woowacourse/mission-utils';
import { WINNER_DESCRIPTION } from '../../constants.js';

export class View {
  displayRound(name, move) {
    Console.print(`${name} : ${this.#repeatMoveBar(move)}`);
  }

  displayWinners(winners) {
    let winnerString = winners[0];
    if (this.#isWinners(winners)) {
      winnerString = winners.join(', ');
    }
    return `${WINNER_DESCRIPTION} : ${winnerString}`;
  }

  #repeatMoveBar(move) {
    const moves = '-'.repeat(move);
    return moves;
  }

  #isWinners(winners) {
    if (winners.length > 1) {
      return true;
    }
    return false;
  }
}
