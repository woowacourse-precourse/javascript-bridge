const { print } = require('./utils/ui');
const { PRINT_MESSAGE } = require('./constants');
const { MOVE, MOVE_RESULT } = require('./constants');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printGameStart() {
    print(PRINT_MESSAGE.GAME_START);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridgeGame) {
    const bridge = bridgeGame.getBridge();
    const selection = bridgeGame.getSelection();
    print(this.printRowMap(bridge, selection, MOVE.DIRECTION_UP));
    print(this.printRowMap(bridge, selection, MOVE.DIRECTION_DOWN));
  },

  printRowMap(bridge, selection, upDown) {
    const selectionComponents = selection.getComponents();
    const mapResult = this.getMapResult(bridge, selectionComponents, upDown);
    if (
      mapResult.includes(MOVE_RESULT.UNAVAILABLE) ||
      bridge.componentsLength() <= selection.componentsLength()
    )
      selection.setState(false);
    return MOVE_RESULT.START + mapResult + MOVE_RESULT.END;
  },

  getMapResult(bridge, selectionComponents, upDown) {
    let mapResult = '';
    selectionComponents.forEach((selectionComponent, index) => {
      const bridgeComponent = bridge.getComponent(index);
      if (index > 0) mapResult += MOVE_RESULT.SECTION;
      mapResult += this.setRowMap(bridgeComponent, selectionComponent, upDown);
    });
    return mapResult;
  },

  setRowMap(bridgeComponent, selectionComponent, upDown) {
    if (upDown !== selectionComponent) {
      return MOVE_RESULT.EMPTY;
    }
    if (selectionComponent === bridgeComponent) return MOVE_RESULT.AVAILABLE;
    return MOVE_RESULT.UNAVAILABLE;
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},
};

module.exports = OutputView;
