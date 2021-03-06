function getSquare(input) {
  let square = 0;
  const spiral = [[2, 9]];

  if (input >= spiral[0][0] && input <= spiral[0][1]) {
    return { square, spiral: spiral[0] };
  }

  for (let i = 0; ; i += 1) {
    const nextPoint = [spiral[i][0] + (8 * (i + 1)), spiral[i][1] + (8 * (i + 2))];
    spiral.push(nextPoint);
    square += 1;
    if (input >= nextPoint[0] && input <= nextPoint[1]) {
      break;
    }
  }
  return { square, spiral: spiral[square] };
}

function manhattanDistance(p, q) {
  let q2;
  if (!q) {
    q2 = { x: 0, y: 0 };
  }
  return Math.abs(p.x - q2.x) + Math.abs(p.y - q2.y);
}

module.exports = function day3(input) {
  if (input === 1) return 0;

  let p;

  const { square, spiral } = getSquare(input);
  const digits = (spiral[1] - spiral[0]) + 1;
  const sizeSide = digits / 4;

  const div = Math.floor((input - spiral[0]) / sizeSide);
  const mod = (input - spiral[0]) % sizeSide;

  switch (div) {
    case 0:
      p = { x: square + 1, y: mod - square };
      break;
    case 1:
      p = { y: square + 1, x: square - mod };
      break;
    case 2:
      p = { x: (square + 1) * -1, y: square - mod };
      break;
    case 3:
      p = { y: (square + 1) * -1, x: mod - square };
      break;
    default:
      break;
  }

  return manhattanDistance(p);
};
