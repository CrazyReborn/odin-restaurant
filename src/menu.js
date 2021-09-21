import {menuItemsList} from './menu-items';

export function menuItems() {
    const eleContainer = document.createElement('div');
    const pancakeListPara = document.createElement('p');
    pancakeListPara.textContent = 'Pancakes';
    eleContainer.appendChild(pancakeListPara);
    eleContainer.classList.add('menu-container');
    menuItemsList.forEach(e => {
        const menuItemContainer = document.createElement('div');
        menuItemContainer.classList.add('menu-item-container');
        const element = document.createElement('p');
        const image = document.createElement('img');
        element.textContent = `${e.name} costs ${e.price}`;
        image.src = e.image;
        menuItemContainer.appendChild(image);
        menuItemContainer.appendChild(element);
        eleContainer.appendChild(menuItemContainer);
    });
    document.querySelector('#content').appendChild(eleContainer);
};