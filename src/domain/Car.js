import { MissionUtils } from '@woowacourse/mission-utils';

import { MAX_LENGTH_CAR_NAME, NAME_ALLOWED } from '../../constants.js';

export class Car {
  constructor(name) {
    validationCar().nameLength(name);
    validationCar().nameAllowed(name);
    this.name = name;
    this.move = 0;
  }

  getName() {
    return this.name;
  }

  getMove() {
    return this.move;
  }

  setMove() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    if (this.#canMove(randomNumber)) {
      this.move = this.move + 1;
    }
  }

  #canMove(randomNumber) {
    return randomNumber >= 4;
  }
}

export function validationCar() {
  const nameLength = (name) => {
    if (name.length <= 0 || name.length > MAX_LENGTH_CAR_NAME) {
      throw new Error('[ERROR] : 자동차 이름은 1자 이상, 5자 이하여야 합니다.');
    }
  };

  const nameAllowed = (name) => {
    if (!NAME_ALLOWED.test(name)) {
      throw new Error('[ERROR] : 자동차 이름은 한글 혹은 영어여야 합니다.');
    }
  };

  return { nameLength, nameAllowed };
}
