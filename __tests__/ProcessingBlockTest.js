const processBlock = (block) => {
  let mappedBlock = block.map((value, index) => {
    if (index !== block.length - 1) {
      value += ' | ';
    }
    return value;
  });
  return mappedBlock.join('');
};

describe('다리 블록 가공 테스트', () => {
  test('O가 연속으로 있는 블록', () => {
    expect(processBlock(['O', 'O', 'O'])).toBe('O | O | O');
  });
  test('양끝에만 O가 있는 블록', () => {
    expect(processBlock(['O', ' ', ' ', ' ', 'O'])).toBe('O |   |   |   | O');
  });
  test('O가 가운데에 1개만 있는 블록 ', () => {
    expect(processBlock([' ', ' ', 'O', ' ', ' '])).toBe('  |   | O |   |  ');
  });
  test('O와 빈칸이 번갈아 나오는 블록', () => {
    expect(processBlock(['O', ' ', 'O', ' ', 'O', ' '])).toBe(
      'O |   | O |   | O |  '
    );
  });
});
