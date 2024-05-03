/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];
// let john =ages[0];
// let marry =ages[1];
// let joe =ages[2];
let [john, marry, joe] = ages;
console.log(john, marry, joe);
// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};
let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia);
// Destructuring subsets
let languages = ["english", "french", "spanish", "german", "japanesse"];

let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

let [, , maryNative, marySecondary] = languages; 
console.log(maryNative, marySecondary);

let languages2 = {
firstLanguage: "english",
secoundLanguage: "french",
thirdLanguage: "spanish",
forthLanguage: "german",
fifthLanguage: "japanesse"
}

let {firstLanguage, thirdLanguage} = languages2;
console.log(firstLanguage, thirdLanguage);

// Using rest parameter syntax
let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favorite, secoundFavorite, ...others] = fruits;
console.log(favorite);
console.log(secoundFavorite);
console.log(others);


let favoriteFoods = {
    brian: "pizza",
    anna: "hot dog",
    sarah: "pasta", 
    andreea: "steak"
};
let {brian, anna, ...rest} = favoriteFoods;
console.log(brian);
console.log(anna);
console.log(rest);