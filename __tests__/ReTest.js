describe('리팩터링 테스트', () => {
  test('클래스를 프로퍼티를 대괄호로 접근할 수 있습니다.', () => {
    class test {
      D = '디';
      bridges = {
        D: 'down',
        U: 'up',
      };
    }

    expect(new test()['D']).toBe('디');
    expect(new test().bridges['D']).toBe('down');
  });
});
