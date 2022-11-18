const wrongStep = (nextStep, UBlock, DBlock) => {
  if (nextStep === 'U') {
    UBlock.push('X');
    DBlock.push(' ');
    return [UBlock, DBlock];
  }
  if (nextStep === 'D') {
    UBlock.push(' ');
    DBlock.push('X');
    return [UBlock, DBlock];
  }
};

describe('틀린 진행 방향 선택 시 X를 다리 블록에 넣는 기능 테스트', () => {
  test('D를 입력한 것이 틀린 경우', () => {
    const nextStep = 'D';
    const UBlock = ['O'];
    const DBlock = [' '];
    expect(wrongStep(nextStep, UBlock, DBlock)).toEqual([
      ['O', ' '],
      [' ', 'X'],
    ]);
  });
  test('U를 입력한 것이 틀린 경우', () => {
    const nextStep = 'U';
    const UBlock = ['O', ' ', ' '];
    const DBlock = [' ', 'O', 'O'];
    expect(wrongStep(nextStep, UBlock, DBlock)).toEqual([
      ['O', ' ', ' ', 'X'],
      [' ', 'O', 'O', ' '],
    ]);
  });
});
