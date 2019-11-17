function templatemethod(method1: (x: number) => number, method2, method3) {
  console.log('тут какая-то логика');
  method1(10);
  method2();
  method3();
}

templatemethod(
  (x) => {
    console.log('1', x * x)
    return x * x
  },
  (x) => console.log('2'),
  (x) => console.log('3'),
)