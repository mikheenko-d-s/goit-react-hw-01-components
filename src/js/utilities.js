export function getRandomHexColor() {
  const CLR_MIN = 0x30;
  const CLR_MAX = 0xd0;

  const getColor = (min = 0, max = 0xff) => {
    return Math.floor(Math.random() * (max - min) + min).toString(16);
  };

  return '#' + ['r', 'g', 'b'].map(_ => getColor(CLR_MIN, CLR_MAX)).join('');
}