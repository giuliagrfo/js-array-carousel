// Creo array slides

const slides = [
'./assets/img/01.webp',
'./assets/img/02.webp',
'./assets/img/03.webp',
'./assets/img/04.webp',
'./assets/img/05.webp'
]
// stampo in console array 
console.log(slides);


// seleziono elemento della DOM dove inserire le immagini
const slidesElement = document.querySelector('.slides');

// scorro le immagini nell'array e le inserisco dinamicamente nell'elemento della DOM
for (let i = 0; i < slides.length; i++) {
    const slideImg = slides[i];
    const slideToCreate = `<img class="active" src="${slideImg}" alt="">`;
    slidesElement.insertAdjacentHTML('beforeend', slideToCreate);
    console.log(slideToCreate);
}