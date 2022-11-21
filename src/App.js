const Manager = require("./Manager");

class App {
  play(){
    const manager = new Manager();
  }
}

const app = new App();
app.play();

module.exports = App;