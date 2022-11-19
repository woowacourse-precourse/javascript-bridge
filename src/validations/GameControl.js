const GameControl = {
  validation: (input) => {
    if (input !== 'R' && input !== 'Q') throw new CustomError('게임 재시작/종료 여부는 R 또는 Q만 입력할 수 있습니다.');
  },
};
