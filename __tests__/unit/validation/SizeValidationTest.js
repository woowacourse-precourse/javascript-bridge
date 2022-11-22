const SizeValidation = require('../../../src/validation/SizeValidation');
const { ERROR_MESSAGE } = require('../../../src/constants');

describe('[SizeValidation] 다리 길이에 대한 유효성을 평가한다.', () => {
  test.each([
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
  ])('[성공 케이스]', (bridgeSize) => {
    const { status, message } = SizeValidation.validate(bridgeSize);
    expect(status).toEqual(true);
    expect(message).toEqual(undefined);
  });

  test.each(['1', '2', '-1', '-2', '21', '22', '23'])(
    '[실패 케이스] 범위를 벗어난 값',
    (bridgeSize) => {
      const { status, message } = SizeValidation.validate(bridgeSize);
      expect(status).toEqual(false);
      expect(message).toEqual(ERROR_MESSAGE.size);
    },
  );

  test.each(['wrong', '10.5', '10.0'])('[실패 케이스] 숫자가 아닌 값', (bridgeSize) => {
    const { status, message } = SizeValidation.validate(bridgeSize);
    expect(status).toEqual(false);
    expect(message).toEqual(ERROR_MESSAGE.size);
  });
});
