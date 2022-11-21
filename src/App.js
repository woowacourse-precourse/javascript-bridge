const MissionUtils = require("@woowacourse/mission-utils");
const Player = require("./Player");

class App {
  play() {
    const play = new Player();
    const answer = play.createBridgeAnswer();
    MissionUtils.Console.print(answer);
    play.repeatMove(answer);
  }
}

module.exports = App;
