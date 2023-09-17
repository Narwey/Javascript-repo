const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const contacts = [];
const phoneNumberPattern = /^(05|06|07)\d{8}$/;
function validatePhoneNumber(input) {
    return phoneNumberPattern.test(input);
}

function addContact() {
    rl.question('Enter the name: ', (name) => {
        rl.question('Enter the phone number : ', (number) => {
            if (validatePhoneNumber(number)) {
                contacts.push({ name, number });
                console.log('Contact added successfully!\n');
            } else {
                console.log('Invalid phone number format. Contact not added.\n');
            }
            rl.prompt();
        });
    });
}
function viewContacts() {
    if (contacts.length === 0) {
        console.log('No contacts to display.\n');
    } else {
        console.log('List of contacts:');
        contacts.forEach((contact, index) => {
            console.log(`${index + 1}. Name: ${contact.name}, Phone Number: ${contact.number}`);
        });
        console.log('');
    }
    rl.prompt();
}
function searchContact() {
    rl.question('Enter the name to search: ', (name) => {
        const foundContact = contacts.find((contact) => contact.name === name);

        if (foundContact) {
            console.log(`Contact exist - Name: ${foundContact.name}, Phone Number: ${foundContact.number}\n`);
        } else {
            console.log('Contact does not exist.\n');
        }
        rl.prompt();
    });
}
function exitApplication() {
    console.log('Exit');
    rl.close();
}
// Start 
rl.setPrompt('Enter a command (adding/view/search/exit): ');
rl.prompt();
rl.on('line', (input) => {
    const command = input.trim().toLowerCase();
    if (command === 'adding') {
        addContact();
    } else if (command === 'view') {
        viewContacts();
    } else if (command === 'search') {
        searchContact();
    } else if (command === 'exit') {
        exitApplication();
    } else {
        console.log('Invalid command. Please enter "add" to add a contact, "view" to view contacts, "search" to search for a contact, or "exit" to exit the application.\n');
        rl.prompt();
    }
}).on('close', () => {
    console.log('See ya next time buddy');
    process.exit(0);
});



    


