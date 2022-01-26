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

let immagine = '';
let thumbs = '';

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

let itemsContainer = document.querySelector('.picture');
itemsContainer.innerHTML = immagine;

//console.log(itemsContainer)

let thumbsContainer = document.querySelector('.slides');
//thumbsContainer.innerHTML = '<div class="arrow arrow-up"><i class="far fa-arrow-alt-circle-up"></i></div>' + thumbs + '<div class="arrow arrow-down"><i class="far fa-arrow-alt-circle-down"></i></div>';
//thumbsContainer.append(thumbs);
thumbsContainer.innerHTML += thumbs;

let up = document.querySelector('.arrow-up');
up.addEventListener('click',
    function() {

    }
)