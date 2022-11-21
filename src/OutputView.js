/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const Constant = require("./utils/Constant");
const { Console } = require("@woowacourse/mission-utils");
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  upBridge: "[]",
  downBridge: "[]",
  upCount: 0,
  downCount: 0,
  printMap(result, upOrDown, bridgeLength) {
    if (result) {
      let [up, down] = this.printBridge("O", upOrDown, bridgeLength);
      Console.print(up);
      Console.print(down);
    } else {
      let [up, down] = this.printBridge("X", upOrDown, bridgeLength);
      Console.print(up);
      Console.print(down);
    }
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},

  printBridge(value, upOrDown) {
    if (upOrDown === Constant.UP) {
      this.upBridge = this.insertUpOorX(this.upBridge, value, this.upCount);
      this.downBridge = this.insertDownOorX(
        this.downBridge,
        " ",
        this.downCount
      );
      return [this.upBridge, this.downBridge];
    }
    this.upBridge = this.insertUpOorX(this.upBridge, " ", this.upCount);
    this.downBridge = this.insertDownOorX(
      this.downBridge,
      value,
      this.downCount
    );
    return [this.upBridge, this.downBridge];
  },

  insertUpOorX(bridge, passOrFail) {
    this.upCount += 1;
    let closeIndex = bridge.indexOf(Constant.CLOSE);
    if (this.upCount === 1) {
      return `${bridge.slice(0, closeIndex)} ${passOrFail} ${bridge.slice(
        closeIndex
      )}`;
    }

    return `${bridge.slice(0, closeIndex)} ${
      Constant.SEPARATE
    } ${passOrFail} ${bridge.slice(closeIndex)}`;
  },

  insertDownOorX(bridge, passOrFail) {
    this.downCount += 1;
    let closeIndex = bridge.indexOf(Constant.CLOSE);
    if (this.downCount === 1) {
      return `${bridge.slice(0, closeIndex)} ${passOrFail} ${bridge.slice(
        closeIndex
      )}`;
    }
    return `${bridge.slice(0, closeIndex)} ${
      Constant.SEPARATE
    } ${passOrFail} ${bridge.slice(closeIndex)}`;
  },
};

module.exports = OutputView;
