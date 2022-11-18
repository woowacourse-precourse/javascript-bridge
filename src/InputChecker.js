const InputChecker = {
  checkBridgeSize(userInput) {
    if (/[\D]{1,}/g.test(userInput)) throw new Error("[ERROR] 숫자를 입력해주세요.");
    if (userInput.length < 1 || userInput.length > 2) throw new Error("[ERROR] 숫자의 자릿수는 1 또는 2여야 합니다.");
    if (+userInput < 3 || +userInput > 20) throw new Error("[ERROR] 다리 길이는 3부터 20 사이의 수여야 합니다.");
  },

  checkMoves(userInput) {
    if (/[^DU]{1,}/.test(userInput)) throw new Error("[ERROR] 입력이 D 또는 U가 아닙니다.");
    if (userInput.length !== 1) throw new Error("[ERROR] 문자는 하나만 입력해주세요.");
  },

  checkGameCommand(userInput) {
    if (/[^QR]{1,}/.test(userInput)) throw new Error("[ERROR] 입력이 Q 또는 R이 아닙니다.");
    if (userInput.length !== 1) throw new Error("[ERROR] 문자는 하나만 입력해주세요.");
  },
};

module.exports = InputChecker;
