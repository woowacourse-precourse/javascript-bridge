const Exception = {

  /**
   * 다리 길이가 유효한지 체크
   * @param {string} size 다리의 길이
   */
  checkVaildBridgeSize(size) {
    if (Number(size) < 3 || Number(size) > 20) {
      throw new Error("[ERROR] 다리의 길이는 3부터 20 사이의 숫자여야 합니다.");
    }
  },

    /**
   * 이동할 칸에 대한 입력이 유효한지 체크
   * @param {string} input 위 또는 아래에 대한 입력값
   */
     checkVaildMoveInput(input) {
      if(input === "U" || input === "D"){return ;}
      throw new Error("[ERROR] 'U' 또는 'D' 를 입력하여야 합니다.");
    },

    /**
   * 게임 재시도에 대한 입력이 유효한지 체크
   * @param {string} input 게임을 다시 시도할 지 여부에 대한 입력값
   */
     checkVaildRetryInput(input) {
      if(input === "R" || input === "Q"){return ;}
      throw new Error("[ERROR] 'R' 또는 'Q' 를 입력하여야 합니다.");
    },

  
};

module.exports = Exception;
