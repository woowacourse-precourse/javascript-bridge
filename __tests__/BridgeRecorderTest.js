const BridgeRecorder = require('../src/model/BridgeRecorder');

describe('다리 기록 테스트', () => {
  test('첫 번째 윗 다리 기록 확인.', () => {
    const bridgeRecords = new BridgeRecorder([], []);

    expect(bridgeRecords.addFirstUpBlock('O')).toEqual([' O ', '   ']);
  });

  test('첫 번째 아래 다리 기록 확인.', () => {
    const bridgeRecords = new BridgeRecorder([], []);

    expect(bridgeRecords.addFirstDownBlock('O')).toEqual(['   ', ' O ']);
  });

  test('첫 번째 이후 윗 다리 기록 확인', () => {
    const bridgeRecords = new BridgeRecorder([], []);

    expect(bridgeRecords.addUpBlock('O')).toEqual(['| O ', '|   ']);
  });

  test('첫 번째 이후 아래 다리 기록 확인', () => {
    const bridgeRecords = new BridgeRecorder([], []);

    expect(bridgeRecords.addDownBlock('O')).toEqual(['|   ', '| O ']);
  });
});
