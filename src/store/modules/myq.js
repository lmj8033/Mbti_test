// 선택지에 따른 성향 분석하기
// 해당 결과를 저장하고 마지막에 저장 된 결과를 출력해 주기

// 상태: myq 결과
// 액션: 선택에 따른 myq 결정하기

//액션 타입 (문자열)
const INIT = 'myq/INIT';
const CHECK = 'myq/CHECK';
const NEXT = 'myq/NEXT';
const RESET = 'myq/RESET';

//액션 생성 함수
//payload => 선택에 따른 결과 값 result 전달 필요
export function init(data) {
  return {
    type: INIT,
    payload: data,
  };
}
export function check(result) {
  return {
    type: CHECK,
    payload: { result },
  };
}

export function next() {
  return {
    type: NEXT,
  };
}

export function reset() {
  return {
    type: RESET,
  };
}

// const initStateEmpty = {
//   myqResult: '',
//   page: 0,
//   survey: [],
//   explaination: {},
// };
// 초기 상태 설정
const initState = {
  myqResult: '',
  page: 0, // 0: 인트로 페이지, 1 ~ n: 선택 페이지, n+1: 결과 페이지
  survey: [
    {
      question: '게임 입장과 동시에 나는',
      answer: [
        {
          text: '마이크를 키고 팀원들에게 인사한다',
          result: 'E',
        },
        {
          text: '마이크는 끄고 브리핑을 듣기만한다',
          result: 'I',
        },
      ],
    },
    {
      question: '궁극기를 차곡차곡 모으면서 나는',
      answer: [
        {
          text: '어떻게 써야 이길 수 있을지 생각한다',
          result: 'S',
        },
        {
          text: '대박 궁으로 팟지 먹는 상상을 한다',
          result: 'N',
        },
      ],
    },
    {
      question: '우리 팀 딜러가 너무\n못하는걸 보면서 나는',
      answer: [
        {
          text: '너무 못한다고 대놓고 얘기하며 팀벤한다',
          result: 'T',
        },
        {
          text: '그럴 수 있다고 생각하며 조용히 팀벤한다 ',
          result: 'F',
        },
      ],
    },
    {
      question: '대규모 영웅 패치가 적용되었다',
      answer: [
        {
          text: '훈련장에서 먼저 연습해본다',
          result: 'J',
        },
        {
          text: '게임은 실전이다.\n바로 게임을 돌린다',
          result: 'P',
        },
      ],
    },
    {
      question: '내가 하려던 캐릭터를 누가 먼저 픽했다',
      answer: [
        {
          text: '양보 해줄 수 있는지 물어본다',
          result: '',
        },
        {
          text: '어쩔 수 없이 다른 캐릭터를 한다',
          result: '',
        },
      ],
    },
    {
      question: '경기가 끝날 쯤 제일 못하던 팀원이 나한테 정치를 시작한다',
      answer: [
        {
          text: '맞서 싸운다',
          result: '',
        },
        {
          text: '무시하고 나간다',
          result: '',
        },
      ],
    },
  ],
  explaination: {
    ESTJ: {
      name: '애쉬',
      text: '사물과 사람을 관리하는 데 뛰어난 능력을 지니고 있어요!',
      img: '/images/estj.png',
      voice: '이기고 싶어?\n그럼 판을 지배해.',
    },
    ISTJ: {
      name: '한조',
      text: '사실을 중시하는 믿음직한 현실주의자예요!',
      img: '/images/istj.png',
      voice: '패배는 더 나은 결과로 가는 첫걸음이다.',
    },
    ENTJ: {
      name: '자리야',
      text: '항상 문제 해결 방법을 찾아내며 대담하고 의지가 강력해요!',
      img: '/images/entj.png',
      voice: '함께일 때, 우린 강합니다.',
    },
    INTJ: {
      name: '위도우',
      text: '모든 일에 대해 계획을 세우고 상상력이 풍부해요!',
      img: '/images/intj.png',
      voice: '아무도 내게서 숨지 못해.',
    },
    ESFJ: {
      name: '메르시',
      text: '배려심이 넘치고 항상 다른 사람을 도울 준비가 되어있어요!',
      img: '/images/esfj.png',
      voice: '영웅은 죽지 않아요',
    },
    ISFJ: {
      name: '젠야타',
      text: '인내심이 많고 통찰력과 직관력이 뛰어나며 화합을 추구합니다',
      img: '/images/isfj.png',
      voice: '가장 큰 적은 내면의 적이라오.',
    },
    ENFJ: {
      name: '브리기테',
      text: '사람들에게 의욕을 불어넣으며 카리스마 넘쳐요!',
      img: '/images/enfj.png',
      voice: '걱정 붙들어 매세요.',
    },
    INFJ: {
      name: '아나',
      text: '차분하고 신비한 분위기를 풍기며 책임감과 인내력 또한 매우 강해요!',
      img: '/images/infj.png',
      voice: '신념을 위한 싸움을\n멈추지 마라.',
    },
    ESTP: {
      name: '라인',
      text: '위험을 기꺼이 감수하며 영리하고 에너지가 넘쳐요!',
      img: '/images/estp.png',
      voice: '두려워 말게.\n내가 그대들의 방패라네!',
    },
    ISTP: {
      name: '토르비욘',
      text: '대담하면서도 현실적이고 모든 종류의 도구를 자유자재로 다룰 수 있어요 !',
      img: '/images/istp.png',
      voice: '물건을 살 때에는\n꼭 뜯어보고 사.',
    },
    ENTP: {
      name: '솜브라',
      text: '지적 도전을 즐기며 영리하고 호기심이 많아요!',
      img: '/images/entp.png',
      voice: '무엇이든, 누구든\n해킹할 수 있어.',
    },
    INTP: {
      name: '모이라',
      text: '지식을 끝없이 갈망하고 혁신적이에요!',
      img: '/images/intp.png',
      voice: '게으른 손은\n악마의 장난감이 되지.',
    },
    ESFP: {
      name: '루시우',
      text: '즉흥적이고 넘치는 에너지와 열정으로 주변 사람을 즐겁게해요',
      img: '/images/esfp.png',
      voice: 'YO YO 리듬에 몸을 맡겨',
    },
    ISFP: {
      name: '캐서디',
      text: '항상 새로운 경험을 추구하고 유연하며 매력이 넘쳐요!',
      img: '/images/isfp.png',
      voice: '정의는 저절로 실현되지 않아',
    },
    ENFP: {
      name: '트레이서',
      text: '열정적이고 창의적인 성격으로 긍정적인 삶을 바라보는 자유로운 영혼이에요!',
      img: '/images/enfp.png',
      voice: '새로운 영웅은 언제나 환영이야.',
    },
    INFP: {
      name: '키리코',
      text: '항상 선을 행할 준비가 되어 있고 부드럽고 친절해요!',
      img: '/images/infp.png',
      voice: '내 친구들은 내가 지켜',
    },
  },
};

//리듀서

export default function myq(state = initState, action) {
  switch (action.type) {
    case INIT:
      return {
        ...state,
        survey: action.payload.survey,
        explaination: action.payload.explaination,
      };
    case CHECK:
      return {
        ...state,
        myqResult: state.myqResult + action.payload.result,
      };
    case NEXT:
      return {
        ...state,
        page: state.page + 1,
      };
    case RESET:
      return {
        ...state,
        page: 0,
        myqResult: '',
      };
    default:
      return state;
  }
}
