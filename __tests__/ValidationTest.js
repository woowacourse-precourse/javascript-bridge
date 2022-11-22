const Validation = require('../src/Validation');

describe('Validation 클래스 테스트', () => {
  test('bridgeLength 입력 값이 비었을 경우', () => {
    const input = '';

    expect(() => Validation.bridgeLength(input)).toThrow('[ERROR] 값을 입력해주세요.');
  });

  test('bridgeLength 입력 값이 숫자가 아닐경우', () => {
    const input = '가';

    expect(() => Validation.bridgeLength(input)).toThrow('[ERROR] 숫자를 입력해주세요.');
  });

  test('bridgeLength 입력 값이 숫자가 아닐경우', () => {
    const input = 'number';

    expect(() => Validation.bridgeLength(input)).toThrow('[ERROR] 숫자를 입력해주세요.');
  });

  test('bridgeLength 입력 값이 3~20 사이가 아닐 경우', () => {
    const input = '2';

    expect(() => Validation.bridgeLength(input)).toThrow('[ERROR] 3과 20사이의 값을 입력해주세요.');
  });

  test('bridgeLength 입력 값이 3~20 사이가 아닐 경우', () => {
    const input = '21';

    expect(() => Validation.bridgeLength(input)).toThrow('[ERROR] 3과 20사이의 값을 입력해주세요.');
  });

  test('bridge 이동 값이 비었을 경우', () => {
    const input = '';

    expect(() => Validation.nextStep(input)).toThrow('[ERROR] 값을 입력해주세요.');
  });
  
  test('bridge 이동 값이 여러개일 경우', () => {
    const input = 'UU';

    expect(() => Validation.nextStep(input)).toThrow('[ERROR] 1개의 값을 입력해주세요.');
  });

  test('bridge 이동 값이 여러개일 경우', () => {
    const input = 'DD';

    expect(() => Validation.nextStep(input)).toThrow('[ERROR] 1개의 값을 입력해주세요.');
  });

  test('bridge 이동 값이 여러개일 경우', () => {
    const input = 'UD';

    expect(() => Validation.nextStep(input)).toThrow('[ERROR] 1개의 값을 입력해주세요.');
  });

  test('bridge 이동 값이 올바르지 않을 경우', () => {
    const input = 'q';

    expect(() => Validation.nextStep(input)).toThrow('[ERROR] U 또는 D를 입력해주세요.');
  });

  test('bridge 이동 값이 올바르지 않을 경우', () => {
    const input = 'j';

    expect(() => Validation.nextStep(input)).toThrow('[ERROR] U 또는 D를 입력해주세요.');
  });

  test('bridge 이동 값이 소문자일 경우', () => {
    const input = 'u';

    expect(() => Validation.nextStep(input)).toThrow('[ERROR] 소문자로 입력하셨습니다. 대문자로 입력해주세요.');
  });

  test('bridge 이동 값이 소문자일 경우', () => {
    const input = 'd';

    expect(() => Validation.nextStep(input)).toThrow('[ERROR] 소문자로 입력하셨습니다. 대문자로 입력해주세요.');
  });

  test('게임오버시 입력 값이 없을 경우', () => {
    const input = '';

    expect(() => Validation.retry(input)).toThrow('[ERROR] 값을 입력해주세요.');
  });

  test('게임오버시 여러개의 값을 입력했을 경우', () => {
    const input = 'RQ';

    expect(() => Validation.retry(input)).toThrow('[ERROR] 1개의 값을 입력해주세요.');
  });

  test('게임오버시 여러개의 값을 입력했을 경우', () => {
    const input = 'QR';

    expect(() => Validation.retry(input)).toThrow('[ERROR] 1개의 값을 입력해주세요.');
  });

  test('게임오버시 소문자를 입력했을 경우', () => {
    const input = 'r';

    expect(() => Validation.retry(input)).toThrow('[ERROR] 소문자로 입력하셨습니다. 대문자로 입력해주세요.');
  });

  test('게임오버시 소문자를 입력했을 경우', () => {
    const input = 'q';

    expect(() => Validation.retry(input)).toThrow('[ERROR] 소문자로 입력하셨습니다. 대문자로 입력해주세요.');
  });

  test('게임 오버시 입력값이 올바르지 않을 경우', () => {
    const input = 'w';

    expect(() => Validation.retry(input)).toThrow('[ERROR] R 또는 Q를 입력해주세요.');
  });

  test('게임 오버시 입력값이 올바르지 않을 경우', () => {
    const input = 's';

    expect(() => Validation.retry(input)).toThrow('[ERROR] R 또는 Q를 입력해주세요.');
  });
});