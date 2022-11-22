const MissionUtils = require('@woowacourse/mission-utils');

class Exception {
    exceptBridgeLength(bridgeLength) {
        const NUM_REG = /[^0-9]/g;
        if (('' + bridgeLength).match(NUM_REG) != null) {
            MissionUtils.Console.print('[ERROR] 다리 길이는 정수 값이어야 합니다.');
            throw new Error('[ERROR] 다리 길이는 정수 값이어야 합니다.')
        }
        if (bridgeLength < 3 || 20 < bridgeLength) {
            MissionUtils.Console.print('[ERROR] 다리 길이는 3부터 20 사이의 값이여야 합니다.');

            throw new Error('[ERROR] 다리 길이는 3부터 20 사이의 값이여야 합니다.')
        }
    }

    exceptMovingUpDown(movingUpDown) {
        if (movingUpDown !== 'U' && movingUpDown !== 'D') {

            MissionUtils.Console.print('[ERROR] 입력값에는 대문자 U와 대문자 D만 들어갈 수 있습니다.');
            throw new Error('[ERROR] 입력값에는 대문자 U와 대문자 D만 들어갈 수 있습니다.')
        }
    }

    exceptRetryQuit(retryQuit) {
        if (retryQuit !== 'R' && retryQuit !== 'Q') {
            MissionUtils.Console.print('[ERROR] 입력값에는 대문자 R와 대문자 Q만 들어갈 수 있습니다.');
            throw new Error('[ERROR] 입력값에는 대문자 R와 대문자 Q만 들어갈 수 있습니다.')
        }
    }
};

module.exports = Exception;  