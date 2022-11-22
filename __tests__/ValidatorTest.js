const Validator = require('../src/Model/Validator');
const { ERROR } = require('../src/Constants');

describe('입력값 유효성 검증 테스트', () => {
  test('입력한 다리 길이가 3보다 작으면 예외 처리한다.', () => {
    const userInput = '2';
    expect(() => {
      Validator.bridgeSize(Number(userInput));
    }).toThrow(ERROR.SCOPE);
  });

  test('입력한 다리 길이가 20보다 크면 예외 처리한다.', () => {
    const userInput = '21';
    expect(() => {
      Validator.bridgeSize(Number(userInput));
    }).toThrow(ERROR.SCOPE);
  });

  test.each(['a', ']', 'D'])('입력한 다리 길이가 숫자가 아닌 경우 예외 처리한다.', () => {
    expect((userInput) => {
      Validator.bridgeSize(Number(userInput));
    }).toThrow(ERROR.TYPE);
  });

  test.each(['u', 'd', '1', '.'])(
    '이동할 칸에 대한 입력값이 대문자 U 또는 D가 아닌 경우 예외 처리한다.',
    () => {
      expect((userInput) => {
        Validator.direction(userInput);
      }).toThrow(ERROR.DIRECTION);
    },
  );

  test.each(['r', 'q', 'U', 'D', '1', ';'])(
    '게임 재시작 여부에 대한 입력값이 대문자 R 또는 Q가 아닌 경우 예외 처리한다.',
    () => {
      expect((userInput) => {
        Validator.command(userInput);
      }).toThrow(ERROR.COMMAND);
    },
  );
});

