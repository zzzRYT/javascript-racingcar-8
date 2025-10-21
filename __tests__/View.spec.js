import { View } from '../src/domain/View';

describe('View Class 단위 테스트', () => {
  let view;

  beforeEach(() => {
    view = new View();
  });

  test('우승자가 한 명일 경우 "최종 우승자 : 이름" 형식으로 출력한다.', () => {
    const winners = ['pobi'];
    const expectedOutput = '최종 우승자 : pobi';
    expect(view.displayWinners(winners)).toBe(expectedOutput);
  });

  test('우승자가 여러 명일 경우 쉼표(,)로 구분해 "최종 우승자 : 이름1, 이름2" 형식으로 출력한다.', () => {
    const winners = ['pobi', 'jun'];
    const expectedOutput = '최종 우승자 : pobi, jun';
    expect(view.displayWinners(winners)).toBe(expectedOutput);
  });
});
