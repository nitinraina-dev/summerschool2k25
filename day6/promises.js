function loginUser(username) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("User logged in");
            resolve({ username });
        }, 1000);
    });
}



function getUserProfile(user) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Fetched user profile");
            reject("reh");
        }, 1000);
    });
}




function getUserPosts(profile) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Fetched user posts");
            resolve(["Post 1", "Post 2"]);
        }, 1000);
    });
}




function getPostComments(posts) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Fetched comments for posts");
            resolve(["Nice post!", "Great read!"]);
        }, 1000);
    });
}


// loginUser("nitin")
// .then(user => getUserProfile(user))
//   .then(profile => getUserPosts(profile))
//   .then(posts => getPostComments(posts))
//   .then(comments => {
//     console.log("Final Result:", comments);
//   })
//   .catch(error => {
//     console.error("Something went wrong:", error);
//   });


  async function p(){
    try{

        let user=await loginUser("bnit");

        let profile=await getUserProfile(user);

        let posts= await getUserPosts(profile);
         
        let comments = await getPostComments(posts);

        console.log(comments)

    }catch(e){
console.log(e)
    }
  }

  p()