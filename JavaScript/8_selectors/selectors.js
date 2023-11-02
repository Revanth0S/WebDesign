let firstlist_item = document.getElementById('text-1'),
    mylistitem = document.getElementsByClassName('mylist'),
    Paragraph = document.getElementsByTagName('p'),
    images = document.querySelectorAll('img'); 


firstlist_item.style.color = 'blue';
mylistitem[1].style.color = 'red';
for (let index = 0; index < Paragraph.length; index++) {
    Paragraph[index].style.color = 'blue';
} 

