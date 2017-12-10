module.exports = function day6(input) {
  const array = input
    .toString()
    .split("\t")
    .map(n => parseInt(n));

  let arrayCache = [];
  arrayCache.push(array);

  let steps = 1;
  let newArray = redistribute(array);

  while (!existsCycle(arrayCache, newArray)) {
    arrayCache.push(newArray);
	steps++;
	newArray = Object.assign([], redistribute(newArray));
  } 

  return steps;
};

function redistribute(array) {
  const maxValue = Math.max(...array);
  const maxIndex = array.indexOf(maxValue);
  let value = maxValue;
  let resArray = Object.assign([], array);
  let currentIndex = maxIndex;

  resArray[maxIndex] = 0;

  while (value > 0) {
    currentIndex = currentIndex < array.length - 1 ? currentIndex + 1 : 0;
    resArray[currentIndex]++;
    value--;
  }
  return resArray;
}

function existsCycle(arrayCache, array) {
  return !arrayCache.every(ac => !equals(ac, array));
}

function equals(a1, a2) {
  return a1.length == a2.length && a1.every((v, i) => v === a2[i]);
}
