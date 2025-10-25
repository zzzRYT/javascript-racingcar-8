import { MissionUtils } from '@woowacourse/mission-utils';

import { Car, validationCar } from '../src/domain/Car';

jest.mock('@woowacourse/mission-utils');

describe('Car Class 단위 테스트', () => {
  let car;

  beforeEach(() => {
    car = new Car('pobi');
  });

  test('무작위 수가 4 이상일 경우 전진한다.', () => {
    MissionUtils.Random.pickNumberInRange.mockReturnValue(5);

    car.setMove();

    expect(car.getMove()).toBe(1);
  });

  test('무작위 수가 4 미만일 경우 정지한다.', () => {
    MissionUtils.Random.pickNumberInRange.mockReturnValue(3);

    car.setMove();

    expect(car.getMove()).toBe(0);
  });
});

describe('ValidationCar 단위 테스트', () => {
  let validation;

  beforeEach(() => {
    validation = validationCar();
  });

  test.each([
    { name: 'pobiii' },
    { name: 'woniii' },
    { name: '' },
    { name: 'abcdef' },
  ])(
    '자동자 이름이 1이하, 5이상인 경우 에러를 발생시킨다.: $name',
    ({ name }) => {
      expect(() => validation.nameLength(name)).toThrow();
    }
  );
});
