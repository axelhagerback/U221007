var list = document.createElement('ul');
var contactsArray;

showContacts = () => {
    contactList.hidden = false;
    list.innerHTML = '';
    const XHR = new XMLHttpRequest();

    XHR.onload = () => {
        contactsArray = JSON.parse(XHR.responseText);
        contactList.appendChild(list);

        contactsArray.forEach(contact => {
            var listRow = document.createElement('li');
            listRow.innerHTML = (`${contact.Name} || ${contact.Number}`)
            list.appendChild(listRow);
        });
    };
    XHR.open('GET', '/contacts');
    XHR.send();
};


saveContacts = () => {

};
