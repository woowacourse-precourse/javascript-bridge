const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator.js");
class App {
  play() {
    console.log(BridgeRandomNumberGenerator.generate());
  }
}

const app = new App();
app.play();
module.exports = App;
