//creating a basic promise


/*
let myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("task completed")
    },10000)
});

myPromise.then(result =>{
    console.log(result);
})
*/

//handling errors with reject()

/*
let myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let success = false

        if(success){
            resolve("task completed")
        }else{
            reject("something went wrong")
        }
    },5000)
})
myPromise.then(result=> console.log(result))
.catch(error => console.log("error", error))
*/


//channing multiple .then() when we need to perform multiple async tasks



/*
new Promise((resolve) => {
  setTimeout(() => {
    resolve(10);
  }, 1000);
})
  .then((result) => {
    console.log("First result:", result);
    return result * 2;
  })
  .then((result) => {
    console.log("Second result:", result);
    return result * 2;
  }).then((result)=>{
    console.log("Third result:", result);
  })

*/


//Promise.all() method


let promise1 = new Promise((resolve)=>{
  setTimeout(()=>{
    resolve('task 1 done');
  },3000)
})

let promise2 = new Promise((resolve)=>{
  setTimeout(()=>{
    resolve('task 2 done');
  },6000)
})

let promise3 = new Promise((resolve)=>{
  setTimeout(()=>{
    resolve('task 3 done');
  },9000)
})

Promise.all([promise1, promise2, promise3]).then((result)=>{
  console.log(result);
})