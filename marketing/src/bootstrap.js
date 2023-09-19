import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function mount(el){
    ReactDOM.render(<App />, el);
}

const el = document.querySelector('#_marketing-content');
if(el){
    mount(el);
}

export {mount};