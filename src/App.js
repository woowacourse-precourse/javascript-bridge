const MissionUtils = require("@woowacourse/mission-utils");
const Player = require("./Player");

class App {
  play() {
    const play = new Player();
    const answer = play.createBridgeAnswer();
    const obj = play.setBridgeGame(answer);
    MissionUtils.Console.print(answer);
    play.repeatMove(answer, obj);
  }
}

module.exports = App;
