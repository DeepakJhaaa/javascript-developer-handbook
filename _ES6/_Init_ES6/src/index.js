import message from './message';
import './index.scss';

const paragraph = document.createElement('p');
//paragraph.innerHTML = message;

document.body.prepend(paragraph);

const rootDiv = document.createElement('div');
rootDiv.innerHTML = message;
document.body.prepend(rootDiv);;