import './style.scss';
import { increaseTime, decreaseTime, startTimer, resetTimer, updateDisplay } from './timer';

document.getElementById('up-btn').addEventListener('click', increaseTime);
document.getElementById('down-btn').addEventListener('click', decreaseTime);
document.getElementById('start-btn').addEventListener('click', startTimer);
document.getElementById('reset-btn').addEventListener('click', resetTimer);
updateDisplay();