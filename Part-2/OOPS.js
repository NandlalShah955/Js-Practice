console.log("first");
function User(name, age, gender, profession) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.profession = profession;
}
let final_user = new User("ankit", 22, "male", "doctor");
console.log("final_user", final_user);
