const { Crew } = require('../Crew');

class Course {
  part;
  crew = [];

  constructor(part) {
    this.part = part;
    if (part === '백엔드') this.crew = Crew.backend;
    if (part === '프론트엔드') this.crew = Crew.frontend;
  }

  getCrew() {
    return this.crew;
  }

  getPart() {
    return this.part;
  }
}

module.exports = Course;
