const ReplayValidation = require('../../../src/validation/ReplayValidation');
const { ERROR_MESSAGE } = require('../../../src/constants');

describe('[ReplayValidation] 게임 재시작 또는 게임 종료 커멘드에 대한 유효성을 검증한다.', () => {
  test.each(['R', 'Q'])('[성공 케이스]', (command) => {
    const { status, message } = ReplayValidation.validate(command);
    expect(status).toEqual(true);
    expect(message).toEqual(undefined);
  });

  test.each(['r', 'q', ' R', ' Q', ' R ', ' Q ', 'RR', 'QQ', 'A', 'B'])(
    '[실패 케이스]',
    (command) => {
      const { status, message } = ReplayValidation.validate(command);
      expect(status).toEqual(false);
      expect(message).toEqual(ERROR_MESSAGE.replay);
    },
  );
});
