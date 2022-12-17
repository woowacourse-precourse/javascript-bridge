const Crew = {
  backend:
    '백호 태웅 치수 태섭 대만 준호 대협 덕규 태산 경태 수겸 현준 준섭 한나 소연 호열 대남 용팔 구식 달재'.split(
      ' ',
    ),

  frontend:
    '보노 시저 쉐리 신디 다비 덴버 이브 제시 라라 린다 리사 니콜 로드 윌터 제키'.split(
      ' ',
    ),
};

class Crews {
  crew = {};

  constructor() {
    this.crew.backend = Crew.backend;
    this.crew.frontend = Crew.frontend;
  }

  teamMatch(part) {
    const selectedPart = this.crew[part];
  }
}

module.exports = { Crews, Crew };
