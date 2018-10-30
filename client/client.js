
let saveChoreButton = document.getElementById('save-chore-button');
let choresList = document.getElementById('chores-list');
let choreTextBox = document.getElementById('chore-text-box');

saveChoreButton.addEventListener('click',  function() {

    let choreName = choreTextBox.value;

    let chore = {choreName : choreName}

    fetch('http://localhost:3000/chores', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(chore)
    })
});



fetch('http://localhost:3000/chores')
.then(response => {
    return response.json()
}).then(chores => {
    console.log(chores);
    displayChores(chores)
})

const displayChores = (chores) => {
    let choreItems = chores.map(chore => {
        return `<li>${chore.choreName}</li>`
    })
    choresList.innerHTML = choreItems.join('')
}