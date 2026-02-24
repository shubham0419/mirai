// upload a file/image

// 1. select and upload image   // 2.5sec
// 2. compress images.  //   4sec
// 3. upload the compressed image in DB. //  2sec

// function upload(image,cb){
//   console.log("image upload started");
//   let imageurl;
//   setTimeout(()=>{
//     console.log("image uploaded");
//     imageurl = `https://amazoneweb.service.s3.bucket/${image}`;
//     cb(imageurl,dbupload)
//   },2500)
// }

// function compress(imageurl,cb){
//   console.log("compress started");
//   setTimeout(()=>{
//     console.log("image compressed");
//     const compressedUrl = imageurl+"/compress";
//     cb(compressedUrl)
//   },4000)
// }

// function dbupload(compressedUrl){
//   console.log("Db upload started");
//   setTimeout(()=>{
//    console.log("image stored to DB",compressedUrl);
//   },2000)
// }

// upload("https://myimage.com",compress);

// more problems - https://www.notion.so/Callback-3089fc5e86058055bb2bfef568d40971?source=copy_link

function OrderFood(item, cb) {
  console.log("Order placed");
  setTimeout(() => {
    console.log("Order confirmed");
    cb(item,DeliverFood)
  }, 1000);
}

function CookFood(item,cb) {
  console.log("Cooking starts");
  setTimeout(() => {
    console.log("Cooking complete");
    let cookedItem = "Cooked " + item;
    cb(cookedItem)
  }, 2000);

}

function DeliverFood() {
  console.log("Delivery started");
  setTimeout(() => {
    console.log("Delivered");
    let deliveryStatus = cookedItem + " - Delivered at your door";
    console.log(deliveryStatus);
  }, 1500);
}

OrderFood("panner", CookFood);
// pass the required paramaeter in function and write the calling of functions such that it will run synchronously
