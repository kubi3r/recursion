function fibs(numCount) {
  const fibonacci = [0, 1];
  for (let i = 2; i < numCount; i++) {
    fibonacci.push(
      fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]
    );
  }
  return fibonacci;
}

console.log(fibs(8));
