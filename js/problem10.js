//finding intersection of two arrays

function Reverse(str){
    let result=''
    for(let i = str.length-1;i>0;i--){
        result += str[i]
    }
    return result
}
console.log(Reverse('helloworld'));
