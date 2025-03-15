function delay(ms){
    return new Promise((resolve)=>{
        setTimeout(resolve,ms)
    })
}

async function example(){
    console.log('start')
    await delay(3000)
    
}