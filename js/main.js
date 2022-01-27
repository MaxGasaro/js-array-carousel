//definisco le variabili const per creare le stringhe in maniera dinamica
const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

//definisco variabili per 'inserire' il codice javascript nel DOM
let immagine = '';
let thumbs = '';

//ciclo for per scorrere gli array e immettere imamgine con relative caption nell'HTML
for (let i = 0 ; i < items.length; i++) {

    immagine += `<div class="img-container">

                    <img class="selected" src="${items[i]}">

                    <div class="caption">
                        <h3>${title[i]}</h3>
                        <p>${text[i]}</p>
                    </div>

                </div>`;

    thumbs += `<div class="img">

                    <img src="${items[i]}">

                </div>`
}

//stampo le immagini create nel ciclo for
let itemsContainer = document.querySelector('.picture');
itemsContainer.innerHTML = immagine;

//console.log(itemsContainer)

let thumbsContainer = document.querySelector('.slides');
//thumbsContainer.innerHTML = '<div class="arrow arrow-up"><i class="far fa-arrow-alt-circle-up"></i></div>' + thumbs + '<div class="arrow arrow-down"><i class="far fa-arrow-alt-circle-down"></i></div>';
//thumbsContainer.append(thumbs);
thumbsContainer.innerHTML += thumbs;

//inizializzo a 0 la variabile che mi permetterà di spostarmi al click delle frecce
//questa è la slide che vedremo all'apertura del sito
let currentSlide = 0;

//stampo il primo elemento all'apertura del sito aggiungendo la classe showed all'img
let elements = document.getElementsByClassName('img-container');
elements[currentSlide].classList.add('showed');
//aggiungo la classe active alle thumbs
let active = document.getElementsByClassName('img');
active[currentSlide].classList.add('active');

//ascoltatore evento per freccia in giù
let down = document.querySelector('.arrow-down');
down.addEventListener('click',
    function() {
        if (currentSlide < items.length - 1) {

            elements[currentSlide].classList.remove('showed');
            active[currentSlide].classList.remove('active');
            currentSlide++; //vado alla slide seguente
            elements[currentSlide].classList.add('showed');
            active[currentSlide].classList.add('active');

        } else { //ora rendo lo scorrimento infinito 

            elements[currentSlide].classList.remove('showed');
            active[currentSlide].classList.remove('active');
            currentSlide = 0; //reimposto a 0 la variabile per la prima slide
            elements[currentSlide].classList.add('showed');
            active[currentSlide].classList.add('active');

        }

    }
)

//ascoltatore evento per freccia in su
let up = document.querySelector('.arrow-up');
up.addEventListener('click',
    function() {

        if (currentSlide > 0) {

            elements[currentSlide].classList.remove('showed');
            active[currentSlide].classList.remove('active');
            currentSlide--; //vado alla slide precedente
            elements[currentSlide].classList.add('showed');
            active[currentSlide].classList.add('active');

        } else {

            elements[currentSlide].classList.remove('showed');
            active[currentSlide].classList.remove('active');
            currentSlide = items.length - 1; //reimposto la variabile all'ultima slide
            elements[currentSlide].classList.add('showed');
            active[currentSlide].classList.add('active');

        }

    }
)