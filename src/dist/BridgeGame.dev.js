"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
var BridgeGame =
/*#__PURE__*/
function () {
  function BridgeGame() {
    _classCallCheck(this, BridgeGame);
  }

  _createClass(BridgeGame, [{
    key: "move",

    /**
     * 사용자가 칸을 이동할 때 사용하는 메서드
     * <p>
     * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
     */
    value: function move(info, direction) {
      info.inputList.push(direction === 'U' ? 1 : 0);
      if (info.inputList[info.currentPosition] == info.bridgeInfo[info.currentPosition]) return 1;
      return 0;
    }
    /**
     * 사용자가 게임을 다시 시도할 때 사용하는 메서드
     * <p>
     * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
     */

  }, {
    key: "retry",
    value: function retry() {}
  }]);

  return BridgeGame;
}();

module.exports = BridgeGame;