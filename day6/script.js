// // // // let numbers = [1, 2, 3];

// // // // let d=[...numbers];
// // // // d[9]=0;
// // // // console.log(d)
// // // // console.log(numbers)



// // // // console.log("1")
// // // // setTimeout(() => {
// // // //   alert("hi")
// // // // }, 3000);

// // // // let a=prompt("enter something");
// // // // console.log(a)


// // // function loginUser(username, callback) {
// // //   setTimeout(() => {
// // //     console.log("User logged in");
// // //     callback({ username });
// // //   }, 1000);
// // // }

// // // function data(obj){
// // //     console.log(obj)
// // // return obj;
// // // }

// // // loginUser("nitin",data)




// // function loginUser(username, callback) {
// //     setTimeout(() => {
// //         console.log("User logged in");
// //         callback({ username });
// //     }, 1000);
// // }

// // function getUserProfile(user, callback) {
// //     setTimeout(() => {
// //         console.log("Fetched user profile");
// //         callback({ ...user, profile: "Full Profile Data" });
// //     }, 1000);
// // }

// // function getUserPosts(profile, callback) {
// //     setTimeout(() => {
// //         console.log("Fetched user posts");
// //         callback(["Post 1", "Post 2"]);
// //     }, 1000);
// // }

// // function getPostComments(posts, callback) {
// //     setTimeout(() => {
// //         console.log("Fetched comments for posts");
// //         callback(["Nice post!", "Great read!"]);
// //     }, 1000);
// // }

// // // 🧨 Callback Hell in action
// // loginUser("john", function (user) {
// //     getUserProfile(user, function (profile) {
// //         getUserPosts(profile, function (posts) {
// //             getPostComments(posts, function (comments) {
// //                 console.log("comments")

// //             })
// //         })

// //     })

// // });
// let age = 33;

// let myPromise = new Promise((res, rej) => {
//     if (age < 7) {

//         res("hi");
//     }
//     else {
//         rej(123);
//     }



// });

// // myPromise.then((value) => {
// //     console.log(value)
// // })
// // .catch((e) => {
// //     console.log(e)
// // })


// async function p() {
//     try {

//         let data = await myPromise;
//         console.log(data);
//     } catch (x) {

//         console.log(x)
//     }
// }
// p()


let num1 = prompt("Enter the first number:" );
console.log(num1);
let num2 = prompt("Enter the second number:");
console.log(num2);

let operator = prompt("Choose an operation: +, -, *, /");
let result;
if (operator === "+") {
  result = num1 + num2;
} else if (operator === "-") {
  result = num1 - num2;
} else if (operator === "*") {
  result = num1 * num2;
} else if (operator === "/") {
  result = num1 / num2;
} else {
  result = "Invalid operator!";
}

alert("Result: " + result);