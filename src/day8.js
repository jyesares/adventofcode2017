module.exports = function day8(input) {
  const registries = input.toString().split('\n');
  const parsedRegs = registries.map(reg => reg.split(' '));
  const vars = {};
  // init all vars
  parsedRegs.forEach((reg) => {
    vars[reg[0]] = 0;
  });

  parsedRegs.forEach((reg) => {
    const [v, act, val, unused, c1, op, c2] = reg;
    const command = [vars[c1], op, c2].join(' ').toString();
    const intVal = parseInt(val, 10);

    if (eval(command)) {
      vars[v] += act === 'inc' ? intVal : -intVal;
    }
  });

  const regValues = Object.keys(vars).map(v => ({ name: v, value: vars[v] }));
  let maxTemp = { name: regValues[0].name, value: regValues[0].value };
  for (let i = 0; i < regValues.length; i += 1) {
    if (regValues[i].value > maxTemp.value) {
      maxTemp = regValues[i];
    }
  }

  return parseInt(maxTemp.value, 10);
};
