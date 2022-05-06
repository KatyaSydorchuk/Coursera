(function(){
let convertType = 'miles'; 
const heading = document.querySelector('h1'); 
const intro = document.querySelector('p'); 
const answerDiv = document.getElementById('answer'); 
const form = document.getElementById('convert');

document.addEventListener('keydown', (e) => {
    let key = e.code; 
    if (key === 'KeyK') {
        convertType = 'Kilometers'; 
        heading.innerHTML = "Kilometers to Miles converter"; 
        intro.innerHTML = 'Enter kilometers'; 

    } else if (key === 'KeyM'){
        convertType = 'miles'; 
        heading.innerHTML = "Miles to Kilometers converter"; 
        intro.innerHTML = 'Enter miles'; 
    }
}); 

form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    let distance = parseFloat(document.getElementById('distance').value); 

    if (distance) {
        if (convertType == 'Kilometers') {
            let roundNum = (distance * 0.621371192).toFixed(3); 
            answerDiv.innerHTML = `<h2> ${distance} kilometrs is ${roundNum} miles </h2> `
        } else if ( convertType == 'miles') {
            let roundNum = (distance * 1.609344).toFixed(3); 
            answerDiv.innerHTML = `<h2> ${distance} miles is ${roundNum} kilo </h2>`; 
        }

    } else {
        answerDiv.innerHTML = '<h2> Ener number </h2>'
    }
}); 
})(); 