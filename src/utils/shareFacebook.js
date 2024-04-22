const resultUrl = window.location.href;

const shareFacebook = () => {
  const title = '페이스북 공유하기';
  window.open(
    `https://www.facebook.com/sharer.php?u=${resultUrl}`,
    title,
    'toolbar=0,status=0,width=655,height=520',
  );
};

export default shareFacebook;
