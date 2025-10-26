/**
 * App constants
 */
export const INPUT_DESCRIPTION = {
  CAR: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
  ROUND: '시도할 횟수는 몇 회인가요?',
};

/**
 * Game constants
 */
export const CAR_NAME_SEPARATOR = ',';

/**
 * Car constants
 */
export const MAX_LENGTH_CAR_NAME = 5;
export const NAME_ALLOWED = /^[ㄱ-ㅎ가-힣a-zA-Z0-9]*$/;

/**
 * Display constants
 */
export const DISPLAY = {
  WINNER: {
    DESCRIPTION: '최종 우승자',
    SEPARATOR: ', ',
  },
};

/**
 * utils constants
 */
export const REGEX = {
  KO: /[ㄱ-ㅎ|가-힣|ㅏ-ㅣ]/g,
  EN: /[a-zA-Z]/g,
  NUM: /[0-9]/g,
};

/**
 * Error constants
 */
export const ERROR = {
  GAME: {
    DUPLICATE: '[ERROR] : 자동차 이름이 중복되었습니다.',
    ROUND: '[ERROR] : 라운드 설정이 필요합니다.',
    ABLE: '[ERROR] : 게임을 시작하기 위해서는 두 개 이상의 차량이  필요합니다.',
  },
  CAR: {
    NAME: {
      LENGTH: '[ERROR] : 자동차 이름은 1자 이상, 5자 이하여야 합니다.',
      ALLOWED: '[ERROR] : 자동차 이름은 한글 혹은 영어여야 합니다.',
    },
  },
};
