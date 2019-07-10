// easy approach to do function overloading in javascript.


function greet (a, b, lang) {

    lang = lang || "en";

    if(lang === 'en') {
        console.log(a + ' ' + b + ' ' + "hello");
    }
    if(lang === 'es') {
        console.log(a + ' ' + b + ' ' + "Hola");
    }

}
greet("adi", "sha");
greet("adi", "sha", "en");
greet("adi", "sha", "es");

function greetEnglish(a, b) {
    greet(a, b, 'en');
}

function greetSpanish(a, b) {
    greet(a, b, 'es');
}

greetEnglish('adi', 'sha');
greetSpanish('adi', 'sha');
