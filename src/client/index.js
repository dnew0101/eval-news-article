// js files
import {handleSubmit} from './js/formHandler.js'

//scss files
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'


//handleSubmit was undefined in the html doc, but works fine here
window.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn');
    btn.addEventListener('click', () => {
        handleSubmit();
    })
})
export {handleSubmit}