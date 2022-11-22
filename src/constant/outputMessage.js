const GAME_RESULT = (result) => { return `게임 성공 여부: ${result}\n` };
const TOTAL_ATTEMPT = (attemptNumber) => { return `총 시도한 횟수: ${attemptNumber}\n` };
const BRIDGE_START = '다리 건너기 게임을 시작합니다.\n';
const RESULT_MESSAGE = '최종 게임 결과\n';
const SUCCESS_MESSAGE = '성공\n';
const FAIL_MESSAGE = '실패\n';

module.exports = {
    GAME_RESULT,
    TOTAL_ATTEMPT,
    BRIDGE_START,
    RESULT_MESSAGE,
    SUCCESS_MESSAGE,
    FAIL_MESSAGE
}