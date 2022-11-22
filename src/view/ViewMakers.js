const { MapElement, ResultElement } = require("../constants/Constants");

const Map = {

  makeMapEl(bridgeOne, movedOne){
    if(bridgeOne === movedOne){
      return MapElement.RIGHT;
    }
    return MapElement.WRONG;
  },

  makeLine(bridge, moved, upOrDown){
    const line = moved.map((movedOne, index) => {
      if(movedOne===upOrDown){
        return this.makeMapEl(bridge[index], movedOne);
      }
      return MapElement.NOTHING;
    });
    return line;
  },

  makeMap(upLine, downLine){
    const map = MapElement.START + upLine.join(MapElement.SEPERATOR) + MapElement.END
              + MapElement.START + downLine.join(MapElement.SEPERATOR) + MapElement.END;
    return map;
  },

}

const Result = {

  makeStringResult(bridge, moved){
    if(JSON.stringify(bridge)===JSON.stringify(moved)){
      return ResultElement.SUCCESS;
    }
    return ResultElement.FAIL;
  }

}

module.exports = { Map, Result };