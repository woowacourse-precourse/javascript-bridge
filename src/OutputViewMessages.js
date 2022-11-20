const OutputViewMessages = {
  startSentence: "다리 건너기 게임을 시작합니다.",
  lengthBridgeSentence: "다리의 길이를 입력해주세요.",
  pickMoveSentence: "이동할 칸을 선택해주세요. (위: U, 아래: D)",
  retrySentence:
    "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)",
  printMapFirst: (command) => `[ ${command[0].join(" | ")} ]`,
  printMapSecond: (command) => `[ ${command[1].join(" | ")} ]`,
  printResultEndSentence: "최종 게임 결과",
  printResultCheckSuccess: (command) => `게임 성공 여부: ${command}`,
  printResultCount: (command) => `총 시도한 횟수: ${command}`,
};
module.exports = OutputViewMessages;
