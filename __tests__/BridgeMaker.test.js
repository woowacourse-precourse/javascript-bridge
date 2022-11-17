const BridgeMaker = require('../src/BridgeMaker');

describe('다리의 길이를 입력 받아서 다리를 생성해주는 함수 테스트', () => {
  test('메소드 이름은 "makeBridge"로 정의된다.', () => {
    const METHOD_NAME = 'makeBridge';

    expect(BridgeMaker.makeBridge.name).toEqual(METHOD_NAME);
  });
});
