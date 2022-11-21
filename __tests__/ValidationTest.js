const {
  isCorrectBridgeSize,
  isCorrectCharactor,
  isCorrectMoveCommand,
  isCorrectOptionCommand,
} = require('../src/Utils/Validation');

describe('Validation 테스트', () => {
  // 조건
  test.each([['a'], ['0'], ['-123']])('[isCorrectBridgeSize] : 다리의 길이가 3과 20사이가 아닐 때 예외처리', () => {
    // 실행 및 평가
    expect((input) => {
      isCorrectBridgeSize(input);
    }).toThrow();
  });

  // 조건
  test.each([['1'], ['a'], ['오류지롱ㅋ']])('[isCorrectCharactor] : 입력이 영어 대문자가 아닐 때 예외처리', () => {
    // 실행 및 평가
    expect((input) => {
      isCorrectCharactor(input);
    }).toThrow();
  });

  // 조건
  test.each([['1'], ['d'], ['DD'], ['오류지롱ㅋ']])(
    '[isCorrectMoveCommand] : 입력이 적절한 이동 문구가 아닐 때 예외처리',
    () => {
      // 실행 및 평가
      expect((input) => {
        isCorrectMoveCommand(input);
      }).toThrow();
    },
  );

  // 조건
  test.each([['1'], ['q'], ['QQ'], ['오류지롱ㅋ']])(
    '[isCorrectOptionCommand] : 입력이 적절한 종료/재시작 문구가 아닐 때 예외처리',
    () => {
      // 실행 및 평가
      expect((input) => {
        isCorrectOptionCommand(input);
      }).toThrow();
    },
  );
});
