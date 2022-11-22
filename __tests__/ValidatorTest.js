/* eslint-disable */

const Validator = require('../src/Validator');

/**
 * errorIfBridgeSizeInvalid()
 * - 다리의 크기를 검증하는 테스트
 */
describe('[Validator] 다리 크기가 올바를 경우, Error가 발생되어서는 안 된다.', () => {
  test.each([
    { testcase: '3' },
    { testcase: '7' },
    { testcase: '10' },
    { testcase: '15' },
    { testcase: '20' },
  ])('"$testcase"', ({ testcase }) => {
    expect(() => {
      Validator.errorIfBridgeSizeInvalid(testcase);
    }).not.toThrow();
  });
});

describe('[Validator] 다리 크기가 자연수 형태가 아닐 경우, Error가 발생되어야 한다.', () => {
  test.each([
    { testcase: '2NotNumber' },
    { testcase: '10.5' },
    { testcase: '10.0' },
    { testcase: '1e2' },
    { testcase: '0' },
    { testcase: '-10' },
    { testcase: '+10' },
    { testcase: '' },
  ])('"$testcase"', ({ testcase }) => {
    expect(() => {
      Validator.errorIfBridgeSizeInvalid(testcase);
    }).toThrow();
  });
});

describe('[Validator] 다리 크기가 3 이상 20 이하의 자연수가 아닐 경우, Error가 발생되어야 한다.', () => {
  test.each([{ testcase: '2' }, { testcase: '21' }, { testcase: '1' }, { testcase: '197' }])(
    '"$testcase"',
    ({ testcase }) => {
      expect(() => {
        Validator.errorIfBridgeSizeInvalid(testcase);
      }).toThrow();
    }
  );
});

/**
 * errorIfMovingInvalid()
 * - 이동 커맨드 입력을 검증하는 테스트
 */
describe('[Validator] 올바른 이동 커맨드가 주어졌을 경우 Error가 발생되어서는 안 된다.', () => {
  test.each([{ testcase: 'U' }, { testcase: 'D' }])('"$testcase"', ({ testcase }) => {
    expect(() => {
      Validator.errorIfMovingInvalid(testcase);
    }).not.toThrow();
  });
});

describe('[Validator] 잘못된 이동 커맨드가 주어지면 Error를 발생시켜야 한다.', () => {
  test.each([
    { testcase: 'UU' },
    { testcase: '1' },
    { testcase: ' U' },
    { testcase: 'u' },
    { testcase: 'A' },
  ])('"$testcase"', ({ testcase }) => {
    expect(() => {
      Validator.errorIfMovingInvalid(testcase);
    }).toThrow();
  });
});

/**
 * errorIfGameCommandInvalid()
 * - 재시작 커맨드 입력을 검증하는 테스트
 */
describe('[Validator] 올바른 재시작 커맨드가 주어졌을 경우 Error가 발생되어서는 안 된다.', () => {
  test.each([{ testcase: 'R' }, { testcase: 'Q' }])('"$testcase"', ({ testcase }) => {
    expect(() => {
      Validator.errorIfGameCommandInvalid(testcase);
    }).not.toThrow();
  });
});

describe('[Validator] 잘못된 재시작 커맨드가 주어지면 Error를 발생시켜야 한다.', () => {
  test.each([
    { testcase: 'RR' },
    { testcase: '0' },
    { testcase: ' R' },
    { testcase: 'q' },
    { testcase: 'B' },
  ])('"$testcase"', ({ testcase }) => {
    expect(() => {
      Validator.errorIfGameCommandInvalid(testcase);
    }).toThrow();
  });
});
