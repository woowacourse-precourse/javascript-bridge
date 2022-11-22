const Manager = require("./Manager");
class App {
  #Manager;

  constructor() {
    this.#Manager = new Manager();
  }
  play() {
    this.#Manager.start();
  }
}
const app = new App();
app.play();

module.exports = App;
