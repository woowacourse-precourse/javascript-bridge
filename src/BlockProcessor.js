const BlockProcessor = (block) => {
  let mappedBlock = block.map((value, index) => {
    if (index !== block.length - 1) {
      value += ' | ';
    }
    return value;
  });
  return mappedBlock.join('');
};

module.exports = BlockProcessor;
