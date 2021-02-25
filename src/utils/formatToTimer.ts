const FormateToTimer = (minutes: number, hora = false): string => {
  const millisecondes = minutes * 1000;

  const date = new Date(millisecondes);

  const zeroLeft = (num: number): string => num.toString().padStart(2, '0');

  const hor = zeroLeft(date.getUTCHours());
  const min = zeroLeft(date.getUTCMinutes());
  const sec = zeroLeft(date.getUTCSeconds());

  if (!hora) {
    return `${min}:${sec}`;
  }

  return `${hor}:${min}:${sec}`;
};

export default FormateToTimer;
