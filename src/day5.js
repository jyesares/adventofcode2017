module.exports = function day5(input) {
  const array = input.toString().split("\n").map( n => parseInt(n));
  const length = array.length;
  let offset = 0;
  let steps = 0;

  while (offset <= length - 1) {
    
    // save offset value and index
    let offsetValue = array[offset];
    let offsetIndex = offset;

    // move offset
    offset += array[offset];
    
    // increment previous position
    array[offsetIndex] = offsetValue + 1; 

    steps++;
  }

  return steps;
};
