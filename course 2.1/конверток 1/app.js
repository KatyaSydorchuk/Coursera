(function(){
    document.getElementById('convert').addEventListener('submit', (e) => {
        e.preventDefault(); 
        let distance = parseFloat(document.getElementById('distance').value);
        const answer = document.getElementById('answer'); 
    
        if (distance) {
            let convertNum = Math.round((distance * 1.609344) * 1000) / 1000; 
        //    let con = (Math.round(convertNum * 1000)) / 1000; 
        answer.innerHTML = `<h2> ${distance} convert in ${convertNum} </h2>`
        } else {
           answer.innerHTML = '<h2> Enter number</h2>'
        }
    }); 
})(); 