const BRIDGE_MESSAGE = {
  EMPTY_BRIDGE: '[ ]',
  SUCESS_BRIDGE: '[ O ]',
  FAIL_BRIDGE: '[ X ]',
  UPUP_MESSAGE: '[ O ]\n[   ]',
  UPDOWN_MESSAGE: '[ X ]\n[   ]',
  DOWNUP_MESSAGE: '[   ]\n[ X ]',
  DOWNDOWN_MESSAGE: '[   ]\n[ O ]',
};

Object.freeze(BRIDGE_MESSAGE);
module.exports = BRIDGE_MESSAGE;
