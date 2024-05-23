// import React from "react";
import React from './react';
import ReactDOM from 'react-dom';

const element = React.createElement('div', { className: 'wrapper' }, React.createElement('span', null, 'hello'), React.createElement('span', null, 'osoLife'))
console.log(element)

// ReactDOM.render(element, document.getElementById('root'))