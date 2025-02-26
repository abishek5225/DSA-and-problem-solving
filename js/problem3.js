//character reverse
let name = ["a", "b", "c"];
function charReverse(char){
    let reverse=[];
    for(let i=char.length -1; i>=0;i--){
        reverse.push(char[i])
    }
    return reverse;
}
console.log(charReverse(name));
