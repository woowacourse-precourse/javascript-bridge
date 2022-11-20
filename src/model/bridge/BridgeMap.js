const { BRIDGE_MAP } = require('../../constants');

// 1. initBridgeMap: ✅
// bridge를 이용해 유저의 command와 bridge의 값이 동일하다면 O를 체크한 map ✅
// 2. markIfLatestCommandFailed: ✅
// 1번을 통해 init한 bridgeMap에서 유저가 마지막에 밟은 칸이 통과인지 불통인지 체크 ✅
//    @통과 조건 = 마지막에 밟은 칸과 해당 index의 bridge 값이 동일
//    - 통과라면 isPassed = true
//    - 불통이라면 X 표시 후 isPassed = false
// 3. convertBridgeMapToPrint: ✅
// 만든 bridgeMap를 출력 형식에 맞게 convert
// @return: {isPassed, bridgeMap} ✅
//     - isPassed: 게임 실패 flag 변수 = 이번에 이동한 유저의 입력값이 이동할 수 있는 칸인지 여부
//     - bridgeMap: 지금까지 유저의 bridgeMap
const BridgeMap = class {
  #bridge;
  #position;
  #commandList;

  #bridgeMap;
  #isPassed;

  constructor(bridge, position, commandList) {
    this.#bridge = bridge;
    this.#position = position;
    this.#commandList = commandList;
  }

  getBridgeMap() {
    this.initBridgeMap();
    this.markIfLatestCommandFailed();
    this.convertBridgeMapToPrint();

    return { isPassed: this.#isPassed, bridgeMap: this.#bridgeMap };
  }

  initBridgeMap() {
    const directions = [BRIDGE_MAP.up_direction, BRIDGE_MAP.down_direction];

    this.#bridgeMap = directions.reduce((bridgeMap, currDirection) => {
      const currDirectionBridge = this.#bridge
        .slice(0, this.#position)
        .map((space) =>
          space === currDirection ? BRIDGE_MAP.success_space : BRIDGE_MAP.empty_space,
        );
      bridgeMap[currDirection] = currDirectionBridge;
      return bridgeMap;
    }, {});
  }

  markIfLatestCommandFailed() {
    const latestDirectionIndex = this.#position - 1;

    const latestBridgeDirection = this.#bridge[latestDirectionIndex];
    const latestCommand = this.#commandList[latestDirectionIndex];

    this.#isPassed = latestBridgeDirection === latestCommand;
    if (this.#isPassed) return;

    this.#bridgeMap[latestBridgeDirection][latestDirectionIndex] = BRIDGE_MAP.fail_space;
  }

  convertBridgeMapToPrint() {
    const convertedBridgeMap = Object.values(this.#bridgeMap).reduce((bridgeMap, currDirection) => {
      bridgeMap.push(`[${currDirection.join('|')}]`);
      return bridgeMap;
    }, []);

    this.#bridgeMap = convertedBridgeMap.join('\n');
  }
};

module.exports = BridgeMap;
