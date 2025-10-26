import { Game, validationGame } from '../src/domain/Game';

describe('Game Class 단위 테스트', () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  test('게임 세팅을 통해서 전달받은 자동차와, round 수를 저장한다.', () => {
    const cars = 'pobi,woni';
    const round = '5';

    game.setting(cars, round);
    const carsNames = game.getCars().map((car) => car.name);

    expect(carsNames).toEqual(['pobi', 'woni']);
    expect(game.getRound()).toBe(5);
  });

  test.each([
    {
      description: '우승자에 대한 배열을 반환한다.',
      cars: [
        { name: 'pobi', move: 4 },
        { name: 'woni', move: 3 },
        { name: 'kate', move: 1 },
      ],
      expectedWinners: ['pobi'],
    },
    {
      description:
        '우승자가 한 명 이상일 경우, 여러명의 우승자를 배열에 추가해 반환한다..',
      cars: [
        { name: 'pobi', move: 4 },
        { name: 'woni', move: 4 },
        { name: 'kate', move: 1 },
      ],
      expectedWinners: ['pobi', 'woni'],
    },
  ])('$description', ({ cars, expectedWinners }) => {
    game.cars = cars;

    const winners = game.getWinners();

    expect(winners).toEqual(expectedWinners);
  });
});

describe('ValidationGame 단위 테스트', () => {
  let validationCar;

  beforeEach(() => {
    validationCar = validationGame();
  });

  test('자동차가 중복된 경우 에러를 발생시킨다.', () => {
    const cars = [{ name: 'pobi' }, { name: 'pobi' }];

    expect(() => validationCar.duplicatedCar(cars)).toThrow('[ERROR]');
  });

  test.each([{ round: 0 }, { round: -1 }, { round: -10 }])(
    'round가 0 이하인 경우 에러를 발생시킨다. : $round',
    ({ round }) => {
      expect(() => validationCar.roundSetting(round)).toThrow('[ERROR');
    }
  );

  test('자동차가 한 대일 경우 게임을 시작할 수 없다.', () => {
    const cars = ['pobi'];

    expect(() => validationCar.ableCarCountToPlay(cars)).toThrow('[ERROR]');
  });
});
