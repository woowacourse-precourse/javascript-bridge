const BridgeView = require('./view/BridgeView');
const BridgeModel = require('./model/BridgeModel');
const BridgeCtrl = require('./controller/bridge');
const ConsoleInputView = require('./view/console/ConsoleInputView');
const ConsoleOutputView = require('./view/console/ConsoleOutputView');

const App = class {
  constructor() {
    this.view = new BridgeView(new ConsoleInputView(), new ConsoleOutputView());
    this.model = new BridgeModel();
    this.ctrl = new BridgeCtrl(this.view, this.model);
  }

  play() {
    this.ctrl.start();
  }
};

const app = new App();
app.play();

module.exports = App;
