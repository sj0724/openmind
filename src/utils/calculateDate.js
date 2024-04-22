const calculateDate = (date) => {
  if (date < 60) {
    return { time: '', result: '방금' };
  }
  if (date < 60 * 60) {
    const minute = Math.floor(date / 60);
    return { time: minute, result: '분' };
  }
  if (date < 60 * 60 * 24) {
    const day = Math.floor(date / (60 * 60));
    return { time: day, result: '시간' };
  }
  if (date < 60 * 60 * 24 * 30) {
    const day = Math.floor(date / (60 * 60 * 24));
    return { time: day, result: '일' };
  }
  if (date < 60 * 60 * 24 * 30 * 12) {
    const month = Math.floor(date / (60 * 60 * 24 * 30));
    return { time: month, result: '달' };
  }
  if (date >= 60 * 60 * 24 * 30 * 12) {
    const year = Math.floor(date / (60 * 60 * 24 * 30 * 12));
    return { time: year, result: '년' };
  }
  return null;
};

export default calculateDate;
