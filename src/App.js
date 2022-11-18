const { Console } = require("@woowacourse/mission-utils");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator.js");
const BridgeMaker = require("./BridgeMaker.js");
class App {
  #length;
  #bridge;
  #tryCount;
  #currentPosition;
  #inputHistory;
  constructor() {
    this.#length = 0;
    this.#bridge = [];
    this.#tryCount = 1;
    this.#currentPosition = 0;
    this.#inputHistory = [];
  }
  play() {
    Console.print("다리 건너기 게임을 시작합니다.\n");

    Console.readLine("다리의 길이를 입력해주세요.\n", (input) => {
      this.#length = Number(input);
      this.#bridge = BridgeMaker.makeBridge(
        this.#length,
        BridgeRandomNumberGenerator.generate,
      );
      this.move();
    });
  }

  move() {
    Console.readLine("이동할 칸을 선택해주세요. (위:U, 아래:D)\n", (input) => {
      // 값 검증
      this.#currentPosition += 1;
      this.#inputHistory.push(input);
      this.printUpBridge();
      this.printDownBridge();
      if (input !== this.#bridge[this.#currentPosition - 1]) {
        this.retry();
        return;
      }
      if (this.#currentPosition === this.#length) {
        this.end();
        return;
      }

      this.move();
    });
  }

  retry() {
    Console.readLine(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
      (input) => {
        // 값 검증
        if (input === "Q") this.end();
        else if (input === "R") {
          this.#currentPosition = 0;
          this.#tryCount += 1;
          this.#inputHistory = [];
          this.move();
        }
      },
    );
  }

  end() {
    Console.print("최종 게임 결과");
    this.printUpBridge();
    this.printDownBridge();
    this.result();
  }

  result() {
    Console.print(
      `\n게임 성공 여부: ${
        this.#length === this.#currentPosition ? "성공" : "실패"
      }\n총 시도한 횟수: ${this.#tryCount}`,
    );

    Console.close();
  }

  printUpBridge() {
    // 입력받은 값을 기준으로 보자 입력받은 값을
    Console.print(
      `[${this.#inputHistory.reduce((acc, cur, idx) => {
        if (cur === "D") return (acc += idx === 0 ? "   " : "|   ");
        if (cur !== this.#bridge[idx])
          return (acc += idx === 0 ? " X " : "| X ");
        return (acc += idx === 0 ? " O " : "| O ");
      }, "")}]`,
    );
  }
  printDownBridge() {
    Console.print(
      `[${this.#inputHistory.reduce((acc, cur, idx) => {
        if (cur === "U") return (acc += idx === 0 ? "   " : "|   ");
        if (cur !== this.#bridge[idx])
          return (acc += idx === 0 ? " X " : "| X ");
        return (acc += idx === 0 ? " O " : "| O ");
      }, "")}]`,
    );
  }
}

new App().play();

module.exports = App;
