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

function Products(name, imageFile = 'jpg', imgFile) {
    this.name = name;
    this.image = `img/${name}.${imageFile}`;
    this.votes = 0


    state.allProductsArray.push(this);
}

let bag = new Products('bag');
let banana = new Products('banana');
let bathroom = new Products('bathroom');
let boots = new Products('boots');
let breakfast = new Products('breakfast');
let bubblegum = new Products('bubblegum');
let chair = new Products('chair');
let cthulhu = new Products('cthulhu');
let dogDuck = new Products('dog-duck');
let dragon = new Products('dragon');
let pen = new Products('pen');
let petSweep = new Products('pet-sweep');
let scissors = new Products('scissors');
let shark = new Products('shark');
let sweep = new Products('sweep');
let tauntaun = new Products('tauntaun');
let unicorn = new Products('unicorn');
let waterCan = new Products('water-can');
let wineGlass = new Products('wine-glass');

console.log(state.allProductsArray);

//--------Functions------//

function getRandomIndex() {
    return Math.floor(Math.random() * state.allProductsArray.length);
}

function renderImg() {

    let indexOne = getRandomIndex();
    let indexTwo = getRandomIndex();
    let indexThree = getRandomIndex();



}

imgOne.src = state.allProductsArray[0].photo;
imgTwo.src = state.allProductsArray[1].photo;
imgThree.src = state.allProductsArray[2].photo;


//------------Event Handler-------//

function handleClick(event) {
    votesCounted--;

    let imgClicked = event.target.alt;
}

renderImg();