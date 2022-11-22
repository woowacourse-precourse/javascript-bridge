"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var InputView = require('./InputView');

var OutputView = require('./OutputView');

var BridgeGame = require('./BridgeGame');

var App =
/*#__PURE__*/
function () {
  function App() {
    _classCallCheck(this, App);

    this.currentPosition = 0;
    this.gameCount = 0;
    this.bridgeLength = 0;
    this.bridgeInfo = null;
    this.inputList = [];
    this.bridgeGameManager = new BridgeGame();
  }

  _createClass(App, [{
    key: "play",
    value: function play() {
      OutputView.printStart();
      InputView.readBridgeSize(this);
    }
  }]);

  return App;
}();

new App().play();
module.exports = App;