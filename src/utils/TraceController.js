const { UP_AND_DOWN, TRACE_MARKS } = require("../constants");
const OutputView = require("../OutputView");

const TraceController = {
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

  printTrace(trace) {
    const converted = trace.map(
      (el) =>
        TRACE_MARKS.START + el.join(TRACE_MARKS.SEPARATOR) + TRACE_MARKS.END
    );
    OutputView.printMap(converted);
  },

  makeCorrectionMark(log, selectedPath, bridge) {
    const index = log.length - 1;
    return selectedPath === bridge[index]
      ? TRACE_MARKS.CORRECT
      : TRACE_MARKS.INCORRECT;
  },
};

module.exports = TraceController;
