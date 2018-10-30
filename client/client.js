
let saveChoreButton = document.getElementById('save-chore-button');
let choresList = document.getElementById('chores-list');
let choreTextBox = document.getElementById('chore-text-box');
let priorityTextBox = document.getElementById('priority-text-box')
let completeTaskButton = document.getElementsByClassName('complete-task-button')


saveChoreButton.addEventListener('click', ()  => {
    
    let title = choreTextBox.value;
    let priority = priorityTextBox.value;
    let dateCreated = new Date();
    let isComplete = false
    let dateCompleted = null
    console.log(dateCreated)


    let chore = {
        title : title,
        priority : priority,
        dateCreated : dateCreated,
        isComplete : isComplete,
        dateCompleted : dateCompleted
    }

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
    let todoItem = chores.map(chore => {
        return `<li>
        Task: ${chore.title}<br />
        Priority: ${chore.priority}<br />
        Date Created: ${chore.dateCreated}<br />
        Is Completed: ${chore.isComplete}<br />
        Date Completed ${chore.dateCompleted}<br />
        <button class="complete-task-button" onClick="completeTask(this)">Completed</button>
        </li>`
    })
    choresList.innerHTML = todoItem.join('')
}

const completeTask = (chore) => {

    
    isComplete = true
    dateCompleted = new Date()
    console.log(isComplete)
}