const OutputView = require('./OutputView');

class App {
  play() {
    OutputView.printStartAnnouncement();
  }
}
const app = new App();
app.play();
module.exports = App;
