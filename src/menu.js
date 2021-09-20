import {menuItemsList} from './menu-items';

export function menuItems() {
    menuItemsList.forEach(e => {
        const element = document.createElement('div');
        const image = document.createElement('img');
        element.textContent = `${e.name} costs ${e.price}`;
        image.src = e.image;
        document.querySelector('#content').appendChild(image);
        document.querySelector('#content').appendChild(element);
    });
};