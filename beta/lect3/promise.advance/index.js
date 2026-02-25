// multiple promises handling
// const p1 = Promise.resolve(20);
// console.log(p1);

const p2 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    // resolve("p2 resolved")
    reject("p2 reject")
  },100)
})
const p3 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    // resolve("p3 resolved")
    reject("p3 rejected")
  },150)
})
const p4 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("p4 resolved")
  },5300)
})

// const results = Promise.all([p2,p3,p4])
// results.then((response)=>{console.log(response)}).catch((err)=>{console.log(err)})

// const result = Promise.any([p2,p3,p4]);
// result.then((response)=>{console.log(response)})

const result2 = Promise.race([p2,p3,p4]);
result2.then((response)=>{console.log(response)}).catch((err)=>{console.log(err)})


// p2.then((response)=>{
//   console.log(response);
// })
// p3.then((response)=>{
//   console.log(response);
// })
// p4.then((response)=>{
//   console.log(response);
// })