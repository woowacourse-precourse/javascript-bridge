const BridgeMaker = require('../src/BridgeMaker');
const BridgeGame = require('../src/BridgeGame');

describe('1. 다리 생성 테스트', () => {
    test("다리 생성 테스트", () => {
        const randomNumbers = ["1", "0", "0"];
        const mockGenerator = randomNumbers.reduce((acc, number) => {
          return acc.mockReturnValueOnce(number);
        }, jest.fn());
    
        const bridge = BridgeMaker.makeBridge(3, mockGenerator);
        expect(bridge).toEqual(["U", "D", "D"]);
    });
})

describe('2. 이동 테스트', () => {
  test("사용자가 갈 수 없는 길을 선택하면 fail을 반환한다.", () => {
      const bridgeGame = new BridgeGame();
      bridgeGame.setBridge(['U', 'D']);
      const input = ['U', 'U'];
      const result = ['next', 'fail'];
      input.forEach((val, idx) => {
        expect(bridgeGame.move(val)).toEqual(result[idx]);
      })
  });

  test("사용자가 다리를 모두 건너면 success를 반환한다.", () => {
    const bridgeGame = new BridgeGame();
    bridgeGame.setBridge(['U', 'D', 'D']);
    const input = ['U', 'D', 'D'];
    const result = ['next', 'next', 'success'];
    input.forEach((val, idx) => {
      expect(bridgeGame.move(val)).toEqual(result[idx]);
    })
});
})