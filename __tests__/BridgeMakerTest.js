const MissionUtils = require('@woowacourse/mission-utils');
const { INPUT_ERROR } = require('../constants/error.constants');
const InputValidator = require('../validators/InputValidator');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers
    .reduce(
      (acc, number) => acc.mockReturnValueOnce(number),
      MissionUtils.Random.pickNumberInRange,
    );
};

describe('다리길이 입력 예외 테이스', () => {
  test('다리길이 입력값이 숫자가 아니면 예외가 발생한다.', () => {
    const input = 'ddd';

    expect(() => {
      InputValidator.isRightBridgeLength(input);
    }).toThrow(INPUT_ERROR.IS_NOT_NUMBER);
  });

  test('다리길이 입력값이 3이상 20이하가 아니면 예외가 발생한다.', () => {
    const input = '2';

    expect(() => {
      InputValidator.isRightBridgeLength(input);
    }).toThrow(INPUT_ERROR.IS_NOT_IN_RANGE);
  });
});
