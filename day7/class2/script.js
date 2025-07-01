class User {
//   constructor() {
//     this.name="Nitin"
//     this.age=9
//     console.log(this)
//   }
  say(name="nitin"){
    this.name=name
    console.log(this)
  }
}


const user = new User;
user.say();

const user2=new User;
user2.say("hi")