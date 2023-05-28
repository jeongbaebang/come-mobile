import { Calendar } from '@type/meeting.date';

export const reportConfig = {
  text: {
    image: '캡처 이미지 (선택)',
    title: '제목',
    discription: '신고 내용',
    placeholder: '신고 내용을 작성해주세요.',
    button: '신고하기',
    deleteSuccessMessage: '해당 모임 신고가 접수되었습니다.',
    confirm: '신고가 진행된다면 자동으로 모임에서 제외되게 됩니다.',
  },
  maxLength: 150,
};

export const displayConfig = {
  text: {
    totalPeople: (people: number) => `${people}명`,
    decided: (isDecided: boolean) => (isDecided ? '확정' : '미확정'),
    subTitle: (dateRange: {
      calendarStartFrom: string;
      calendarEndTo: string;
    }) => `${dateRange.calendarStartFrom} ~ ${dateRange.calendarEndTo}`,
  },
};

export const emptyConfig = {
  text: {
    button: {
      create: '모임 등록하러 가기',
    },
    description: '등록된 모임이 없습니다. 모임을 등록해주세요!',
  },
  height: 56,
};

export const menuConfig = {
  text: {
    code: '초대코드 관리',
    edit: '모임 수정',
    report: '게시물 신고',
    delete: '모임 탈퇴',
  },
};

export const modalConfig = {
  text: {
    emptyCode: '------',
    expiry: '코드가 만료되어 갱신되었습니다!',
    loading: (isLoading: boolean) =>
      isLoading ? '초대코드 확인중...' : '초대코드가 생성됐습니다!',
    copy: '복사해서 사용하세요',
    button: {
      cancel: '닫기',
      copy: '복사하기',
      success: '복사완료!',
    },
  },
};

export const detailConfig = {
  text: {
    member: '모임멤버 ',
    date: '모임기간',
    place: '모임장소',
    imageUpload: '사진등록',
    button: {
      vote: '날짜 투표하기',
    },
    search: '원하는 모임 날짜를 검색해 보세요',
    range: (calendar: Calendar) => `${calendar.startFrom} ~ ${calendar.endTo}`,
  },
};

export const settingConfig = {
  text: {
    logout: '로그아웃',
    withdraw: '회원탈퇴',
    supportUrl: 'SupportUrl로 이동하기',
    privacy: '개인정보처리방침',
    termsOfService: '이용약관',
    account: '계정관리',
    supportEmail: '개발자 연락처',
  },
  urls: {
    supportUrl: 'https://comeonmobile.tistory.com/1',
    privacyUrl: 'https://sites.google.com/view/come-on-privacy/%ED%99%88',
    termOfService:
      'https://sites.google.com/view/come-on-terms-of-service/%ED%99%88',
  },
  supportEmail: {
    email1: 'bananana0118@gmail.com',
    email2: 'yoo971202@naver.com',
    email3: 'jeongbaebangdev@gmail.com',
  },
};