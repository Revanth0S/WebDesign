<<<<<<< HEAD
let firstlist_item = document.getElementById('text-1'),
    mylistitem = document.getElementsByClassName('mylist'),
    Paragraph = document.getElementsByTagName('p'),
    images = document.querySelectorAll('img'); 


firstlist_item.style.color = 'blue';
mylistitem[1].style.color = 'red';
for (let index = 0; index < Paragraph.length; index++) {
    Paragraph[index].style.color = 'blue';
} 
=======
let firstItem = document.getElementById('text-1'),
    myList = document.getElementsByClassName('mylist'),
    paragraphs = document.getElementsByTagName('p'),
    images = document.querySelectorAll('img'); 

console.log(images);

firstItem.style.color = 'red';

myList[1].style.display = 'none';

for (let index = 0; index < paragraphs.length; index++) {
    paragraphs[index].style.color = 'blue';
}
>>>>>>> 8bcddbfb6ee1bf1719ea708fcfe5117aa63b6781

