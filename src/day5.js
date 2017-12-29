module.exports = function day5(input) {
  const array = input.toString().split('\n').map(n => parseInt(n, 10));
  const { length } = array;
  let offset = 0;
  let steps = 0;

  while (offset <= length - 1) {
    // save offset value and index
    const offsetValue = array[offset];
    const offsetIndex = offset;

    // move offset
    offset += array[offset];

    // increment previous position
    array[offsetIndex] = offsetValue + 1;

    steps += 1;
  }

  return steps;
};
