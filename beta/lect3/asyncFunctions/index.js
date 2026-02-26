// const p= new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve("2 sec passed")
//   },2000)
// })
// console.log("start");
// async function fun(){
//   console.log("async start");
//   const response = await p;
//   console.log(response);
//   console.log("async end");
// }

// fun()
// console.log("end");

// console.log("start");
// const p1= new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve("p1")
//   },2000)
// })
// const p2= new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve("p2")
//   },1000)
// })
// async function fun(){
//   console.log("async start");
//   const response = await p1;
//   console.log(response);
//   const res2 = await p2;
//   console.log(res2);
//   console.log("async end");
// }
// fun()
// console.log("end");


const pm = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("p2")
    // reject("p2 rejected")
  },1000)
})
async function fun(){
  const response = await pm;
  return response;
}
const ans = await fun();
console.log(ans);
// ans.then((data)=>console.log(data)).catch((err)=>console.log(err));

// questions -> https://www.notion.so/Async-Await-3089fc5e8605805fa77ae5e579acb0ff?source=copy_link