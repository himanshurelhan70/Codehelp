// default exports - can only be used once in a file
export default class User{
    #profession = "developer"; //private variable
    // we can also use _ to create private variables _profession

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    get getProfession(){
        return this.#profession;
    }

    set setProfession(value){
        this.#profession = value;
    }
}

// named exports
export function printName(user){
    console.log(`User's name is ${user.name}`);
}

export function printAge(user){
    console.log(`User's is ${user.age} year old`);
}

// export default User;
// export {printName, printAge};