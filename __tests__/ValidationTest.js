const Validation = require('../src/Validation');
const {
  UPSIDE_SYMBOL,
  DOWNSIDE_SYMBOL,
  QUIT_COMMAND,
  RESTART_COMMAND,
  BRIDGE_SIZE_MAX_RANGE,
  BRIDGE_SIZE_MIN_RANGE,
} = require('../src/constants/condition.js');
const { ERROR_MSG } = require('../src/constants/message.js');

describe('Validation 클래스 테스트', () => {
  describe('validateDirection 메서드 테스트', () => {
    test.each([['up'], ['donw'], ['u'], ['d'], ['위'], ['아래']])(
      `입력이 이동방향 심볼('${UPSIDE_SYMBOL}', '${DOWNSIDE_SYMBOL}')과 정확히 일치하지 않는 경우, 에러가 발생한다.`,
      (input) => {
        expect(() => {
          Validation.validateDirection(input);
        }).toThrow(ERROR_MSG.invalidDirection);
      }
    );

    test.each([['U'], ['D']])(
      `입력이 이동방향 심볼('${UPSIDE_SYMBOL}', '${DOWNSIDE_SYMBOL}')중 하나인 경우, 에러가 발생하지 않는다.`,
      (input) => {
        expect(() => {
          Validation.validateDirection(input);
        }).not.toThrow();
      }
    );
  });

  describe('validateGameCommand 메서드 테스트', () => {
    test.each([['quit'], ['restart'], ['q'], ['r']])(
      `입력이 게임 커멘드('${QUIT_COMMAND}', '${RESTART_COMMAND}')와 정확히 일치하지 않는 경우, 에러가 발생한다.`,
      (input) => {
        expect(() => {
          Validation.validateGameCommand(input);
        }).toThrow(ERROR_MSG.inValidCommand);
      }
    );

    test.each([['Q'], ['R']])(
      `입력이 게임 커멘드('${QUIT_COMMAND}', '${RESTART_COMMAND}')중 하나인 경우, 에러가 발생하지 않는다.`,
      (input) => {
        expect(() => {
          Validation.validateGameCommand(input);
        }).not.toThrow();
      }
    );
  });

  describe('validateSize 메서드 테스트', () => {
    test('입력이 빈 값인 경우, 에러가 발생한다.', () => {
      const input = '';

      expect(() => {
        Validation.validateSize(input);
      }).toThrow(ERROR_MSG.emptyInput);
    });

    test.each([['   '], ['  1'], ['asd'], ['일'], ['!']])(
      '입력에 숫자가 아닌 값이 있을 경우, 에러가 발생한다.',
      (input) => {
        expect(() => {
          Validation.validateSize(input);
        }).toThrow(ERROR_MSG.invalidInputType);
      }
    );

    test.each([['012'], ['0012']])('입력이 0으로 시작할 경우, 에러가 발생한다.', (input) => {
      expect(() => {
        Validation.validateSize(input);
      }).toThrow(ERROR_MSG.isStartedZero);
    });

    test.each([['1'], ['100']])(
      `입력이 ${BRIDGE_SIZE_MIN_RANGE} ~ ${BRIDGE_SIZE_MAX_RANGE} 사이 숫자가 아닐 경우, 에러가 발생한다.`,
      (input) => {
        expect(() => {
          Validation.validateSize(input);
        }).toThrow(ERROR_MSG.invalidInputRange);
      }
    );

    test.each([['10'], ['14']])('입력이 유효한 경우 에러가 발생하지 않는다.', (input) => {
      expect(() => {
        Validation.validateSize(input);
      }).not.toThrow();
    });
  });
});
