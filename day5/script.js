let student = {
    name: "laksh",
    age: 18,
    sem: "3",
}


// if (student.age > 18) {
//     console.log(student.name, "can vote", student.name + "'s", "Age is ", student.age)
// } else {
//     console.log(`${student.name} can not  vote ${student.name}'s age is ${student.age}  `)
// }

console.log(typeof 1);
console.log(typeof "12");

console.log(1 !== "1")



// nested if else 


// if (student.age > 17) {
//     console.log("inside if")
//     if (student.name == "laksh") {

//         if (student.sem === 3) {
//             console.log("can not vote")
//         }


//     } else {
//         console.log("can vote")
//     }

// } else {
//     console.log("inside else")
//     if (student.name == "laksh") {
//         console.log("now he can vote");

//     }
//     console.log("last line of else")
// }
  

// else if ladder

// if(student.name=="laksh ji"){
// console.log("inside if");

// }else if(student.age==19){
// console.log("inside elseif");

// }else{

// console.log("else");
// }






// switch(false){
//     case false:
//         console.log("can vote");
        
//     case false:
//         console.log("can not vote");
//         break;
//     default:
//         console.log("default")



// }




let arr=[10,7,8,9,4,5,"end of array"]


// for (let a=0;a<arr.length;a++){

//     console.log(arr[a])

// }



let countdown = 0;

do {
    console.log(`🚀 Launching in... ${countdown}`);
    countdown--;
}while (countdown > 0);

console.log("🔥 Boom! The rocket has launched!");




function xyz(user="User"){
console.log("Greetings " , user)
}


xyz()

const greet = function(user) {
  console.log("Hello from a function expression!",user);
};

greet("hello");

const add = (a, b) => a+b;

console.log(add(4,5)); // 



((user)=> {
  console.log("This function runs immediately!",user);
})("nitin");


(function(){
    return "hi"
})()



















function processUser(name, callback) {
  console.log(`Processing user: ${name}`);
  callback();
}










function done() {
  console.log("Done processing.");
}

processUser("nitin",done)



processUser("Alice", function(){
    console.log("simple function declaration")
});
processUser("Alice", ()=>{
    console.log("arrow function")
});