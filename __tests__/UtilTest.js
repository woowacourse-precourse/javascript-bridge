const bridgeMaterialize = require('../src/utils/bridgeMaterialize');
const makePrintBridge = require('../src/utils/makePrintBridge');
const validCheck = require('../src/utils/validCheck');
const testCase = require('../testcase/UtilTestCases');

describe('유틸 함수 동작 테스트', () => {
  test('다리 구체화 유틸함수 테스트', () => {
    expect(bridgeMaterialize(['U', 'D', 'D'])).toEqual([
      ['O', ' ', ' '],
      [' ', 'O', 'O'],
    ]);
    expect(bridgeMaterialize(['U', 'D', 'U'])).toEqual([
      ['O', ' ', 'O'],
      [' ', 'O', ' '],
    ]);
  });

  test.each(
    testCase.bridgeMaterializeInput.map((data, i) => {
      data.push(i); // 테스트케이스들 지정 후 입력값들에 인덱스 번호 추가
      return [data];
    })
  )('다리 구체화 유틸함수 동작 테스트', (input) => {
    expect(bridgeMaterialize(input[0])).toEqual(
      testCase.bridgeMaterializeResult[input[1]]
    );
  });

  test.each(
    testCase.printBridgeInput.map((data, i) => {
      data.push(i); // 테스트케이스들 지정 후 입력값들에 인덱스 번호 추가
      return [data];
    })
  )('출력될 다리 제작 유틸함수 동작 테스트', (input) => {
    expect(makePrintBridge(input[0], input[1], input[2])).toEqual(
      testCase.printBridgeResult[input[3]]
    );
  });

  test.each(testCase.bridgeLengthInputSuccess)(
    '다리 길이 입력값 검증 함수 성공 케이스',
    (input) => {
      expect(validCheck.bridgeLength(input)).toBe(true);
    }
  );

  test.each(testCase.bridgeLengthInputFail)(
    '다리 길이 입력값 검증 함수 실패 케이스',
    (input) => {
      expect(validCheck.bridgeLength(input)).toBe(false);
    }
  );

  test.each(testCase.moveLocationInputSuccess)(
    '위치 이동 입력값 검증 함수 테스트 성공 케이스',
    (input) => {
      expect(validCheck.moveInput(input)).toBe(true);
    }
  );

  test.each(testCase.moveLocationInputFail)(
    '위치 이동 입력값 검증 함수 테스트 실패 케이스',
    (input) => {
      expect(validCheck.moveInput(input)).toBe(false);
    }
  );

  test.each(testCase.retryInputSuccess)(
    '재시작/종료 입력값 검증 함수 테스트 성공 케이스',
    (input) => {
      expect(validCheck.quitInput(input)).toBe(true);
    }
  );

  test.each(testCase.retryInputFail)(
    '재시작/종료 입력값 검증 함수 테스트 실패 케이스',
    (input) => {
      expect(validCheck.quitInput(input)).toBe(false);
    }
  );
});
