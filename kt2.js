// free massiv
let phone_book = [];

// find phone number by name
function findPhoneNumber(array, name) {
    // every contact in array
    for (let i = 0; i < array.length; i++) {
        // if name matches
        if (array[i].name === name) {
            return array[i].phoneNumber;
        }
    }
    // if not found
    return "Ei löytynyt";
}

// main loop
let running = true;

while (running) {
    // main menu
    let choice = prompt("Valitse toiminto:\n1 - Lisää henkilö\n2 - Hae puhelinnumero\n3 - Lopeta");
    
    if (choice === "1") {
        // add person
        let name = prompt("Anna nimi:");
        let number = prompt("Anna puhelinnumero:");
        
        // add to phone book
        let person = {
            name: name,
            phoneNumber: number
        };
        phone_book.push(person);
        
        console.log("Henkilö lisätty");
        
    } else if (choice === "2") {
        // find phone number
        let searchName = prompt("Anna nimi:");
        let result = findPhoneNumber(phone_book, searchName);
        console.log("Puhelinnumero: " + result);
        
    } else if (choice === "3") {
        // stop program
        running = false;
        console.log("Ohjelma lopetettu");
    }
}