(function(){
let curentImg = 0; 
const img = ['slides/image1.jpg', 'slides/image2.jpg', 'slides/image3.jpg', 'slides/image4.jpg', 'slides/image5.jpg']

const content = document.querySelector('#content');
const nextBtn = document.querySelector('#next'); 
const previousBtn = document.querySelector('#previous'); 

function slider () {
    let newSlide = document.createElement('img'); 
    newSlide.src = img[curentImg]; 
    newSlide.className = "fadeinimg"; 
    content.appendChild(newSlide); 

    if (content.children.length > 2) {content.removeChild(content.children[0])};
}

nextBtn.addEventListener('click', (event) => {
    event.preventDefault(); 

    curentImg ++; 
    if (curentImg > (img.length -1)) {curentImg = 0}; 

   slider(); 
}); 

previousBtn.addEventListener('click', (event) => {
    event.preventDefault(); 

    curentImg --; 
    if (curentImg < 0) {curentImg = (img.length - 1)}; 

    slider();
}); 
})(); 