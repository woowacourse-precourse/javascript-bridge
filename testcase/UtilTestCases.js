const testCase = {
  // 다리 구체화 유틸함수 동작 테스트 입력값들
  bridgeMaterializeInput: [[['U', 'D', 'D']], [['U', 'D', 'U']]],
  // 다리 구체화 유틸함수 동작 테스트 결과값들
  bridgeMaterializeResult: [
    [
      ['O', ' ', ' '],
      [' ', 'O', 'O'],
    ],
    [
      ['O', ' ', 'O'],
      [' ', 'O', ' '],
    ],
  ],

  printBridgeInput: [
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
        [' ', 'O', ' '],
      ],
      2,
      true,
    ],
    [
      [
        ['O', ' ', 'O', 'O'],
        [' ', 'O', ' ', ' '],
      ],
      3,
      false,
    ],
  ],

  printBridgeResult: [
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
  ],

  bridgeLengthInputSuccess: [['3'], ['8'], ['20']],
  bridgeLengthInputFail: [['1'], ['d'], ['0'], ['23']],

  moveLocationInputSuccess: [['U'], ['D'], ['u'], ['d']],
  moveLocationInputFail: [['1'], ['q'], ['UD'], ['ud']],

  retryInputSuccess: [['Q'], ['R'], ['q'], ['r']],
  retryInputFail: [['e'], ['QR'], ['qr'], ['1']],
};

module.exports = testCase;
