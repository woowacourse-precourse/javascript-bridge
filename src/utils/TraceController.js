const { UP_AND_DOWN, TRACE_MARKS } = require("../constants");
const OutputView = require("../OutputView");

/**
 * 사용자가 이동한 길을 관리한다.
 */
const TraceController = {
  /**
   * 사용자가 선택한 방향에 따라 이동해온 길을 반환한다.
   * @param {string} selectedPath - 사용자가 선택한 방향
   * @param {string[]} log - 사용자가 선택한 길의 log
   * @param {string[][]} bridge - 최초 생성된 다리
   * @param {string[][]} current - 사용자가 직전까지 이동한 길
   * @returns {string[][]} trace - 선택한 방향을 포함하여 사용자가 이동한 길
   */
  makeTrace(selectedPath, log, bridge, current) {
    let trace = current.map((el) => el.slice());
    const correctionMark = this.makeCorrectionMark(log, selectedPath, bridge);
    trace = trace.map((el, index) => [
      ...el,
      selectedPath === UP_AND_DOWN[Math.abs(index - 1)]
        ? correctionMark
        : TRACE_MARKS.BLANK,
    ]);
    return trace;
  },

  /**
   * 배열형태의 trace를 문자열로 변환하여 출력한다.
   * @param {string[][]} trace - 사용자가 이동한 길
   */
  convertTrace(trace) {
    const converted = trace.map(
      (el) =>
        TRACE_MARKS.START + el.join(TRACE_MARKS.SEPARATOR) + TRACE_MARKS.END
    );
    OutputView.printMap(converted);
  },

  /**
   * 사용자가 선택한 방향에 대한 결과를 기호로 출력한다.
   * @param {string[]} log - 사용자가 선택한 길의 log
   * @param {string} selectedPath - 사용자가 선택한 방향
   * @param {string[][]} bridge - 최초 생성된 다리
   * @returns {string};
   */
  makeCorrectionMark(log, selectedPath, bridge) {
    const index = log.length - 1;
    return selectedPath === bridge[index]
      ? TRACE_MARKS.CORRECT
      : TRACE_MARKS.INCORRECT;
  },

  /**
   * 사용자가 이동한 길이 실패했는지 여부를 판단한다.
   * @param {string[][]} trace - 사용자가 이동한 길
   * @returns {boolean}
   */
  determineFail(trace) {
    const joined = trace.join();
    return joined.includes(TRACE_MARKS.INCORRECT);
  },

  /**
   * 재도전시 사용자가 마지막에 이동한 길을 삭제한다.
   * @param {string[][]} trace - 사용자가 이동한 길
   * @returns {string[][]}
   */
  resetTrace(trace) {
    return trace.map((el) => el.slice(0, el.length - 1));
  },
};

module.exports = TraceController;
