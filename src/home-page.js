import Logo from './logo.jpg';

export function homePage() {
    const div = document.querySelector('#content');
    const image = document.createElement('img');
    image.src = Logo;
    const para = document.createElement('p');
    const head = document.createElement('h1');
    head.textContent = 'Polska Babcia';
    para.textContent = 'The Best Polish Food!'
    div.appendChild(image);
    div.appendChild(head);
    div.appendChild(para);
}