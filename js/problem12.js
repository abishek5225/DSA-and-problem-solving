//Seeing map() in action

let myMap = new Map();

myMap.set("name", "John");
myMap.set("age", 50);
myMap.set("gender", "male");
myMap.set("gender", "lauda");
myMap.set("dob", "1/1/1970");
myMap.set("age",100)

//console.log(myMap);

for(let container of myMap){
    console.log(container);
}