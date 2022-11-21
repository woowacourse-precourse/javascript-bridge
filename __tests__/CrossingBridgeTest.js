const CrossingBridge = require('../src/domain/result/CrossingBridge');

describe('CrossingBridge 클래스 테스트', () => {
  test('주어진 값으로 다리 건너기 표식 생성', () => {
    const crossingBridge = new CrossingBridge();

    expect(crossingBridge.size()).toEqual(0);

    crossingBridge.add({direction: 'U', isPassed: true});
    expect(crossingBridge.size()).toEqual(1);
    expect(crossingBridge.print()).toEqual(`[ O ]\n[   ]`);

    crossingBridge.add({direction: 'U', isPassed: true});
    expect(crossingBridge.size()).toEqual(2);
    expect(crossingBridge.print()).toEqual(`[ O | O ]\n[   |   ]`);

    crossingBridge.add({direction: 'D', isPassed: true});
    expect(crossingBridge.size()).toEqual(3);
    expect(crossingBridge.print()).toEqual(`[ O | O |   ]\n[   |   | O ]`);

    crossingBridge.add({direction: 'U', isPassed: true});
    expect(crossingBridge.size()).toEqual(4);
    expect(crossingBridge.print()).toEqual(`[ O | O |   | O ]\n[   |   | O |   ]`);
    
    crossingBridge.add({direction: 'U', isPassed: false});
    expect(crossingBridge.size()).toEqual(5);
    expect(crossingBridge.print()).toEqual(`[ O | O |   | O | X ]\n[   |   | O |   |   ]`);
  });
});
