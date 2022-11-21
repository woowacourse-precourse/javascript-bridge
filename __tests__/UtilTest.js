const bridgeMaterialize = require('../src/utils/bridgeMaterialize');
const makePrintBridge = require('../src/utils/makePrintBridge');
const validCheck = require('../src/utils/validCheck');

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

  // 다리 구체화 유틸함수 동작 테스트 입력값들
  const bridgeMaterializeInput = [[['U', 'D', 'D']], [['U', 'D', 'U']]];
  // 다리 구체화 유틸함수 동작 테스트 결과값들
  const bridgeMaterializeResult = [
    [
        ['O', ' ', ' '], 
        [' ', 'O', 'O']
    ], 
    [
        ['O', ' ', 'O'], 
        [' ', 'O', ' ']
    ],
  ];
  test.each(
    bridgeMaterializeInput.map((data, i) => {
      data.push(i); // 테스트케이스들 지정 후 입력값들에 인덱스 번호 추가
      return [data];
    })
  )('다리 구체화 유틸함수 동작 테스트', (input) => {
    expect(bridgeMaterialize(input[0])).toEqual(
      bridgeMaterializeResult[input[1]]
    );
  });

  const printBridgeInput = [
    [
        [
          ['O', ' ', 'O'], 
          [' ', 'O', ' '],
        ],
      2,
      false,
    ],
    [
        [
          ['O', ' ', 'O'], 
          [' ', 'O', ' ']
        ],
      2,
      true,
    ],
    [
        [
          ['O', ' ', 'O', 'O'], 
          [' ', 'O', ' ', ' ']
        ],
      3,
      false,
    ],
  ];
  const printBridgeResult = [
    [
      ['O', ' ', ' '],
      [' ', 'O', 'X'],
    ],
    [
      ['O', ' ', 'O'],
      [' ', 'O', ' '],
    ],
    [
      ['O', ' ', 'O', ' '],
      [' ', 'O', ' ', 'X'],
    ],
  ];

  test.each(
    printBridgeInput.map((data, i) => {
      data.push(i); // 테스트케이스들 지정 후 입력값들에 인덱스 번호 추가
      return [data];
    })
  )('출력될 다리 제작 유틸함수 동작 테스트', (input) => {
    console.log(printBridgeResult[3]);
    expect(makePrintBridge(input[0], input[1], input[2])).toEqual(
      printBridgeResult[input[3]]
    );
  });

  test.each([['3'], ['8'], ['20']])(
    '다리 길이 입력값 검증 함수 성공 케이스',
    (input) => {
      expect(validCheck.bridgeLength(input)).toBe(true);
    }
  );

  test.each([['1'], ['d'], ['0'], ['23']])(
    '다리 길이 입력값 검증 함수 실패 케이스',
    (input) => {
      expect(validCheck.bridgeLength(input)).toBe(false);
    }
  );

  test.each([['U'], ['D'], ['u'], ['d']])(
    '위치 이동 입력값 검증 함수 테스트 성공 케이스',
    (input) => {
      expect(validCheck.moveInput(input)).toBe(true);
    }
  );

  test.each([['1'], ['q'], ['UD'], ['ud']])(
    '위치 이동 입력값 검증 함수 테스트 실패 케이스',
    (input) => {
      expect(validCheck.moveInput(input)).toBe(false);
    }
  );

  test.each([['Q'], ['R'], ['q'], ['r']])(
    '재시작/종료 입력값 검증 함수 테스트 성공 케이스',
    (input) => {
      expect(validCheck.quitInput(input)).toBe(true);
    }
  );

  test.each([['e'], ['QR'], ['qr'], ['1']])(
    '재시작/종료 입력값 검증 함수 테스트 실패 케이스',
    (input) => {
      expect(validCheck.quitInput(input)).toBe(false);
    }
  );
});
