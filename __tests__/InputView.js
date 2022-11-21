const InputView = require('../src/InputView');

describe('InputView 클래스 테스트', () => {
  test('다리 길이 입력에 예외가 발생하지 않으면 숫자로 반환', () => {
    expect(InputView.parseBridgeSize('3')).toBe(3);
  });

  test('다리 길이 입력에 공백(스페이스)이 있으면 예외 발생', () => {
    expect(() => InputView.parseBridgeSize(' ')).toThrow('[ERROR]');
  });

  test('다리 길이 입력이 3 이상 20 이하의 숫자가 아니면 예외 발생', () => {
    expect(() => InputView.parseBridgeSize('2')).toThrow('[ERROR]');
  });

  test('다리 길이 입력이 3 이상 20 이하의 숫자가 아니면 예외 발생', () => {
    expect(() => InputView.parseBridgeSize('21')).toThrow('[ERROR]');
  });

  test("이동할 칸 입력은 'U' 가능", () => {
    expect(() => InputView.validateMove('U')).not.toThrow('[ERROR]');
  });

  test("이동할 칸 입력이 'u'면 예외 발생", () => {
    expect(() => InputView.validateMove('u')).toThrow('[ERROR]');
  });

  test("이동할 칸 입력은 'D' 가능", () => {
    expect(() => InputView.validateMove('D')).not.toThrow('[ERROR]');
  });

  test("이동할 칸 입력이 'd'면 예외 발생", () => {
    expect(() => InputView.validateMove('d')).toThrow('[ERROR]');
  });

  test('이동할 칸 입력에 공백(스페이스)이 있으면 예외 발생', () => {
    expect(() => InputView.validateMove(' ')).toThrow('[ERROR]');
  });

  test("이동할 칸 입력이 'U', 'D'가 아니면 예외 발생", () => {
    expect(() => InputView.validateMove('K')).toThrow('[ERROR]');
  });

  test('이동할 칸 입력이 숫자면 예외 발생', () => {
    expect(() => InputView.validateMove('1')).toThrow('[ERROR]');
  });

  test("게임 진행 여부 입력은 'R' 가능", () => {
    expect(() => InputView.validateCommand('R')).not.toThrow('[ERROR]');
  });

  test("게임 진행 여부 입력이 'r'면 예외 발생", () => {
    expect(() => InputView.validateCommand('r')).toThrow('[ERROR]');
  });

  test("게임 진행 여부 입력은 'Q' 가능", () => {
    expect(() => InputView.validateCommand('Q')).not.toThrow('[ERROR]');
  });

  test("게임 진행 여부 입력이 'q'면 예외 발생", () => {
    expect(() => InputView.validateCommand('q')).toThrow('[ERROR]');
  });

  test('게임 진행 여부 입력에 공백(스페이스)이 있으면 예외 발생', () => {
    expect(() => InputView.validateCommand(' ')).toThrow('[ERROR]');
  });

  test("게임 진행 여부 입력이 'R', 'Q'가 아니면 예외 발생", () => {
    expect(() => InputView.validateCommand('U')).toThrow('[ERROR]');
  });

  test('게임 진행 여부 입력이 숫자면 예외 발생', () => {
    expect(() => InputView.validateCommand('1')).toThrow('[ERROR]');
  });
});
