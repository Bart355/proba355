/*
* File: app.js
* Author: Bodolay Artúr
* Copyright: 2022, Bodolay Artúr
* Group: Szoft I./2
* Date: 2021-09-03
* Github: https://github.com/janos/
* Licenc: GNU GPL
*/


var gyumolcsokTomb=[
    'alma',
    'körte',
    'barack',
    'szilva',
    'banán'
];

const mutatGomb = document.querySelector('#mutatGomb');
const ul = document.querySelector('#gyumolcsok');

mutatGomb.addEventListener('click',() =>{
    console.log('működik')

    gyumolcsokTomb.forEach(gyumolcs =>{
        console.log(gyumolcs)
        let li =  document.createElement('li');
        li.textContent = gyumolcs;
        ul.appendChild(li);

    } );
})