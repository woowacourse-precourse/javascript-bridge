const { SINGLE_MAP, WORD } = require("../Constants/Token");

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

  move(step) {
    const { bridge, currentIndex } = this.state;
    const passed = step === bridge[currentIndex];
    this.proceed(passed);
    this.makeBridgeMap(passed, step);
  }

  proceed(passed) {
    const nextIndex = (this.state.currentIndex += 1);
    const nextStatus = passed ? true : false;

    this.setState({
      currentIndex: nextIndex,
      isAlive: nextStatus,
    });
  }

  makeBridgeMap(passed, step) {
    const answer = passed ? WORD.O_PRINT : WORD.X_PRINT;
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
      trial: (this.state.trial += 1),
      isAlive: true,
      currentIndex: 0,
      currentMap: { up: [], down: [] },
    });
  }
}

module.exports = BridgeGame;
