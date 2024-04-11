const getRandomInt = (first, second) => {
  let min = first;
  let max = second;
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

export default getRandomInt;
