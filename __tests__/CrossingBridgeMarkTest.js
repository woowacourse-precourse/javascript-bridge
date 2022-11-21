const CrossingBridgeMark = require('../src/domain/result/CrossingBridgeMark');

describe('CrossingBridgeMark 클래스 테스트', () => {
  test.each([
    [{direction: 'U', isPassed: true}, {up: 'O', down: ' '}],
    [{direction: 'D', isPassed: true}, {up: ' ', down: 'O'}],
    [{direction: 'U', isPassed: false}, {up: 'X', down: ' '}],
    [{direction: 'D', isPassed: false}, {up: ' ', down: 'X'}],
  ])('주어진 값으로 다리 건너기 표식 생성', (props, result) => {
    expect(CrossingBridgeMark.marks(props)).toStrictEqual(result);
  });
});
