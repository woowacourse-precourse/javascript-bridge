const OutputView = require('../src/view/OutputView');

describe('출력 테스트', () => {
  
  test('중간 출력 체크', () => {
    const input = ['U', 'U']
    expect(OutputView.printMap(input[0], input[1])).toEqual([["O"], [" "], 1]);
  });

  test('중간 출력 체크 - 2회차', () => {
    const input = ['U', 'D']
    expect(OutputView.printMap(input[0], input[1])).toEqual([["O", "|", " "], [" ", "|", "X"], 2]);
  });

})