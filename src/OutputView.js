const { Console } = require("@woowacourse/mission-utils");
const { GAME_STATE } = require("./Constants");

const OutputView = {
  printStartMessage() {
    Console.print("다리 건너기 게임을 시작합니다.\n");
  },

  printMap(bridgeState) {
    const row = {
      U: new Array(bridgeState.length).fill(" "),
      D: new Array(bridgeState.length).fill(" "),
    };
    for (let i = 0; i < bridgeState.length; i++) {
      let state = GAME_STATE.TRUE;
      if (bridgeState[i][1] === GAME_STATE.FAIL) state = GAME_STATE.FALSE;
      row[bridgeState[i][0]][i] = state;
    }
    Console.print("[ " + row["U"].join(" | ") + " ]");
    Console.print("[ " + row["D"].join(" | ") + " ]\n");
  },

  printResult(currentState) {
    Console.print("최종 게임 결과");
    this.printMap(currentState.bridgeState);
    Console.print(`\n게임 성공 여부: ${currentState.gameState}`);
    Console.print(`총 시도한 횟수: ${currentState.attempts}`);
    Console.close();
  },
};

module.exports = OutputView;
