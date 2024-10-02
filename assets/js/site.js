// write cool JS hwere!!
import loadMultipleMeals from './modules/themealdb/themealdm.js';

loadMultipleMeals()

let darkbutton = document.getElementById('darkmode');

function darkbuttonclick() {
    document.body.classList.toggle('darkmode');
}
darkbutton.addEventListener('click', darkbuttonclick);
