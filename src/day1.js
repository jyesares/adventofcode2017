module.exports = function day1(input) {
  const splitted = input.split('');

  const res = splitted.reduce((acc, val, i, array) => {
    const current = parseInt(val, 10);
    const next = array[i + 1]
      ? parseInt(array[i + 1], 10)
      : parseInt(array.slice(0, 1)[0], 10);
    return acc + (current === next ? current : 0);
  }, 0);

  return res;
};
