import { MissionUtils } from '@woowacourse/mission-utils';
import { MAX_LENGTH_CAR_NAME } from '../../constants';

export class Car {
  constructor(name) {
    if (name.length > MAX_LENGTH_CAR_NAME) {
      throw new Error('[ERROR] : 자동차 이름은 5자 이하여야 합니다.');
    }
    this.name = name;
    this.move = 0;
  }

  getMove() {
    return this.move;
  }

  setMove() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    if (this.#isMove(randomNumber)) {
      this.move = this.move + 1;
    }
  }

  #isMove(randomNumber) {
    if (randomNumber >= 4) {
      return true;
    }
    return false;
  }
}
