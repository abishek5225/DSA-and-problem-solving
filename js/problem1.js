//string reverse

function revString(str){
    let reversed="";
    for(let i=str.length -1;i>=0;i--){
        reversed += str[i];
    }
    return reversed;
}
console.log(revString("hello"));

console.log("hello")