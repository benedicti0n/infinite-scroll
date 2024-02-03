const URL = 'https://i.pravatar.cc/250?img=';
const container = document.querySelector('.container');

numImages = 24;

function getRandomNumber(){
    return Math.floor(Math.random()*70);
}

function loadImages(numImages){
    let i = 0;
    while(i<numImages){
        const img = document.createElement('img');
        img.src = `${URL}${getRandomNumber()}`;
        container.appendChild(img);
        i++;
    }
}

loadImages(numImages)



window.addEventListener('scroll', () => {
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
        loadImages(numImages);
    }
})