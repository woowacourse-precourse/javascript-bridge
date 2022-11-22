const BridgeSizeCheck = require('../src/models/BridgeSizeCheck');
const MovingCheck = require('../src/models/MovingCheck');
const RetryCheck = require('../src/models/RetryCheck');

describe('다리 길이값 에러 테스트', () => {
  test('3~20 사이의 수가 아닌 경우', () => {
    const sizeValue = ['0', '1', '2', '21', '30'];
    const size = new BridgeSizeCheck();

    sizeValue.forEach(value => {
      expect(size.validate(value)).toBeFalsy();
    });
  });

  test('숫자가 아닌 입력이 포함된 경우 (소수점 입력 포함)', () => {
    const sizeValue = [' ', 'a', `\n`, 'BD', '3.0', '10.25', '5.000000001'];
    const size = new BridgeSizeCheck();

    sizeValue.forEach(value => {
      expect(size.validate(value)).toBeFalsy();
    });
  });
});

describe('U/D값 에러 테스트', () => {
  test('U/D외의 문자를 입력한 경우', () => {
    const upDownValue = [' ', `\n`, 'a', 'BB'];
    const size = new MovingCheck();

    upDownValue.forEach(value => {
      expect(size.validate(value)).toBeFalsy();
    });
  });

  test('U 또는 D를 여러 번 입력한 경우', () => {
    const upDownValue = ['UUUU', 'UDD', 'DD', 'DU'];
    const size = new MovingCheck();

    upDownValue.forEach(value => {
      expect(size.validate(value)).toBeFalsy();
    });
  });
});

describe('재시도 질문 값 에러 테스트', () => {
  test('R/Q외의 문자를 입력한 경우', () => {
    const upDownValue = [' ', `\n`, 'a', 'BB'];
    const size = new RetryCheck();

    upDownValue.forEach(value => {
      expect(size.validate(value)).toBeFalsy();
    });
  });

  test('R/Q를 여러 번 입력한 경우', () => {
    const upDownValue = ['RRR', 'QQ', 'QR', 'RRQ'];
    const size = new RetryCheck();

    upDownValue.forEach(value => {
      expect(size.validate(value)).toBeFalsy();
    });
  });
});
