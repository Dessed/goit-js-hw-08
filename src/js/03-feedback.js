import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form')
const refs = form.elements;
console.log(refs);

const LOCALSTORAGE_KEY = "feedback-form-state";

form.addEventListener('submit', removeLocalStorageKey);

Array.from(refs).forEach(e => {
    if (e.tagName !== "BUTTON"){
        e.addEventListener('input', throttle(localStorageValue, 500));
    } 
});
outputValue ();

function removeLocalStorageKey (evt) {
    evt.preventDefault();

    evt.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
}

function localStorageValue () {
    const message = {};
 Array.from(refs).forEach(e => {
    if (e.tagName !== "BUTTON") {
    message [e.name] = e.value;
    }
})

console.log(message);
   localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(message));
}

function outputValue () {
const savedValue = localStorage.getItem(LOCALSTORAGE_KEY);
const parsedValue = JSON.parse(savedValue);

if (savedValue) {
    Object.keys(parsedValue).forEach ((e, i) => {
        refs[i].value = parsedValue[e];
    })
    }  
}






// ['click', 'scroll'].forEach (e => {
//     document.addEventListener(e, () => console.log(e)) 
// })


