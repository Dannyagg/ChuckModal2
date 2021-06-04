'use strict';
    const modalElement = document.querySelector('#exampleModal');

    const myModal = new bootstrap.Modal(modalElement);

    fetch ('https://api.chucknorris.io/jokes/random?category=dev')
    
    .then(function(response) {
        return response.json();
    })

    .then(function (data) {
        // do something with the data
        const chuckQuote = document.querySelector('#chuckQuote');
        chuckQuote.innerText = data.value;
        myModal.show()

    })

    .catch(function (error) {
        console.error('ERROR:', error);
        return error;

});
