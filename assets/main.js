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
const reloadBtn = document.getElementById('reload-btn')




function getAndPrintEmails() {
    emailUl.innerText = "";
    
    for (let i = 0; i < 10; i++) {
        fetch(endPoint)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const email = data.response
            
            const emailLi = document.createElement('li')
            emailLi.classList.add('list-group-item')
            emailUl.appendChild(emailLi)

            emailLi.innerText = email;
            
        })
    }
}

// genera la lista all'apertura della pagina
getAndPrintEmails();

// genera una nuova lista premendo il pulsante
reloadBtn.addEventListener('click', () => {
    getAndPrintEmails();
    console.log('click');
    
})



 



/* --- V2 --- */

// const endPoint = 'https://flynn.boolean.careers/exercises/api/random/mail'
// const emailUl = document.getElementById('email-list')
// const reloadBtn = document.getElementById('reload-btn')
// const emails = [];



// function getAndPrintEmails() {
//     emailUl.innerText = "";

//     for (let i = 0; i < 10; i++) {
//         fetch(endPoint)
//             .then(response => response.json())
//             .then(data => {
//                 const email = data.response
//                 emails.push(email);
//             })
//     }
// }
// getAndPrintEmails();
// console.log(emails);

// reloadBtn.addEventListener('click', () => {
//     getAndPrintEmails();
//     console.log('click');
// })



// function emailListAnimation(lista) {
//     for (let i = 0; i < lista.length; i++) {
//         const element = lista[i];
//         const emailLi = document.createElement('li')
//         emailUl.appendChild(emailLi)

//         emailLi.innerText = element;
//         textTypingEffect(emailLi, element);
//     }
// }
// emailListAnimation(emails);


// // genera una nuova lista premendo il pulsante

const title = document.getElementById('title')

// typing effect
function textTypingEffect(element, text, i = 0) {
    if (i === 0) {
        element.textContent = "";
    }
    element.textContent += text[i];
    if (i === text.length - 1) {
        return;
    }
    setTimeout(() => textTypingEffect(element, text, i + 1), 100);
}

textTypingEffect(title, title.textContent)