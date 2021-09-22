import {menuItemsList} from './menu-items';

export function menuItems() {
    const eleContainer = document.createElement('div');
    const pancakeListHeader = document.createElement('h2');
    pancakeListHeader.textContent = 'Pancakes';
    eleContainer.appendChild(pancakeListHeader);
    eleContainer.classList.add('main');
    menuItemsList.forEach(e => {
        const menuItemContainer = document.createElement('div');
        menuItemContainer.classList.add('menu-item-container');
        const element = document.createElement('p');
        const image = document.createElement('img');
        element.textContent = `${e.name} costs ${e.price}`;
        image.src = e.image;
        image.setAttribute('id', 'menu-item-image');
        menuItemContainer.appendChild(image);
        menuItemContainer.appendChild(element);
        eleContainer.appendChild(menuItemContainer);
    });
    document.querySelector('#content').appendChild(eleContainer);
};