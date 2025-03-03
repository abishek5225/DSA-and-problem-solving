//finding intersection of two arrays 
/*
function interSection(arr1,arr2){
    let set1=new Set(arr1);
    let result=[]

    for(let num of arr2){
        if(set1.has(num)){
            result.push(num);
            set1.delete(num);
        }
    }
    return result
}
console.log(interSection([1,2,2,3,3,4],[2,3,3,4,5]));

*/

//using filter

function interSection(arr1,arr2){
    let set1=new Set(arr1);
    return arr2.filter(num=>set1.has(num))
}
console.log(interSection([1,2,2,3,3,4],[2,3,3,4,5]));