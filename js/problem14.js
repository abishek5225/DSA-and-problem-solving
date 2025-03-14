let myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("task completed")
    },10000)
});

myPromise.then(result =>{
    console.log(result);
})