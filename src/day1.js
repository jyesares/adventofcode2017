module.exports = function day1(input) {
  const splitted = input.split("");

  const res = splitted.reduce((acc, val, i, array) => {
    let actual = parseInt(val);
    let siguiente = array[i + 1]
      ? parseInt(array[i + 1])
      : parseInt(array.slice(0, 1)[0]);
    return acc + (actual === siguiente ? actual : 0);
  }, 0);

  return res;
};
