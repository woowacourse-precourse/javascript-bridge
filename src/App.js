const BridgeView = require('./view/bridge');
const BridgeModel = require('./model/BridgeModel');
const BridgeCtrl = require('./controller/bridge');
const ConsoleInputView = require('./view/network/ConsoleInputView');
const ConsoleOutputView = require('./view/network/ConsoleOutputView');

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
