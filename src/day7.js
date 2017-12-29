function parseDisks(input) {
  const parsedDisks = {};
  const disks = input.toString().split('\n');
  disks.forEach((element) => {
    let props = element.replace(/,/g, '');
    props = props.split(' ');

    // save disks
    if (parsedDisks[props[0]] === undefined) {
      parsedDisks[props[0]] = {
        parent: undefined,
      };
    }

    // update parents
    if (props[2] !== undefined) {
      props.slice(3).forEach((e) => {
        if (parsedDisks[e] === undefined) {
          parsedDisks[e] = {
            parent: props[0],
          };
        } else {
          // eslint-disable-next-line
          parsedDisks[e].parent = props[0];
        }
      });
    }
  });

  return parsedDisks;
}

module.exports = function day7(input) {
  const disks = parseDisks(input);
  let result;
  Object.keys(disks).forEach((e) => {
    if (disks[e].parent === undefined) {
      result = e;
    }
  });
  return result;
};
