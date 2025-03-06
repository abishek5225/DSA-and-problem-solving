const nums=[1,2,3,4,5,6,7,8,9,10];
let result=[];
const evennums=nums.forEach((item)=>{
    if(item%2==0){
        result.push(item)
    }
    return result;
})

// const evennums = nums.filter((item)=>item%2==0)

console.log(result)