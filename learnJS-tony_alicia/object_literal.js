var aditya = {
    first_name: "Aditya",
    last_name: "Gupta",
    address: {
        city: "Lucknow",
        state: 'UP'
    },
};

console.log(aditya.first_name);

function greet(person) {
    console.log(person.last_name);
}
greet(aditya);


greet({last_name: 'Pansari'});