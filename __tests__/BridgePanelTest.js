const BridgePanel = require('../src/domain/bridge/BridgePanel');

describe('BridgePanel 클래스 테스트', () => {
  test.each([['U', 'U'], ['D', 'D']])(
    '강화유리의 방향과 플레이어의 방향이 같은 경우',
    (temperedDirection, playerDirection) => {
      const isTempered = new BridgePanel(temperedDirection).checkTempered(playerDirection);
      expect(isTempered).toEqual(true);
    },
  );

  test.each([['U', 'D'], ['D', 'U']])(
    '강화유리의 방향과 플레이어의 방향이 다른 경우',
    (temperedDirection, playerDirection) => {
      const isTempered = new BridgePanel(temperedDirection).checkTempered(playerDirection);
      expect(isTempered).toEqual(false);
    },
  );

  test.each([['U', 'R'], ['R', 'U'], ['U', 'd']])(
    '존재하지 않는 다리의 방향이 인수로 들어오는 경우',
    (temperedDirection, playerDirection) => {
      expect(() => {
        new BridgePanel(temperedDirection).checkTempered(playerDirection);
      }).toThrow('[ERROR]');
    },
  );
});
