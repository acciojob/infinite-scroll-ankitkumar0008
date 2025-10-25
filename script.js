//your code here!

let ol = document.getElementById('infi-list');

let count = 1;

function addItem(num) {
for(let i=0; i < num; i++) {

let li = document.createElement('li');

li.textContent = `Item ${count}`;

ol.appendChild(li);

count++;
}

}
addItem(10);
 ol.addEventListener('scroll', () => {

if (ol.scrollTop+ ol.clientHeight >= ol.scrollHeight) {

}

addItem(2);

});