const { BRIDGE_MAP } = require('../../constants');

const BridgeMap = class {
  #bridge;
  #position;
  #commandList;

  #bridgeMap;
  #isPassed;

  constructor({ bridge, position, commandList }) {
    this.#bridge = bridge;
    this.#position = position;
    this.#commandList = commandList;
  }

  getBridgeMap() {
    this.#initBridgeMap();
    this.#markIfLatestCommandFailed();
    this.#convertBridgeMapToPrint();

    return { isPassed: this.#isPassed, bridgeMap: this.#bridgeMap };
  }

  #initBridgeMap() {
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

  #markIfLatestCommandFailed() {
    const latestDirectionIndex = this.#position - 1;
    const latestBridgeDirection = this.#bridge[latestDirectionIndex];
    const latestUserDirection = this.#commandList[latestDirectionIndex];

    this.#isPassed = latestBridgeDirection === latestUserDirection;
    if (this.#isPassed) return;

    this.#bridgeMap[latestBridgeDirection][latestDirectionIndex] = BRIDGE_MAP.empty_space;
    this.#bridgeMap[latestUserDirection][latestDirectionIndex] = BRIDGE_MAP.fail_space;
  }

  #convertBridgeMapToPrint() {
    const convertedBridgeMap = Object.values(this.#bridgeMap).reduce((bridgeMap, currDirection) => {
      bridgeMap.push(`[${currDirection.join('|')}]`);
      return bridgeMap;
    }, []);

    this.#bridgeMap = convertedBridgeMap.join('\n');
  }
};

module.exports = BridgeMap;
