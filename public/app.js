showContacts = () => {
    contactList.hidden = false;
    //contactList.innerHTML = '';

    const XHR = new XMLHttpRequest();

    XHR.onload = () => {
        Contacts = JSON.parse(XHR.responseText);

        var list = document.createElement('ul');
        contactList.appendChild(list);

        Contacts.forEach(contact => {
            var listRow = document.createElement('li');
            listRow.innerHTML = (`${contact.Name} || ${contact.Number}}`)
            list.appendChild(listRow);
        });
    };

    XHR.open('GET', '/contacts');
    XHR.send();



    
};

