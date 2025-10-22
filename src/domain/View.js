import { WINNER_DESCRIPTION } from '../../constants.js';

export class View {
  displayWinners(winners) {
    let winnerString = winners[0];
    if (this.#isWinners(winners)) {
      winnerString = winners.join(', ');
    }
    return `${WINNER_DESCRIPTION} : ${winnerString}`;
  }

  #isWinners(winners) {
    if (winners.length > 1) {
      return true;
    }
    return false;
  }
}
