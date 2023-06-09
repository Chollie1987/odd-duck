'use strict'

//-------- Global Variables------//

let votes = 25;

let state = {
    allProductsArray: [],

    imgProducts: [],

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
};

//---------Retrieved from local storage-------//
let retrievedProducts = localStorage.getItem('products');

let parsedProducts = JSON.parse(retrievedProducts);

if(retrievedProducts){
    state.allProductsArray = parsedProducts;
} else {
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
let sweep = new Products('sweep', 'png');
let tauntaun = new Products('tauntaun');
let unicorn = new Products('unicorn');
let waterCan = new Products('water-can');
let wineGlass = new Products('wine-glass');
}

console.log(state.allProductsArray);

//--------Functions------//

function getRandomIndex() {
    return Math.floor(Math.random() * state.allProductsArray.length);
}

function renderImg() {
    
    while(state.imgProducts.length < 6){
    let randomImg = getRandomIndex();
    if (!state.imgProducts.includes(randomImg)){
        state.imgProducts.push(randomImg);
    }


    }
    console.log(state.imgProducts);
    let indexOne = state.imgProducts.shift();
    let indexTwo = state.imgProducts.shift();
    let indexThree = state.imgProducts.shift();
    
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
    let productViews = [];

    for(let i =0; i < state.allProductsArray.length; i++) {
        productNames.push(state.allProductsArray[i].name);
        productVotes.push(state.allProductsArray[i].votes);
        productViews.push(state.allProductsArray[i].views);
    }

    let resultsChart = {
        type: 'bar',
        data: {
        labels: productNames,
            datasets: [{
                label: '# of Votes',
                data: productVotes,
                borderWidth: 1
             },
               { label: '# of Views',
                 data: productViews,
                 borderWidth: 1}
            ]
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

//-------------Added to localStorage--------//

        let stringifiedProducts = JSON.stringify(state.allProductsArray);

        localStorage.setItem('products', stringifiedProducts);
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
