const Trimmer = {
  templateTrim(message) {
    return message
      .split('\n')
      .map((line) => line.trim())
      .join('\n')
      .trim();
  },
};

module.exports = Trimmer;
