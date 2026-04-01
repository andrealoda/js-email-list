// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

// Bonus

// Abbellire con CSS o Bootstrap
// Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)


/*

creare array vuota
ciclo for con i <10 i++
nel ciclo, ogni i pusha nell'array ciò che restituisce l'API

in pagina inserisco ogni elemento dell'array in una riga della lista.
*/

const endPoint = 'https://flynn.boolean.careers/exercises/api/random/mail'
const emailUl = document.getElementById('email-list')

for (let i = 0; i < 10; i++) {
    fetch(endPoint)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const email = data.response
        
        const emailLi = document.createElement('li')
        emailLi.innerText = email
        emailUl.appendChild(emailLi)
    })
    .catch(error => {
        console.log("Controlla l'endpoint");
        
    })
}

