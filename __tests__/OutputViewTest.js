const OutputView = require('../src/OutputView');
const { Console } = require('@woowacourse/mission-utils');

describe('메시지 출력 기능 단위 테스트', () => {
    it(('게임 시작시 메시지 출력'), () => {
        const testMessage = OutputView.printStartMessage();
        const correctMessage = Console.print('다리 건너기 게임을 시작합니다.');
        expect(testMessage).toEqual(correctMessage);
    });
    it(('다리길이 입력 받을시 메시지 출력'), () => {
        const testMessage = OutputView.printInputLengthMessage();
        const correctMessage = Console.print('다리의 길이를 입력해주세요.');
        expect(testMessage).toEqual(correctMessage);
    });
    it('사용자 입력값 출력', () => {
        const testMessage = OutputView.printUserInput(3);
        const correctMessage = Console.print('3');
        expect(testMessage).toEqual(correctMessage);

        const testMessage2 = OutputView.printGameRestartMessage('U');
        const correctMessage2 = Console.print('U');
        expect(testMessage2).toEqual(correctMessage2);
    });
    it('이동할 칸을 입력받을시 메시지 출력', () => {
        const testMessage = OutputView.printChooseSectionMessage();
        const correctMessage = Console.print('이동할 칸을 선택해주세요. (위: U, 아래: D)');
        expect(testMessage).toEqual(correctMessage);
    });
    it('재시작 선택시 메시지 출력', () => {
        const testMessage = OutputView.printGameRestartMessage();
        const correctMessage = Console.print('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)');
        expect(testMessage).toEqual(correctMessage);

    });
    it('게임 성공 여부 출력', () => {
        const testMessage = OutputView.printGameResult(success);
        const correctMessage = Console.print('게임 성공 여부: 성공');
        expect(testMessage).toEqual(correctMessage);
    });
    it('시도 횟수 출력', () => {
        const testMessage = OutputView.printGameTryCount(2);
        const correctMessage = Console.print('총 시도한 횟수: 2');
        expect(testMessage).toEqual(correctMessage);
    });
});