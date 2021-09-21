import {homePage} from './home-page';
import {menuItems} from './menu';
import {contacts} from './contact';


function navBar() {
    const naviBar = document.createElement('ul');
    const home = document.createElement('li');
    const menu = document.createElement('li');
    const contact  = document.createElement('li');
    
    home.textContent = 'Home';
    menu.textContent = 'Menu';
    contact.textContent = 'Contacts';

    naviBar.appendChild(home);
    naviBar.appendChild(menu);
    naviBar.appendChild(contact);
    document.querySelector('#content').appendChild(naviBar);

    home.addEventListener('click', e=> {
        document.querySelector('#content').innerHTML = '';
        navBar();
        homePage();
    })
    
    menu.addEventListener('click', e=> {
        document.querySelector('#content').innerHTML = '';
        navBar();
        menuItems();
    })

    contact.addEventListener('click', e=> {
        document.querySelector('#content').innerHTML = '';
        navBar();
        contacts();
    })
}

navBar();
homePage();