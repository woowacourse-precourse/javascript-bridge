const includeX = (UBlock, DBlock) => {
  if (UBlock.includes('X') || DBlock.includes('X')) {
    return true;
  }
  return false;
};

describe('입력받은 배열에 문자 X가 포함되어 있는지 감지하는 기능 테스트', () => {
  test('X가 포함된 경우 1', () => {
    const UBlock = ['O', ' '];
    const DBlock = [' ', 'X'];
    expect(includeX(UBlock, DBlock)).toBeTruthy();
  });
  test('X가 포함된 경우 2', () => {
    const UBlock = ['O', ' ', ' ', 'X'];
    const DBlock = [' ', 'O', 'O', ' '];
    expect(includeX(UBlock, DBlock)).toBeTruthy();
  });
  test('X가 포함되지 않은 경우 ', () => {
    const UBlock = ['O', ' ', ' '];
    const DBlock = [' ', 'O', 'O'];
    expect(includeX(UBlock, DBlock)).toBeFalsy();
  });
});
