const Validation = require('../src/Validation');
const {
  UPSIDE_SYMBOL,
  DOWNSIDE_SYMBOL,
  QUIT_COMMAND,
  RESTART_COMMAND,
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
});
