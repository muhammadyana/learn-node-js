// const toArray = (...args) => {
//   return args
// }
// console.log(toArray(1,2,3,4,5,6));

const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('done');
    }, 1500);
  });
  return promise;
}

setTimeout(() => {
  console.log('Timer is done');
  fetchData()
    .then(text => {
      console.log(text);
      return fetchData();
    })
    .then(text2 => {
      console.log(text2);
    });
}, 200);

console.log('Halle there 👋');