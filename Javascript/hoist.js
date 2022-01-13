console.log(hello);
var hello = 'world';
// var hello = 'world';
// console.log(hello); logs undefined

var needle = 'haystack';
test();
function test() {
    var needle = 'magnet';
    console.log(needle);
}
//var needle = 'haystack';
//var needle = 'magnet'; sets needle in function scope
//console.log(needle); logs function scope of needle which is 'magnet'

var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// var brendan = 'super cool'; sets brendan var in scope
//     brendan = 'only okay'; sets brendan to 'only okay'
//     console.log(brendan); logs brendan var in function scope
// console.log(brendan); logs brendan var in scope

var food = 'chicken';
console.log(food);
eat();
function eat() {
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// var food = 'chicken'; sets var of food in scope
// console.log(food); logs food in scope
//     food = 'half-chicken'; set food to 'half-chicken'
//     console.log(food); logs food
//     var food = 'gone'; set var food again
// }

//mean();
console.log(food);
var mean = function () {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// mean(); not a function error

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// var genre = "disco"; set var genre to 'disco'
// console.log(genre); log undefined
// rewind();
// function rewind() { hoisted
//     genre = "rock"; set var
//     var genre = "r&b"; set another var
//     console.log(genre); log var
//     console.log(genre); log another var
// }
// console.log(genre); log disco var

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// dojo = "san jose"; set var
// console.log(dojo); log var
// learn(); call function
// function learn() { hoisted function
//     dojo = "seattle"; set var
//     var dojo = "burbank"; set var
//     console.log(dojo); log burbank
//     console.log(dojo); log burbank
// }
// console.log(dojo); log san jose
