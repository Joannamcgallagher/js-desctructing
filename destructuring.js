/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
//not destructuring
let ages = [30, 26, 27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];


let [john, mary, joe] = ages;
console.log(john, mary, joe);


// Destructuring objects

let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
}

let { mike, jill, alicia} = jobs;
console.log(mike, jill, alicia);

// Destructuring subsets

let languages = ["eng", "fre", "spa", "ger", "jap"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);
//to skip the first two elements so Mary speaks spanish & german
let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);

//destructuring objects using property names
let languages2 = {
    firstlan: "eng",
    seclan: "fre",
    thirdlan: "ger",
    fourthlan: "jap",
};

let {firstlan, thirdlan} = languages2;
console.log(firstlan, thirdlan);

// Using rest parameter syntax

let fruits = ["apple", "ornage", "banana", "peach", "cherry"];

let [fav, secfav, ...others] = fruits;
console.log(fav, secfav, others);

let favFoods = {
    brian: "pizza",
    anna: "choclate",
    sarah: "tayto",
    andrea: "steak"
};

let { brian, anna, ...rest} = favFoods;
console.log(brian, anna, rest);