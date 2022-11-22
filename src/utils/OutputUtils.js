const { BRIDGE_MESSAGE, GAME_MESSAGE } = require('../constants');
const BridgeMap = require('../models/map/BridgeMap');

const OutputUtils = {
  /**
   * 다리 지도 메세지로 변환할 때 사용하는 메서드
   * @param {boolean | null} square 다리 지도 배열의 요소
   * @returns {'O' | 'X' | ' '}
   */
  convertToMapMessage(square) {
    if (square === true) return BRIDGE_MESSAGE.CROSSABLE;
    if (square === false) return BRIDGE_MESSAGE.UNCROSSABLE;

    return BRIDGE_MESSAGE.NOT_SELECTED;
  },

  /**
   * 다리 지도 출력 문자열로 변환할 때 사용하는 메서드
   * @param {BridgeMap.BridgeProcess} bridge
   * @returns {string}
   */
  stringifyBridgeMap(bridge) {
    const convertedBridge = bridge
      .map((square) => OutputUtils.convertToMapMessage(square))
      .join(BRIDGE_MESSAGE.SEPARATOR);
    return BRIDGE_MESSAGE.START + convertedBridge + BRIDGE_MESSAGE.END;
  },

  /**
   * 성공 및 실패 메세지로 변환할 때 사용하는 메서드
   * @param {boolean} isWin
   * @returns {'성공' | '실패'}
   */
  convertToWinMessage(isWin) {
    if (isWin) return GAME_MESSAGE.WIN;

    return GAME_MESSAGE.FAIL;
  },
};

module.exports = OutputUtils;
