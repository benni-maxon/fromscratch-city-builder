/* Get DOM Elements */
const farmSelect = document.getElementId('farm-select');
const farmImg = document.getElementById('farm-img');
const farmChangeCounter = document.getElementById('farm-change-counter');

/* State */
let farmCounter = 0;

/* Events */
farmSelect.addEventListener('change', () => {
    const id = farmSelect.value;

    farmImg.src = `./assets/farm-${id}.png`;
    farmImg.alt = `${id} farm thumbnail`;

    farmCounter++;

    farmChangeCounter.textContent = `You've changed farms ${farmCounter} times`;
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
