let submitBtn = document.getElementById('submitBtn'),
<<<<<<< HEAD
    links = document.querySelectorAll('.links');

submitBtn.addEventListener('click', (e) => {
    alert('i have been clicked');
});

// links.addEventListener('mouseenter', (e) => {
//     console.log('the mouse entered the links');
//     // links.removeEventListener('mouseenter', mouseEnter);
// });

let h1 = document.querySelector('h1');

h1.addEventListener('mouseover', (e) => {
    h1.style.backgroundcolor = 'red';
});

document.addEventListener('keyup', (e) => {
    console.log(e.code);
});

document.addEventListener('DOMContentLoaded', (e) => console.log('DOM Content Loaded'));
=======
    links = document.querySelector('.links'),
    h1 = document.querySelector('h1');

submitBtn.addEventListener('click', function(event) {
    alert('i have been clicked');
});


links.addEventListener('mouseenter', mouseEnter);

function mouseEnter() {
    console.log('the mouse entered the links');
    links.removeEventListener('mouseenter', mouseEnter);
}

h1.addEventListener('mouseover', () => {
    h1.style.color = 'red';
});

document.addEventListener('keyup', whatKeyPressed);

function whatKeyPressed(event) {
    console.log(event.code);
}

document.addEventListener('DOMContentLoaded', (e) => console.log('dom content loaded perfectly'));
>>>>>>> 8bcddbfb6ee1bf1719ea708fcfe5117aa63b6781
