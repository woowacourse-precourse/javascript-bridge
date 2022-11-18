/**
 * 다리의 길이를 입력 받아서 다리를 생성해주는 역할을 한다.
 제공된 BridgeMaker 객체를 활용해 구현해야 한다.
BridgeMaker에 프로퍼티를 추가할 수 없다.
BridgeMaker의 파일 경로는 변경할 수 없다.
BridgeMaker의 메서드의 시그니처(인자, 이름)와 반환 타입은 변경할 수 없다.
 */
const BridgeMaker = {
  /**
   * @param {number} size 다리의 길이
   * @param {function(): number} generateRandomNumber 무작위 값을 생성해주는 함수
   * @return {string[]} 입력받은 길이에 해당하는 다리 모양. 위 칸이면 U, 아래 칸이면 D로 표현해야 한다.
   */
  makeBridge(size, generateRandomNumber) {
    //여기에 다리의 길이와 맞는 다리위치 인자로 받아 1,0에 따른 U, D 리턴 해주기
    //사용자가 입력한 번호와, 여기서 만들어져있는 함수 보내기
    //그리고 1,0에 따라 U나 P리턴
  },
};

module.exports = BridgeMaker;
