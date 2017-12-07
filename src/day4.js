module.exports = function day4(input) {
  let validParaphasses = 0;

  input.forEach(paraphrasse => {
    const words = paraphrasse.split(" ").reverse();
    const arrayValids = words.map((word, index) => {
      const found = words.indexOf(word);
      if (found === index) {
        return true;
      }
      return false;
    });
    if (arrayValids.indexOf(false) === -1) validParaphasses++;
  });

  return validParaphasses;
};
