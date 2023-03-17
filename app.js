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
const ctx = document.getElementById('resultsChart');

//-------Constructor Function------//

function Products(name, imageFile = 'jpg', imgFile) {
    this.name = name;
    this.votes = 0;
    this.views = 0;
    this.image = `./img/${name}.${imageFile}`;


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
// let sweep = new Products('sweep', );
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
    
    while(indexOne === indexTwo){
        indexTwo = getRandomIndex();
        while(indexTwo === indexThree){
            indexThree = getRandomIndex();
            while(indexThree === indexOne){
                indexOne = getRandomIndex();
            }
        }
    }
    imgOne.src = state.allProductsArray[indexOne].image;
    imgOne.alt = state.allProductsArray[indexOne].name;
    state.allProductsArray[indexOne].views++;
    
    imgTwo.src = state.allProductsArray[indexTwo].image;
    imgTwo.alt = state.allProductsArray[indexTwo].name;
    state.allProductsArray[indexTwo].views++;
    
    imgThree.src = state.allProductsArray[indexThree].image;
    imgThree.alt = state.allProductsArray[indexThree].name;
    state.allProductsArray[indexThree].views++;
    
};

//------------Function Chart--------//

function renderChart(){

    ctx.style.display = 'block';
    let productNames = [];
    let productVotes = [];

    for(let i =0; i < state.allProductsArray.length; i++) {
        productNames.push(state.allProductsArray[i].name);
        productVotes.push(state.allProductsArray[i].votes);
    }

    let resultsChart = {
        type: 'bar',
        data: {
        labels: productNames,
            datasets: [{
                label: '# of Votes',
                data: productVotes,
                borderWidth: 1
            }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
}

    new Chart(ctx, resultsChart);
        

}
// console.log(state.allProductsArray[indexOne].image);
// console.log(indexOne)
// console.log(state.allProductsArray[16].image);


//------------Event Handler-------//

function handleClick(event) {
    console.log(event.target);
    votes--;

    let imgClicked = event.target.alt;
    for(let i = 0; i < state.allProductsArray.length; i++){
        if(imgClicked === state.allProductsArray[i].name){
            console.log(imgClicked,state.allProductsArray[i].name);
            state.allProductsArray[i].votes++
        
        }
    }
    if(votes === 0){
        imgContainer.removeEventListener('click', handleClick);
    }
renderImg();
}



//-----------Results Function---------//

function handleResults(){
    console.log(votes);
    if(votes === 0){
        for(let i = 0; i < state.allProductsArray.length; i++){
            let liElement = document.createElement('li');
             liElement.textContent = `${state.allProductsArray[i].name} was shown ${state.allProductsArray[i].views} and had ${state.allProductsArray[i].votes} votes`
            votesList.append(liElement);
        }
        votesButton.style.display = 'none';
        renderChart();
    }
}

//----------- Event listener----------//

imgContainer.addEventListener('click', handleClick);
votesButton.addEventListener('click', handleResults);

renderImg();
