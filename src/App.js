const BridgeGame = require("./BridgeGame.js");
const OutputView = require("./OutputView.js");
const InputView = require("./InputView");
class App {
  async play() {
    OutputView.printStart();
    InputView.readBridgeSize((size) => {
      this.game = new BridgeGame(size);
      this.move();
    });
  }

  async move() {
    InputView.readMoving((command) => {
      this.game.move(command);
      OutputView.printMap(this.game);
      if(this.game.progress === this.game.bridgeSize && !this.game.gameOver) OutputView.printResult(this.game);
      else if(this.game.gameOver) this.retry();
      else this.move();
    });
  }

  async retry(){
    InputView.readGameCommand((command)=>{
      if(command==="R"){
        this.game.retry();
        this.move();
      }
      OutputView.printResult(this.game);
    })
  } 
}

const app = new App();
app.play();
module.exports = App;
