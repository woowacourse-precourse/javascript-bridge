const GAME_RESULT = (result) => { return `게임 성공 여부: ${result}` };
const TOTAL_ATTEMPT = (attemptNumber) => { return `총 시도한 횟수: ${attemptNumber}` };
const BRIDGE_START = '다리 건너기 게임을 시작합니다.';
const SUCCESS_GAME = '게임 성공 여부: 성공'
const FAIL_GAME = '게임 성공 여부: 실패'

module.exports = {
    GAME_RESULT,
    TOTAL_ATTEMPT,
    BRIDGE_START,
    SUCCESS_GAME,
    FAIL_GAME,
}