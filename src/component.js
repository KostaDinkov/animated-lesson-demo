import _join from 'lodash/join';
import './style.css'
import printMe from './print';

export default function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  btn.innerHTML = 'Click me';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}



