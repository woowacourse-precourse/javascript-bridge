const Validator = require('../src/Validator');
const { BRIDGE, MESSAGE } = require('../src/const.js')
const {Console} = require("@woowacourse/mission-utils");



const bridgeLengthArray = [-1, 0, "5", 2, 21, 999];
test.each(bridgeLengthArray)("다리 길이 Validator 테스트", (bridgeLength) => {
    expect(() => Validator.validateBridgeSize(bridgeLength)).toThrow()
})
