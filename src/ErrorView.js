const MissionUtils = require("@woowacourse/mission-utils");

const ErrorView = {
    /**
     * 다리 길이 오류 메시지 출력
     */
    throwBridgeSizeError() {
        MissionUtils.Console.print("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
    },

    /**
     * 이동 커맨드 오류 메시지 출력
     */
    throwMoveError() {
        MissionUtils.Console.print("[ERROR] 이동은 U나 D 중 하나의 명령어로만 가능합니다.");
    },

    /**
     * 게임 재시작 및 종료 커맨드 오류 메시지 출력
     */
    throwGameCommandError() {
        MissionUtils.Console.print("[ERROR] 명령어는 R이나 Q 중 하나만 가능합니다.");
    }
}

module.exports = ErrorView;