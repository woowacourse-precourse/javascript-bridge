const OUTPUT_FORM = {
  MAP: (upBridge, downBridge) => `[${upBridge}]\n[${downBridge}]\n`,

  MAP_ELEMENT: { COINCIDE: " O ", WRONG: " X ", NOT_SELECTED: "   " },

  RESULT: {
    HEADER: "최종 게임 결과",
    IS_SUCCESS: (success) => `게임 성공 여부: ${success ? "성공" : "실패"}`,
    TOTAL_TRY: (totalTry) => `총 시도한 횟수: ${totalTry}`,
  },
};

module.exports = { OUTPUT_FORM };
