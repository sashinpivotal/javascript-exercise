// - This defines a generator function — indicated by 
//   the function* syntax (the asterisk). 
// - Generator functions behave very differently 
//   from regular functions: instead of running 
//   to completion when called, they run incrementally, 
// pausing at each yield and waiting to be resumed.
function* simpleGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = simpleGenerator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }

// Loops through the generator using for...of
function* colors() {
  yield 'red';
  yield 'green';
  yield 'blue';
}

for (const color of colors()) {
  console.log(color);
}

// Infinite generator example — generates an infinite sequence of IDs
function* idGenerator() {
  let id = 1;
  while (true) {
    yield id++;
  }
}

const ids = idGenerator();

console.log(ids.next().value); // 1
console.log(ids.next().value); // 2
console.log(ids.next().value); // 3
// ...could keep going forever, only computes when asked

// Practical use case: generating unique IDs for objects
function* range(start, end, step = 1) {
  for (let i = start; i < end; i += step) {
    yield i;
  }
}

for (const num of range(0, 10, 2)) {
  console.log(num);
}
// 0, 2, 4, 6, 8