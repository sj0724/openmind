const { Kakao } = window;
const resultUrl = window.location.href;

const shareKakao = () => {
  Kakao.cleanup();
  Kakao.init(import.meta.env.VITE_KEY);

  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: '오픈 마인드',
      description: '익명으로 서로 질문하고 답변해보세요!',
      imageUrl: '',
      link: {
        mobileWebUrl: resultUrl,
      },
    },
    buttons: [
      {
        title: '질문 하러가기',
        link: {
          mobileWebUrl: resultUrl,
        },
      },
    ],
  });
};

export default shareKakao;
