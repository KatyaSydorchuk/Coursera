(function(){
    let destinationDetailsForm = document.querySelector('#destination_details'); 
destinationDetailsForm.addEventListener('submit', handleFormSubmit); 

function handleFormSubmit(event) {
    event.preventDefault(); 
    let destName = event.target.elements['name'].value; 
    let destLocat = event.target.elements['location'].value; 
    let destPhoto = event.target.elements['photo'].value; 
    let destDescript = event.target.elements['description'].value; 
    
    for (let i = 0; i < destinationDetailsForm.length; i ++) {
        destinationDetailsForm.elements[i].value = ''; 
    }

     // Step 3 here
    let destCard = createDestCard(destName, destLocat, destPhoto, destDescript); 
   

    let wishListDest = document.querySelector('#destination_container'); 
    if (wishListDest.children.length === 0) {
        document.querySelector('#title').innerHTML = "Your Wish List"
    }

    document.querySelector('#destination_container').appendChild(destCard); 

}; 

function createDestCard (name, location, photoURL, description) {
    let card = document.createElement('div'); 
    card.className = "card"; 

    let img = document.createElement('img'); 
    img.setAttribute('alt', name); 

    let defaultImg = "images/signpost.jpg"; 

    if (photoURL.length === 0){
        img.setAttribute('src', defaultImg); 
    } else {
        img.setAttribute('src', photoURL); 
    }

    card.appendChild(img); 

    let cardBody = document.createElement('div');
    cardBody.className = 'card-body'; 

    let cardTitle = document.createElement('h3'); 
    cardTitle.innerText = name; 
    cardBody.appendChild(cardTitle); 

    let cardSubtitle = document.createElement('h4'); 
    cardSubtitle.innerText = location; 
    cardBody.appendChild(cardSubtitle);

    if (description.length !== 0){
        let cardText = document.createElement('p'); 
        cardText.className = "card-text"; 
        cardText.innerText = description; 
        cardBody.appendChild(cardText)
    }

    let removeBtn = document.createElement('button'); 
    removeBtn.innerText = 'Remove'; 
    removeBtn.addEventListener('click', removeDesctination); 
    cardBody.appendChild(removeBtn); 

    card.appendChild(cardBody); 
    
    return card; 
}


function removeDesctination (event) {
    let card = event.target.parentElement.parentElement; 
    card.remove();  
    
}



})(); 



