const OutputView = require('../src/view/OutputView');

describe('Ouput View 테스트', () => {
  test('다리 한 줄을 조건에 따라 생성', () => {
    const selections = [true, false, true, true, false];
    const movesPossible = [true, true, true, true, true];
    expect(OutputView.makeOneLinefBridgeView(selections, movesPossible)).toBe(
      '[ O |   | O | O |   ]'
    );

    const selections2 = [false, false, true, true, true];
    const movesPossible2 = [true, true, true, true, false];
    expect(OutputView.makeOneLinefBridgeView(selections2, movesPossible2)).toBe(
      '[   |   | O | O | X ]'
    );
  });

  test('조건에 따라 다리 생성', () => {
    const moveStatus = ['U', 'U', 'D', 'D', 'U'];
    const movesPossible = [true, true, true, true, true];
    expect(OutputView.makeBridgeView(moveStatus, movesPossible)).toBe(
      '[ O | O |   |   | O ]\n[   |   | O | O |   ]'
    );

    const moveStatus2 = ['D', 'U', 'D', 'D', 'U'];
    const movesPossible2 = [true, true, true, true, false];
    expect(OutputView.makeBridgeView(moveStatus2, movesPossible2)).toBe(
      '[   | O |   |   | X ]\n[ O |   | O | O |   ]'
    );
  });
});
