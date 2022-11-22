const CommandValidation = require('../../../src/validation/CommandValidation');
const { ERROR_MESSAGE } = require('../../../src/constants');

describe('[ReplayValidation] 다리 이동 커멘드에 대한 유효성을 검증한다.', () => {
  test.each(['U', 'D'])('[성공 케이스]', (command) => {
    const { status, message } = CommandValidation.validate(command);
    expect(status).toEqual(true);
    expect(message).toEqual(undefined);
  });

  test.each(['u', 'd', 'UU', 'DD', ' U', ' D', ' U ', ' D '])('[실패 케이스]', (command) => {
    const { status, message } = CommandValidation.validate(command);
    expect(status).toEqual(false);
    expect(message).toEqual(ERROR_MESSAGE.command);
  });
});
