/* eslint-disable no-undef */
/* eslint-disable max-lines-per-function */

const BridgeGame = require('../src/model/BridgeGame');

describe('BridgeGame 클래스 테스트', () => {
  test('위 아래 방향으로 인덱스 값 도출하기', () => {
    const directionArr = ['U', 'D'];
    const indexAnswer = [0, 1];
    directionArr.forEach((direction, index) => {
      expect(BridgeGame.getIndexFromDirection(direction)).toEqual(indexAnswer[index]);
    });
  });
});
