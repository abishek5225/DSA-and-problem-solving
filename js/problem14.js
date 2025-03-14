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