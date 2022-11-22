class BridgeGame {
  choices = [];
  resultUp = ["[ ", " ]"];
  resultDown = ["[ ", " ]"];
  retry = 0;

  move(choice) {
    this.choices.push(choice);
  }

  checkResult(choices, bridge) {
    if (choices[0] === "U" && bridge[0] === choices[0]) {
      this.resultUp.splice(1, 0, "O");
      this.resultDown.splice(1, 0, " ");
    } else if (choices[0] === "D" && bridge[0] === choices[0]) {
      this.resultUp.splice(1, 0, " ");
      this.resultDown.splice(1, 0, "O");
    } else if (choices[0] === "U" && bridge[0] !== choices[0]) {
      this.resultUp.splice(1, 0, "X");
      this.resultDown.splice(1, 0, " ");
    } else if (choices[0] === "D" && bridge[0] !== choices[0]) {
      this.resultUp.splice(1, 0, " ");
      this.resultDown.splice(1, 0, "X");
    }

    for (let i = 1; i < choices.length; i++) {
      if (choices[i] === "U" && bridge[i] === choices[i]) {
        this.resultUp.splice(1 + i, 0, " | O");
        this.resultDown.splice(1 + i, 0, " |  ");
      } else if (choices[i] === "D" && bridge[i] === choices[i]) {
        this.resultUp.splice(1 + i, 0, " |  ");
        this.resultDown.splice(1 + i, 0, " | O");
      } else if (choices[i] === "U" && bridge[i] !== choices[i]) {
        this.resultUp.splice(1 + i, 0, " | X");
        this.resultDown.splice(1 + i, 0, " |  ");
      } else if (choices[i] === "D" && bridge[i] !== choices[i]) {
        this.resultUp.splice(1 + i, 0, " |  ");
        this.resultDown.splice(1 + i, 0, " | X");
      }
    }
  }

  retry() {}
}

module.exports = BridgeGame;
