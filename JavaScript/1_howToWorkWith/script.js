let submitBtn = document.getElementById('submitBtn'),
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