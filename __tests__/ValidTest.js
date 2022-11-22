const errorCheck = require('../src/utils/Validation');

describe("예외 throw 테스트", () => {
  test.each([['five'], [1], [21], [0], [-1000]])("다리 길이가 3 ~ 20 사이의 수가 아닌 경우", (input) => {
    expect((input) => {
      errorCheck.checkBridgeSize(input);
    }).toThrow("[ERROR]");
  });

  test.each([[1], ['R'], [' ']])("이동 시 U나 D가 아닌 다른 문자를 입력한 경우" , (input) => {
    expect((input) => {
      errorCheck.checkCanMove(input);
    }).toThrow("[ERROR]")
  })

  test.each([[1], ['D'], [' ']])("재시작/종료 시 R나 Q가 아닌 다른 문자를 입력한 경우" , (input) => {
    expect((input) => {
      errorCheck.checkCanMove(input);
    }).toThrow("[ERROR]")
  })
});


describe("기타 게임 valid 테스트", () => {
  test.each([
    [3, ['U','D','U'], true], 
    [2, ['U','D','U'], false]])("시행 횟수가 다 끝났는지 확인", (cnt_move, answer, expected) => {
    expect(errorCheck.isMovedDone(cnt_move , answer)).toEqual(expected);
  })

  test.each([
    [3, [['O', '|','O','|','X'], [' ', '|', ' ','|',' ']], ['U','D','U'], true], 
    [3,  [['O', '|','O','|','O'], [' ', '|', ' ','|',' ']],['U','D','U'], false],
    [3,  [['O', '|','X'], [' ', '|', ' ']],['U','D','U'], true],
  ])("재시작 여부 확인", (cnt_move, gameLog, answer, expected) => {
    expect(errorCheck.isRestartRequired(cnt_move ,gameLog, answer)).toEqual(expected);
  })

  test.each([
    [3, [['O', '|','O','|','X'], [' ', '|', ' ','|',' ']], ['U','D','U'], false], 
    [3,  [['O', '|','O','|','O'], [' ', '|', ' ','|',' ']],['U','D','U'], true],
  ])("게임 성공 테스트", (cnt_move, gameLog, answer, expected) => {
    expect(errorCheck.isSuccess(cnt_move ,gameLog, answer)).toEqual(expected);
  })
})