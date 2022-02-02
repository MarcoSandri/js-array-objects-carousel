const items = [
    {
        photo: 'img/01.jpg',
        title: "Svezia",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis."
    },
    {
        photo: 'img/02.jpg',
        title: "Svizzera",
        text: "Lorem ipsum."
    },
    {
        photo: 'img/03.jpg',
        title: "Gran Bretagna",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
    },
    {
        photo: 'img/04.jpg',
        title: "Germania",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam."
    },
    {
        photo: 'img/05.jpg',
        title: "Paradise",
        text: "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam."
    }
];

// Costanti di riferimento a contenitori di item e thumbnail
const itemsRef= document.getElementsByClassName('items')[0];
const thumbsRef = document.getElementsByClassName('thumbs')[0];

let active = 1;

for (let i = 0; i< items.length; i++) {
    // Recupero l'indirizzo dell'immagine
    let img = items[i].photo;
    console.log(img);

    // Recupero l'indirizzo del titolo
    let title = items[i].title;
    console.log(title);

    // Recupero l'indirizzo del testo
    let text = items[i].text;
    console.log(text);

    // Creo il contenitore con classe 'item'
    let item = document.createElement('div');
    item.classList.add('item');

    // Creo l'immagine
    const imgContainer = document.createElement('img');
    imgContainer.setAttribute('src', img);

    const imgThumb = document.createElement('img');
    imgThumb.setAttribute('src', img)

    // Creo il contenitore per la descrizione
    const description = document.createElement('div');
    description.classList.add('text');

    // Creo il tag h3 dove inserire il titolo
    const titleContainer = document.createElement('h3');
    titleContainer.innerText = title;

    // Creo il tag p dove inserire la didascalia
    const textContainer = document.createElement('p');
    textContainer.innerText = text;

    // Creo il contenitore con classe 'thumb'
    let thumb = document.createElement('div');
    thumb.classList.add('thumb');

    // Aggiungo img e descrizione al div con classe 'item'
    item.appendChild(imgContainer);
    item.appendChild(description);
    // Aggiungo titolo e testo alla descrizione
    description.appendChild(titleContainer);
    description.appendChild(textContainer);

    // Aggiungo l'immagine al div con classe 'thumb'
    thumb.appendChild(imgThumb);

    // Aggiungo i div con classe 'item' e 'thumb' rispettivamente ai contenitori items e thumbs
    itemsRef.appendChild(item);
    thumbsRef.appendChild(thumb);



}

document.getElementsByClassName('item')[active].classList.add('active');

document.getElementsByClassName('thumb')[active].classList.add('active');

const prev = document.querySelector('.prev');
prev.addEventListener('click', function() {
    if(active == 0) {
        active = items.length - 1;

        document.querySelector('.item.active').classList.remove('active');
        document.getElementsByClassName('item')[active].classList.add('active');

        document.querySelector('.thumb.active').classList.remove('active');
        document.getElementsByClassName('thumb')[active].classList.add('active');
    } else if(active < items.length) {
        --active
        document.querySelector('.item.active').classList.remove('active');
        document.getElementsByClassName('item')[active].classList.add('active');

        document.querySelector('.thumb.active').classList.remove('active');
        document.getElementsByClassName('thumb')[active].classList.add('active');
    }
});

const next = document.querySelector('.next');
next.addEventListener('click', function() {
    if(active < items.length - 1) {
        ++active
        document.querySelector('.item.active').classList.remove('active');
        document.getElementsByClassName('item')[active].classList.add('active');

        document.querySelector('.thumb.active').classList.remove('active');
        document.getElementsByClassName('thumb')[active].classList.add('active');
    } else if(active == items.length - 1) {
        active = 0;
        document.querySelector('.item.active').classList.remove('active');
        document.getElementsByClassName('item')[active].classList.add('active');

        document.querySelector('.thumb.active').classList.remove('active');
        document.getElementsByClassName('thumb')[active].classList.add('active');
    }
});