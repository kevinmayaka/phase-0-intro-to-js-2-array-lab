// Write your solution h
let cats = ["Milo", "Otis", "Garfield"];

console.log(cats);

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name, catsArray) {
    return [...catsArray, name];
}

function prependCat(name) {
    const newCatsArray = [...cats];
    newCatsArray.unshift("name")

}

function removeFirstCat(){
    return cats.slice(1);
    const newCatsArray = removeFirstCat(cats);
}

function removeLastCat(catsArray) {
    return catsArray.slice(0, -1);
}


