const Crosser = require("../src/model/Crosser");
let crosser;

describe('생성 시 로직 테스트', () => {
    beforeEach(() => {
        crosser = new Crosser();
    });

    test.each([['attempts', 1], ['location', 0], ['upState', []], ['downState', []]])
        ('crosser 클래스 안의 필드가 잘 생성되었는지 확인하는 테스트', (key, value) => {
            expect(crosser.state[key]).toEqual(value);
        });
})

describe('이동 시 로직 테스트', () => {
    beforeEach(() => {
        crosser = new Crosser();
    });

    test.each([['U', 'success'], ['U', 'failure'], ['D', 'success'], ['D', 'failure']])('이동 값에 따라 state가 수정되었는지 확인하는 테스트', (moving, result) => {
        crosser.updateState(moving, result);
        const checkState = moving === 'U' ? 'upState' : 'downState';
        const checkValue = result === 'success' ? 'O' : 'X';

        expect(crosser.state[checkState][0]).toBe(checkValue);
    });
})

describe('재시작 시 로직 테스트', () => {
    beforeEach(() => {
        crosser = new Crosser();
        crosser.updateState('U', 'success');
        crosser.updateState('D', 'failure');
    });

    test.each([['attempts', 1], ['location', 2], ['upState', ['O', ' ']], ['downState', [' ', 'X']]])('재시작 시 state가 초기화 되는지 확인하는 테스트', (key, value) => {
        expect(crosser.state[key]).toEqual(value);
    });
})

