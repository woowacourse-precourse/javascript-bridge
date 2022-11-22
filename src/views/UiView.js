const { CONTAINER } = require('../constants/bridge');

const UiView = {
  setBrigeUi(arr) {
    const mid = arr.join(CONTAINER.MID);
    return `${CONTAINER.START}${mid}${CONTAINER.END}`;
  },
};

module.exports = UiView;
