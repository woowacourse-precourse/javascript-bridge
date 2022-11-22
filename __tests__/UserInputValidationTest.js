const { runException, mockRandoms } = require('./ApplicationTest');

describe('다리 사이즈 유효성 테스트', () => {
  test('3 이하의 숫자를 입력했을 때 오류가 발생한다.', () => {
    runException(['1'], ['[ERROR] 3부터 20 사이의 숫자를 입력해주세요.']);
  });
  test('20 이상의 숫자를 입력했을 때 오류가 발생한다.', () => {
    runException(['21'], ['[ERROR] 3부터 20 사이의 숫자를 입력해주세요.']);
  });
});

describe('움직이는 방향 유효성 테스트', () => {
  test('숫자를 입력하면 오류가 발생한다.', () => {
    runException(['4', '1'], ['[ERROR] U 또는 D를 입력해주세요.']);
  });
  test('소문자 u를 입력하면 오류가 발생한다.', () => {
    runException(['4', 'u'], ['[ERROR] U 또는 D를 입력해주세요.']);
  });
  test('소문자 d를 입력하면 오류가 발생한다.', () => {
    runException(['4', 'd'], ['[ERROR] U 또는 D를 입력해주세요.']);
  });
});

describe('재시작/종료 유효성 테스트', () => {
  test('숫자를 입력하면 오류가 발생한다.', () => {
    mockRandoms(['1', '0', '1']);
    runException(['3', 'D', '1'], ['[ERROR] Q 또는 R을 입력해주세요.']);
  });
  test('소문자 q를 입력하면 오류가 발생한다.', () => {
    runException(['3', 'D', 'q'], ['[ERROR] Q 또는 R을 입력해주세요.']);
  });
  test('소문자 r를 입력하면 오류가 발생한다.', () => {
    runException(['3', 'D', 'r'], ['[ERROR] Q 또는 R을 입력해주세요.']);
  });
});