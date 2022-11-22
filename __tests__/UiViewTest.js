const UiView = require('../src/views/UiView');

describe('UiView 테스트', () => {
  test('다리 모양 출력 테스트', () => {
    const counters = [
      ['O', ' ', ' '],
      [' ', 'O', 'X'],
      [' ', 'O', ' '],
    ];
    const results = ['[ O |   |   ]', '[   | O | X ]', '[   | O |   ]'];

    counters.forEach((counter, idx) => {
      expect(UiView.setBrigeUi(counter)).toEqual(results[idx]);
    });
  });
});
