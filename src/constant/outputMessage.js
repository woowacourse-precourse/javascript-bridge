const GAME_RESULT = (result) => { return `게임 성공 여부: ${result}` };
const TOTAL_ATTEMPT = (attemptNumber) => { return `총 시도한 횟수: ${attemptNumber}` };
const BRIDGE_START = '다리 건너기 게임을 시작합니다.';
const RESULT_MESSAGE = '최종 게임 결과';
const SUCCESS_MESSAGE = '성공';
const FAIL_MESSAGE = '실패';

module.exports = {
    GAME_RESULT,
    TOTAL_ATTEMPT,
    BRIDGE_START,
    RESULT_MESSAGE,
    SUCCESS_MESSAGE,
    FAIL_MESSAGE
}