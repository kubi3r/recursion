function fibs(numCount) {
  const fibonacci = [0, 1];
  for (let i = 2; i < numCount; i++) {
    fibonacci.push(
      fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]
    );
  }
  return fibonacci;
}

function fibsRec(num) {
  // This took so much longer than it should have
  if (num === 1) {
    return [0];
  }
  if (num === 2) {
    return [0, 1];
  }

  const prevFib = fibsRec(num - 1);
  return prevFib.concat([prevFib.at(-1) + prevFib.at(-2)]);
}

console.log(fibsRec(8));
