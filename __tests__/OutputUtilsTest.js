const OutputUtils = require('../src/utils/OutputUtils');

describe('출력 유틸 테스트', () => {
  test("해당 칸이 true면 'O'로 변환", () => {
    const result = OutputUtils.convertToMapMessage(true);

    expect(result).toEqual('O');
  });

  test("해당 칸이 false면 'X'로 변환", () => {
    const result = OutputUtils.convertToMapMessage(false);

    expect(result).toEqual('X');
  });

  test('해당 칸이 null이면 공백 한 칸으로 변환', () => {
    const result = OutputUtils.convertToMapMessage(null);

    expect(result).toEqual(' ');
  });

  test('해당 다리를 다리 시작, 끝, 구분자를 포함한 문자열로 변환', () => {
    const bridge = [true, null, false];
    const result = OutputUtils.stringifyBridgeMap(bridge);

    expect(result).toEqual('[ O |   | X ]');
  });

  test("승리 여부 true면 '성공'으로 변환", () => {
    const result = OutputUtils.convertToWinMessage(true);

    expect(result).toEqual('성공');
  });

  test("승리 여부 false면 '실패'로 변환", () => {
    const result = OutputUtils.convertToWinMessage(false);

    expect(result).toEqual('실패');
  });
});
