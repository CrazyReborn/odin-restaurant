import Logo from './logo.png'

export function homePage() {
    const div = document.querySelector('#content');

    const image = document.createElement('img');
    image.setAttribute('id', 'logo');
    image.src = Logo;

    const para = document.createElement('p');
    const paraCont = document.createElement('div');
    para.textContent = 'The Best Way To Start Your Day Is To Start It With Our Delicious Pancakes!'
    paraCont.classList.add('main');
    paraCont.appendChild(para);
    paraCont.appendChild(image);
    div.appendChild(paraCont);
}