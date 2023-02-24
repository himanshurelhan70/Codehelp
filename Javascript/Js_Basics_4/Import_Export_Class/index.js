// default and named import
import User, {printName, printAge} from './form.mjs';

// const user1 = new User('Himanshu', 23);
// console.log(user1);
// printName(user1);
// printAge(user1);
 

const user1 = new User('Himanshu', 23);
user1.setProfession = "jaadugar";
console.log(user1.getProfession); 