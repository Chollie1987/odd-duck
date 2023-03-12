'use strict'

//-------- Global Variables------//

let votes = 25;

let state = {
    allProductsArray: [],
};

let imgContainer = document.getElementById('products');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');
let votesButton = document.getElementById('votes-button');
let votesList = document.getElementById('results-list');

//-------Constructor Function------//

function ( name, imageFile = 'jpg', imgFile) {
    this.name = name;
    this.image = `img/${name}.${imageFile}`;
    this.votes = 0 


    state.allProductsArray.push(this);
}

let bag = new product('bag');
let banana = new product('banana');
let bathroom = new product('bathroom');
let boots = new product('boots');
let breakfast = new product('breakfast');
let bubblegum = new product('bubblegum');
let chair = new product('chair');
let cthulhu = new product('cthulhu');
let dogDuck = new product('dog-duck');
let dragon = new product('dragon');
let pen = new product('pen');
let petSweep = new product('pet-sweep');
let scissors = new product('scissors');
let shark = new product('shark');
let sweep = new product('sweep');
let tauntaun = new product('tauntaun');
let unicorn = new product('unicorn');
let waterCan = new product('water-can');
let wineGlass = new product('wine-glass');

console.log(state.allProductsArray);