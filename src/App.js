const BridgeView = require('./view/BridgeView');
const BridgeModel = require('./model/bridge');
const BridgeCtrl = require('./controller/BridgeGame');
const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');

const App = class {
  constructor() {
    this.view = new BridgeView(InputView, OutputView);
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
