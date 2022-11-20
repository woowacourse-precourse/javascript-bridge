const bridgeGame = require("../src/model/BridgeGame");


describe('게임 테스트', () => {
  
  test.each([
    [["U"], "U", [['O'], [' '], 1]],
    [["U", "U"], "D", [['O', '|', ' '], [' ','|', 'X'], 2]],
    [["U", "U", "D"], "D", [['O', '|', ' ', '|', ' '], [' ','|', 'X','|','O'], 3]],
    [["U", "U", "D", "D"], "U", [['O', '|', ' ', '|', ' ', '|','X'], [' ','|', 'X','|','O','|',' '], 4]],
  ])("Game Move Test", (answer, input, expected) => {
    expect(bridgeGame.move(answer, input)).toEqual(expected);
  });

})