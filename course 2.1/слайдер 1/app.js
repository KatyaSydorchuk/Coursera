(function(){
    const myImage = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];
let  curentImage = 0; 



document.querySelector('#next').addEventListener('click', function() {
    curentImage++; 
    if (curentImage > myImage.length - 1) {
        curentImage = 0;
    }
    document.getElementById('myimage').src = myImage[curentImage];
})

document.querySelector('#previous').addEventListener('click', function() {
    // if (curentImage == 0) {
    //     curentImage = myImage.length - 1;
    // } else {
    //     curentImage--; 
    // }
    curentImage--; 
    if (curentImage < 0) {curentImage = myImage.length - 1}
   
    document.getElementById('myimage').src = myImage[curentImage];
})
})(); 