const { LETTER, MAP, NEW_LINE } = require("./Constant");

const Convertor = {
  convertToResultArray(bridge, moves) {
    return moves.map((move, ind) => [
      move,
      bridge[ind] === move ? MAP.correct : MAP.wrong,
    ]);
  },

  convertArrayToMap(array) {
    return [LETTER.up, LETTER.down]
      .map(
        (upOrDown) =>
          `[ ${array
            .map(([userUorD, isCorrect]) =>
              userUorD === upOrDown ? isCorrect : MAP.blank
            )
            .join(MAP.divider)} ]`
      )
      .join(NEW_LINE);
  },
};

module.exports = Convertor;
