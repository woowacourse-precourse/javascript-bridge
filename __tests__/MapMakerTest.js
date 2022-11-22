const BridgeGame = require('../src/BridgeGame');
const MoveMapMaker = require('../src/MapMaker');
describe('MoveMapMaker 객체 기능 테스트', () => {
  test('makeUserMoveMap()에 O X 검사한 배열을 넘길때 제대로된 map으로 변환되는지 확인', () => {
    const checkedMap = [
      ['U', 'O'],
      ['D', 'O'],
      ['U', 'X'],
    ];
    const result = [
      ['O', ' ', 'X'],
      [' ', 'O', ' '],
    ];
    expect(MoveMapMaker.makeUserMoveMap(checkedMap)).toEqual(result);
  });
  test.failing(
    'makeUserMoveMap()에 O X 검사한 배열을 argument로 넘기고 잘못된 값이 나오면 실패 확인',
    () => {
      const checkedMap = [
        ['U', 'O'],
        ['D', 'O'],
        ['U', 'X'],
      ];
      const result = [
        ['O', ' ', 'O'],
        [' ', 'O', ' '],
      ];
      expect(MoveMapMaker.makeUserMoveMap(checkedMap)).toEqual(result);
    }
  );
  test('mapToString() 메서드가 원하는 모양의 string으로 변환되는지 확인', () => {
    const bridgeGame = new BridgeGame();
    const moveLogs = ['U', 'D', 'U'];
    const bridge = ['U', 'D', 'D'];
    const checkUserMoveLog = bridgeGame.checkUserMoveLogs(moveLogs, bridge);
    const map = MoveMapMaker.makeUserMoveMap(checkUserMoveLog);
    const result = ['[ O |   | X ]', '[   | O |   ]'];
    expect(MoveMapMaker.mapToString(map)).toEqual(result);
  });
  test.failing('mapToString() 메서드가 잘못된 모양으로 변환되어 실패하는지 확인', () => {
    const bridgeGame = new BridgeGame();
    const moveLogs = ['U', 'D', 'U'];
    const bridge = ['U', 'D', 'D'];
    const checkUserMoveLog = bridgeGame.checkUserMoveLogs(moveLogs, bridge);
    const map = MoveMapMaker.makeUserMoveMap(checkUserMoveLog);
    const result = ['[ O |   | X ]', '[   | X |   ]'];
    expect(MoveMapMaker.mapToString(map)).toEqual(result);
  });
});
