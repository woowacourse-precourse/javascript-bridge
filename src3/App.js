const PairController = require('./Controller/PairController');

class App {
  play() {
    const pairController = new PairController();
    pairController.init();
  }
}

const app = new App();
app.play();
