export function contacts() {
    const contactForms = document.createElement('div');
    contactForms.textContent = 'Contacts';
    contactForms.classList.add('main');
    
    const phone = document.createElement('p');
    phone.textContent = 'Phone: 123 456 789';

    const email = document.createElement('p');
    email.textContent = 'E-mail: asdfghjk@hjkl.com';

    contactForms.appendChild(phone);
    contactForms.appendChild(email);
    document.querySelector('#content').appendChild(contactForms);
}