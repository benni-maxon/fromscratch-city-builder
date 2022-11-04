/* Get DOM Elements */
const farmSelect = document.getElementById('farm-select');
const farmImg = document.getElementById('farm-img');
const farmChangeCounter = document.getElementById('farm-change-counter');

const professionSelect = document.getElementById('profession-select');
const professionImg = document.getElementById('profession-img');
const professionChangeCounter = document.getElementById('profession-change-counter');

const romanceSelect = document.getElementById('romance-select');
const romanceImg = document.getElementById('romance-img');
const romanceChangeCounter = document.getElementById('romance-change-counter');

const favoriteInput = document.getElementById('favorite-input');
const okButton = document.getElementById('ok-button');
const favoriteList = document.getElementById('favorite-list');

/* State */
let farmCounter = 0;
let professionCounter = 0;
let romanceCounter = 0;
let favoriteArray = [];

/* Events */
farmSelect.addEventListener('change', () => {
    const id = farmSelect.value;

    farmImg.src = `./assets/farm-${id}.png`;
    farmImg.alt = `${id} farm thumbnail`;

    farmCounter++;

    farmChangeCounter.textContent = `You've changed farms ${farmCounter} times`;
});

professionSelect.addEventListener('change', () => {
    const id = professionSelect.value;

    professionImg.src = `./assets/profession-${id}.gif`;
    professionImg.alt = `${id} profession gif`;

    professionCounter++;

    professionChangeCounter.textContent = `You've changed professions ${professionCounter} times`;
});

romanceSelect.addEventListener('change', () => {
    const id = romanceSelect.value;

    romanceImg.src = `./assets/romance-${id}.png`;
    romanceImg.alt = `${id} character portrait`;

    romanceCounter++;

    romanceChangeCounter.textContent = `You've changed partners ${romanceCounter} times`;
});

okButton.addEventListener('click', () => {
    const newFavorite = favoriteInput.value;

    favoriteArray.push(newFavorite);

    favoriteList.textContent = '';

    for (let favorite of favoriteArray) {
        const p = document.createElement('p');

        p.classList.add('favorite');

        p.textContent = favorite;

        favoriteList.append(p);
    }

    favoriteInput.value = '';
});
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
