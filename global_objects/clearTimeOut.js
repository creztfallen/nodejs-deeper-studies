const helloWorld = () => {
  console.log('Hello World');
};

let t = setTimeout(helloWorld, 2000);
clearTimeout(t)
