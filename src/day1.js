module.exports = function day1(input) {
  const splitted = input.split("");

  const res = splitted.reduce((acc, val, i, array) => {
    let current = parseInt(val);
    let next = array[i + 1]
      ? parseInt(array[i + 1])
      : parseInt(array.slice(0, 1)[0]);
    return acc + (current === next ? current : 0);
  }, 0);

  return res;
};
