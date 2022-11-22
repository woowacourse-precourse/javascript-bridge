const { WORD, SINGLE_MAP } = require("../Constants/Token");
const Check = require("../Utils/Check");

/**
 * 다리 건너기 게임을 관리하는 클래스 -> InputView, OutputView 사용 불가
 * Visualize 로직
 * 변경 가능 : 파일경로, 필드 추가, 메서드 인자, 메서드
 * 변경 불가 : 메서드 이름
 */

class BridgeGame {
  #state = {
    bridge: null,
    trial: 1,
    isAlive: true,
    currentIndex: 0,
    currentMap: {
      up: [],
      down: [],
    },
  };

  get state() {
    return this.#state;
  }

  setState(nextState) {
    this.#state = { ...this.#state, ...nextState };
  }

  // move(bridge, values, step, result) {
  //   Check.moveFormat(step);
  //   values.stepArray.push(step);

  //   this.compare(bridge, values, result);
  // }
  move(step) {
    const { bridge, currentIndex } = this.state;
    const passed = step === bridge[currentIndex];
    this.proceed(passed);
    this.makeBridgeMap(passed, step);
  }

  proceed(passed) {
    const nextIndex = this.state.currentIndex++;
    const nextStatus = passed ? true : false;

    this.setState({
      currentIndex: nextIndex,
      isAlive: nextStatus,
    });
  }

  makeBridgeMap(passed, step) {
    const answer = passed ? "O_PRINT" : "X_PRINT";
    const [newUp, newDown] = SINGLE_MAP[answer][step];

    this.setState({
      currentMap: {
        up: [...this.state.currentMap.up, newUp],
        down: [...this.state.currentMap.down, newDown],
      },
    });
  }

  retry() {
    this.setState({
      trial: this.state.trial++,
      isAlive: true,
      currentIndex: 0,
      currentMap: { up: [], down: [] },
    });
  }
}

module.exports = BridgeGame;
