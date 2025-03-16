//just a demo of async and await

/*
function delay(ms){
    return new Promise((resolve)=>{
        setTimeout(resolve,ms)
    })
}
// delay(ms) returns a Promise that resolves after ms milliseconds.
async function example(){
    console.log('start')
    await delay(3000) //pauses execution for 3 seconds.
    console.log("Ended successfully")
}

example()
*/

// fetching data from an API using async/await

async function fetchData(){
    try{
        let response = await fetch('https://jsonplaceholder.typicode.com/1')
        let data = await response.json()
        
        let container= document.getElementById('container')

        container.innerHTML = `<h2>${data.title}</h2>
        <p>${data.body}</p>`;
            
    
    }catch(error){
        console.log("error fetching data:", error)
    }
}

    fetchData()