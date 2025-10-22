import { Console } from '@woowacourse/mission-utils';
import { Game } from '../src/domain/Game';

describe('Game Class 단위 테스트', () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  test('게임 세팅을 통해서 전달받은 자동차와, 차수를 저장한다.', () => {
    const cars = 'pobi,woni';
    const round = '5';

    game.setting(cars, round);
    const carsNames = game.getCars().map((car) => car.name);

    expect(carsNames).toEqual(['pobi', 'woni']);
    expect(game.getRound()).toBe(5);
  });
});
