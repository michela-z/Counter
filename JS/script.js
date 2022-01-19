let btnAdd = document.querySelector('#btn-add');
let btnSub = document.querySelector('#btn-sub');

let counter = document.querySelector('#counter');

btnAdd.addEventListener('click', addNumber);
btnSub.addEventListener('click', subNumber);

let i = 0;

function addNumber() {
    counter.innerHTML = ++i;
}

function subNumber() {
    counter.innerHTML = --i;
}

let reset = document.querySelector('#reset');

reset.addEventListener('click', function() {
    i = 0;
    counter.innerHTML = i;
})
