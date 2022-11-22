const MissionUtils = require('@woowacourse/mission-utils');
const { INPUT_ERROR } = require('../constants/error.constants');
const InputValidator = require('../validators/InputValidator');
const BridgeMaker = require('../src/BridgeMaker');
const { generate } = require('../src/BridgeRandomNumberGenerator');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers
    .reduce(
      (acc, number) => acc.mockReturnValueOnce(number),
      MissionUtils.Random.pickNumberInRange,
    );
};

describe('다리 생성 테스트', () => {
  test('입력값에 따른 다리 생성', () => {
    const length = 3;
    mockRandoms([1, 0, 1]);
    const bridge = BridgeMaker.makeBridge(length, generate);
    expect(bridge).toEqual(['U', 'D', 'U']);
  });
});

describe('다리길이 입력 예외 테이스', () => {

  test.each([['ddd'], ['22c'], ['2*']])('다리길이 입력값이 숫자가 아니면 예외가 발생한다.',
  (input) => {
    expect(() => {
      InputValidator.isRightBridgeLength(input);
    }).toThrow(INPUT_ERROR.IS_NOT_NUMBER);
  }
  )

  test.each([['2'], ['0'], ['32']])('다리길이 입력값이 3이상 20이하가 아니면 예외가 발생한다.',
  (input) => {
    expect(() => {
      InputValidator.isRightBridgeLength(input);
    }).toThrow(INPUT_ERROR.IS_NOT_IN_RANGE);
  }
  )

});
