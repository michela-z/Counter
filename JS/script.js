//container di tutto
let container = document.querySelector('.container');

// div contenitore dei bottoni
let btnContainer = document.createElement('div')

// bottoni +, - e reset
let btnAdd = document.createElement('button');
let btnSub = document.createElement('button');
let reset = document.createElement('button');

//classi e testo all'interno dei bottoni
btnContainer.className = 'btn-container';

btnAdd.innerHTML = '+';
btnAdd.className = 'btn';

btnSub.innerHTML = '-';
btnSub.className = 'btn';

reset.innerHTML = 'reset';
reset.className = 'reset';

// etichette dei bottoni
let textB1 = document.createElement('p');
let textB2 = document.createElement('p');

textB1.innerText = 'aggiungi un numero';
textB1.classList = 'text';

textB2.innerText = 'sottrai un numero';
textB2.classList = 'text';

// inserire elementi creati all'interno
container.prepend(btnContainer);
btnContainer.append(btnAdd, btnSub);

btnAdd.append(textB1);
btnSub.append(textB2);

// creazione e inserimento del counter nel dom
let counter = document.createElement('div');
counter.innerHTML = '0'
counter.className = 'counter';
container.prepend(reset, counter);

// aggiungere funzionalità a tutti gli elementi
btnAdd.addEventListener('click', addNumber);
btnSub.addEventListener('click', subNumber);

let i = 0;

function addNumber() {
    counter.innerHTML = ++i;
}

function subNumber() {
    counter.innerHTML = --i;
}

reset.addEventListener('click', function() {
    i = 0;
    counter.innerHTML = i;
})
