import Logo from './logo.png';

export function constructor() {
    const image = document.createElement('img');
    image.src = Logo;
    const para = document.createElement('p');
    const head = document.createElement('h1');
    head.textContent = 'LOS POLOS HERMANOS';
    para.textContent = 'Best Chicken You Have Ever Tried!'
    document.body.appendChild(image);
    document.body.appendChild(head);
    document.body.appendChild(para);
}