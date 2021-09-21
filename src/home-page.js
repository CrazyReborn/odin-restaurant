export function homePage() {
    const div = document.querySelector('#content');
    /*
    const image = document.createElement('img');
    image.src = Logo;
    */
    const para = document.createElement('p');
    const head = document.createElement('h1');
    head.textContent = 'PancakeLabs';
    para.textContent = 'The Best Way To Start Your Day Is To Start It With Our Delicious Pancakes!'
    // div.appendChild(image);
    div.appendChild(head);
    div.appendChild(para);
}