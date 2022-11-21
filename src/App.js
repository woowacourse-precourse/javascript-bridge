const Manager = require("./Manager");

class App {
  play(){
    new Manager();
  }
}

const app = new App();
app.play();

module.exports = App;