

// const mypromise = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     let num = Math.random()*10;
//     if(num<5){   // promise is fullfilled
//       resolve(num)
//     }else{      // promise is rejected
//       reject(num)
//     }
//   },2000)
// })

// mypromise.then((response)=>{
//   console.log(`promise fullfilled ${response}`);
// }).catch((err)=>{
//   console.log(`promise rejected ${err}`);
// })


//

console.log("start");

setTimeout(()=>{
  console.log("timeout");
},0)

const promise = new Promise(function(resolve, reject) {
  resolve("Promise");
});

promise.then(function(result) {
  console.log(result);
});

console.log("end");