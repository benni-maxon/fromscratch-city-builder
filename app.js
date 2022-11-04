/* Get DOM Elements */
const farmSelect = document.getElementById('farm-select');
const farmImg = document.getElementById('farm-img');
const farmChangeCounter = document.getElementById('farm-change-counter');
const professionSelect = document.getElementById('profession-select');
const professionImg = document.getElementById('profession-img');
const professionChangeCounter = document.getElementById('profession-change-counter');

/* State */
let farmCounter = 0;
let professionCounter = 0;

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
    professionImg.alt = `${id} profession thumbnail`;

    professionCounter++;

    professionChangeCounter.textContent = `You've changed professions ${professionCounter} times`;
});
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
