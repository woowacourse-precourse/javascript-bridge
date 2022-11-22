const { MAP_ELEMENT, RESULT_ELEMENT } = require("../constants/Constants");

const Map = {

  makeMapEl(bridgeOne, movedOne){
    if(bridgeOne === movedOne){
      return MAP_ELEMENT.RIGHT;
    }
    return MAP_ELEMENT.WRONG;
  },

  makeLine(bridge, moved, upOrDown){
    const line = moved.map((movedOne, index) => {
      if(movedOne===upOrDown){
        return this.makeMapEl(bridge[index], movedOne);
      }
      return MAP_ELEMENT.NOTHING;
    });
    return line;
  },

  makeMap(upLine, downLine){
    const map = MAP_ELEMENT.START + upLine.join(MAP_ELEMENT.SEPERATOR) + MAP_ELEMENT.END
              + MAP_ELEMENT.START + downLine.join(MAP_ELEMENT.SEPERATOR) + MAP_ELEMENT.END;
    return map;
  },

}

const Result = {

  makeStringResult(bridge, moved){
    if(JSON.stringify(bridge)===JSON.stringify(moved)){
      return RESULT_ELEMENT.SUCCESS;
    }
    return RESULT_ELEMENT.FAIL;
  }

}

module.exports = { Map, Result };