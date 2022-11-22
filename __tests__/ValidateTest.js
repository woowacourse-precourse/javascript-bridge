const Validate = require('../src/components/Validate');

describe('다리 사이즈 입력 테스트', () => {
  const results = [false, false, false, false, false, true, true, true];
  const inputs = [
    ['0'],
    ['abc'],
    ['23a'],
    ['1'],
    ['21'],
    ['3'],
    ['15'],
    ['7'],
  ].map((input, index) => [...input, results[index]]);

  test.each(inputs)('다리 길이 예외', (input, result) => {
    expect(Validate.bridgeSize(input)).toEqual(result);
  });
});

describe('방향 입력 테스트', () => {
  const results = [false, true, true, false, false];
  const inputs = [['123'], ['D'], ['U'], ['w'], ['d']].map((input, index) => [
    ...input,
    results[index],
  ]);

  test.each(inputs)('방향 입력 예외', (input, result) => {
    expect(Validate.moveInput(input)).toEqual(result);
  });
});

describe('재시작 입력 테스트', () => {
  const results = [false, true, true, false, false];
  const inputs = [['u'], ['Q'], ['R'], ['d'], ['321']].map((input, index) => [
    ...input,
    results[index],
  ]);

  test.each(inputs)('재시작 입력 예외', (input, result) => {
    expect(Validate.gameCommand(input)).toEqual(result);
  });
});
