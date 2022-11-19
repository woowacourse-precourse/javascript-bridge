const { checkBridgeSize, checkMoves, checkGameCommand } = require("../src/model/InputChecker");

//기능 동작 테스트
//이동이 제대로 되는가? -> O/X
//재시작 횟수를 제대로 세는가?
//게임이 제대로 종료되는가? -> 다 건너서 종료, 도중에 종료
describe("기능 동작 테스트", () => {});

describe("입력 예외 테스트", () => {
  const CASES_FOR_BRIDGE_SIZE = {
    NOT_NUMBER: [["a"], ["A"], ["asd"], ["가"], ["가나"], ["1$2"], ["$#%@"], [" "]],
    NOT_NATURAL_NUMBER: [["1.1"], ["-1"], ["1e9"], ["1.0"], ["0"]],
    OVER_RANGE: [["1"], ["2"], ["21"], ["22"], ["30"]],
    INPUT_LENGTH: [["asd"], ["123"], ["가나다"], ["abcdefg"], ["!@#"]],
  };

  const CASES_FOR_MOVES_AND_COMMND = {
    NOT_ALPHABET: [["1.1"], ["123"], ["가나다"], ["@!#$"], ["a@b"], [" "], ["!AB"], ["가a#b"], ["-11"]],
    DIFFERENT_ALPHABET: [["Z"], ["z"], ["T"], ["t"], ["A"], ["a"]],
    LOWER_CASE_MOVES: [["u"], ["d"]],
    LOWER_CASE_COMMAND: [["q"], ["r"]],
    INPUT_LENGTH: [["UU"], ["DD"], ["UUU"], ["DDD"], ["ASDF"], ["asdf"], ["uuu"], ["ddd"], ["uu"], ["dd"]],
  };

  describe("다리 길이", () => {
    test.each(CASES_FOR_BRIDGE_SIZE.NOT_NUMBER)("숫자 이외의 문자일 경우 예외가 발생한다.", (input) => {
      expect(() => {
        checkBridgeSize(input);
      }).toThrow("[ERROR]");
    });

    test.each(CASES_FOR_BRIDGE_SIZE.NOT_NATURAL_NUMBER)("숫자이지만 자연수가 아닌 경우 예외가 발생한다.", (input) => {
      expect(() => {
        checkBridgeSize(input);
      }).toThrow("[ERROR]");
    });

    test.each(CASES_FOR_BRIDGE_SIZE.OVER_RANGE)("자연수지만 범위를 벗어난 경우 예외가 발생한다.", (input) => {
      expect(() => {
        checkBridgeSize(input);
      }).toThrow("[ERROR]");
    });

    test.each(CASES_FOR_BRIDGE_SIZE.INPUT_LENGTH)("입력 길이가 1 또는 2가 아닌 경우 예외가 발생한다.", (input) => {
      expect(() => {
        checkBridgeSize(input);
      }).toThrow("[ERROR]");
    });

    test("아무것도 입력하지 않은 경우 예외가 발생한다.", () => {
      expect(() => {
        checkBridgeSize("");
      }).toThrow("[ERROR]");
    });
  });

  describe("이동/재시작/종료", () => {
    test.each(CASES_FOR_MOVES_AND_COMMND.NOT_ALPHABET)("알파벳 이외의 문자일 경우 예외가 발생한다.", (input) => {
      expect(() => {
        checkMoves(input);
      }).toThrow("[ERROR]");
      expect(() => {
        checkGameCommand(input);
      }).toThrow("[ERROR]");
    });

    test.each(CASES_FOR_MOVES_AND_COMMND.DIFFERENT_ALPHABET)(
      "'U'와 'D', 'Q'와 'R' 이외의 알파벳인 경우 예외가 발생한다.",
      (input) => {
        expect(() => {
          checkMoves(input);
        }).toThrow("[ERROR]");
        expect(() => {
          checkGameCommand(input);
        }).toThrow("[ERROR]");
      }
    );

    test.each(CASES_FOR_MOVES_AND_COMMND.LOWER_CASE_MOVES)(
      "이동 - 같은 글자이지만 소문자인 경우 예외가 발생한다.",
      (input) => {
        expect(() => {
          checkMoves(input);
        }).toThrow("[ERROR]");
      }
    );
    test.each(CASES_FOR_MOVES_AND_COMMND.LOWER_CASE_COMMAND)(
      "재시작/종료 - 같은 글자이지만 소문자인 경우 예외가 발생한다.",
      (input) => {
        expect(() => {
          checkGameCommand(input);
        }).toThrow("[ERROR]");
      }
    );

    test.each(CASES_FOR_MOVES_AND_COMMND.INPUT_LENGTH)("입력 길이가 1이 아닌 경우 예외가 발생한다.", (input) => {
      expect(() => {
        checkMoves(input);
      }).toThrow("[ERROR]");
      expect(() => {
        checkGameCommand(input);
      }).toThrow("[ERROR]");
    });

    test("아무것도 입력하지 않은 경우 예외가 발생한다.", () => {
      expect(() => {
        checkMoves("");
      }).toThrow("[ERROR]");

      expect(() => {
        checkGameCommand("");
      }).toThrow("[ERROR]");
    });
  });
});
