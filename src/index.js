import _join from 'lodash/join';
import './style.css'
import printMe from './print';

function component() {
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

let element = component();
document.body.appendChild(element);

if(module.hot){
  module.hot.accept('./print.js',function(){
    console.log('Accepting the updated printMe module');
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  })

}