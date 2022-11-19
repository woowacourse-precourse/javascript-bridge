const Console = require("../utils/Console");
const { OUTPUT, MAP } = require("./stringsUI");

class MapMaker {
  upperBridge;

  lowerBridge;

  constructor(playerMap) {
    this.upperBridge = [];
    this.lowerBridge = [];
    this.createMap(playerMap);
  }

  createMap(playerMap) {
    playerMap.forEach((playerAction, index) => {
      this.divideBridge(index);
      this.createBridgeMap(playerAction);
    });
    this.wrapBridge();
    return this.returnBridge();
  }

  createBridgeMap({ selectedMove, moveResult }) {
    if (selectedMove === MAP.UPPER) {
      this.upperBridge.push(MAP[moveResult]);
      this.lowerBridge.push(MAP.NONE);
    } else {
      this.lowerBridge.push(MAP[moveResult]);
      this.upperBridge.push(MAP.NONE);
    }
  }

  divideBridge(index) {
    if (index > 0) {
      this.upperBridge.push(MAP.DIVIDER);
      this.lowerBridge.push(MAP.DIVIDER);
    }
  }

  wrapBridge() {
    this.upperBridge.unshift(MAP.WRAPPER_LEFT);
    this.upperBridge.push(MAP.WRAPPER_RIGHT);
    this.lowerBridge.unshift(MAP.WRAPPER_LEFT);
    this.lowerBridge.push(MAP.WRAPPER_RIGHT);
  }

  returnBridge() {
    return {
      upperBridge: this.upperBridge,
      lowerBridge: this.lowerBridge,
    };
  }
}

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStart() {
    Console.print(OUTPUT.START);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridgeGamePresenter, playerMap) {
    const { upperBridge, lowerBridge } = new MapMaker(playerMap);
    Console.print(upperBridge.join(" "));
    Console.print(lowerBridge.join(" "));
    bridgeGamePresenter.checkNextMove();
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {
    Console.close();
  },
};

module.exports = OutputView;
