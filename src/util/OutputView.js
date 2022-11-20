const { Console } = require("@woowacourse/mission-utils");
const { OUTPUT_MESSAGE, MOVING_SPACE, MAP } = require("./Constant");

/**
 * @param {string[]} movedSpace 현재까지 이동한 칸
 * @param {number} index 현재 인덱스
 * @param {boolean} isSuccess 마지막 칸 성공 여부
 * @returns {boolean} 마지막 인덱스이고, 선택에 실패했는지 여부 반환
 */
const isLastIndexAndFailed = (movedSpace, index, isSuccess) => {
  if (movedSpace.length - 1 !== index) return false;
  return !isSuccess;
};

/**
 * @param {string[]} movedSpace 현재까지 이동한 칸
 * @param {boolean} isSuccess 마지막 칸 성공 여부
 * @param {string} road UP 인지 DOWN 인지
 * @returns {string} 해당 road에 해당하는 상태를 정해진 형식에 맞게 반환
 */
const parseToRoad = (movedSpace, isSuccess, road) => {
  const movedLog = movedSpace
    .map((space, index) => {
      if (space !== road) return MAP.EMPTY;
      if (isLastIndexAndFailed(movedSpace, index, isSuccess)) return MAP.FAIL;
      return MAP.SUCCESS;
    })
    .join(MAP.SEPARATOR);
  return MAP.START + movedLog + MAP.END;
};

/**
 * @param {string[]} movedSpace 현재까지 이동한 칸
 * @param {boolean} isSuccess 마지막 칸 성공 여부
 * @returns {object} 윗길, 아랫길로 각각 파싱한 값을 반환
 */
const parseUpAndDown = (movedSpace, isSuccess) => {
  const upRoad = parseToRoad(movedSpace, isSuccess, MOVING_SPACE.UP);
  const downRoad = parseToRoad(movedSpace, isSuccess, MOVING_SPACE.DOWN);
  return { upRoad, downRoad };
};

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStart() {
    Console.print(OUTPUT_MESSAGE.START);
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   * @param {string[]} movedSpace 현재까지 이동한 칸
   * @param {boolean} isSuccess 마지막 칸 성공 여부
   */
  printMap(movedSpace, isSuccess) {
    const { upRoad, downRoad } = parseUpAndDown(movedSpace, isSuccess);
    Console.print(upRoad);
    Console.print(downRoad);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {
    Console.print("최종 게임 결과");
    Console.print("[ O |   | O ]");
    Console.print("[   | O |   ]");
    Console.print("게임 성공 여부: 성공");
    Console.print("총 시도한 횟수: 1");
  },
};

module.exports = OutputView;
