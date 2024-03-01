const nbrPhoto = 126;

const gallery = document.querySelector('.gallery');

for(let i = 1; i < nbrPhoto+1; i++){
    const listItem = document.createElement('li');
    listItem.classList.add('photo');
    const image = document.createElement('img');
    image.src = `media/betton (${i}).jpg`;

    listItem.appendChild(image);
    gallery.appendChild(listItem)
}