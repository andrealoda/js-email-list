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
const emailLi = document.createElement('li')

fetch(endPoint)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        emailLi.innerText = data.response
        emailUl.appendChild(emailLi)

    })