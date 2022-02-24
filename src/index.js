const btn = document.querySelector('#btn');
const n1 = document.querySelector('#n1');
const n2 = document.querySelector('#n2');
const op = document.querySelector('#op');
const res = document.querySelector('#res');

// importo el css para que el loader lo procese
import './main.css'

import sum from './sum'
import substraction from './substraction'
import multiplication from './multiplication'
import division from './division'

var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
    'Usando React para inyectar codigo en el DOM',
    document.getElementById('container__react')
    
)

ReactDOM.render(
    <React.StrictMode>
           <h1>Este es el Home</h1>
    </React.StrictMode>,
    document.getElementById('container__react')
)


btn.addEventListener('click', e =>{
    switch(op.value){
        case '+':
            res.textContent = sum(n1.value, n2.value);
        break;
        case '-':
            res.textContent = substraction(n1.value, n2.value);
        break;
        case '*':
            res.textContent = multiplication(n1.value, n2.value);
        break;
        case '/':
            res.textContent = division(n1.value, n2.value);
        break;
    }
});