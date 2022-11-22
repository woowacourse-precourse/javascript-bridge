const Conversion = {
  Sortation(result, index) {
    if (index !== 0) return `| ${result} `;

    return ` ${result} `;
  },

  convertResult(compareResult) {
    let result = '';
    compareResult.forEach((status, index) => {
      result += this.Sortation(status, index);
    });
    return `[${result}]`.replace(/N/g, ' ');
  },
};

module.exports = Conversion;
