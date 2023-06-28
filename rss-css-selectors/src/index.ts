import 'normalize.css';
import './sass/main.scss';

import { getGameCode } from './modules/getGameCode';
import { connectElemsAndCode } from './modules/connectElemsAndCode';

const table = document.querySelector('.table') as HTMLDivElement;
const gameCode = document.querySelector('.editor_viewer .editor__codefield') as HTMLDivElement;
gameCode.innerHTML = '';
gameCode.insertAdjacentElement('beforeend', getGameCode(table));

connectElemsAndCode(table, gameCode);
