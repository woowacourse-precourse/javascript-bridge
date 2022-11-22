const { validateBridge, validateMove, validateRetry } = require('../src/utils/validate');
describe('다리 예외 케이스', () => {
  test.each(['a', ' ', '!'])('다리 길이로 숫자가 아닌 값이 들어오면 에러가 발생한다.', (input) => {
    expect(() => {
      validateBridge(input).toThrow('[ERROR]');
    });
  });

  test.each([0, 1, 30])('다리 길이가 3미만 20초과라면 에러가 발생한다.', (input) => {
    expect(() => {
      validateBridge(input).toThrow('[ERROR]');
    });
  });
});

describe('사용자 움직임 예외 케이스', () => {
  test.each(['A', 'd'])(
    '사용자 움직임으로 U와 D를 제외한 값이 들어오면 에러가 발생한다.',
    (input) => {
      expect(() => {
        validateMove(input).toThrow('[ERROR]');
      });
    },
  );
});

describe('게임 종료/재시작 커맨드 예외 케이스', () => {
  test.each(['r', 'q', 'A'])(
    '게임 종료/재시작 커맨드로 R, Q를 제외한 값이 들어오면 에러가 발생한다.',
    (input) => {
      expect(() => {
        validateRetry(input).toThrow('[ERROR]');
      });
    },
  );
});
