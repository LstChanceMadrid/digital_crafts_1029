class Chore {
    constructor(title, priority, dateCreated, dateCompleted, isCompleted) {
        this.title = title
        this.priority = priority
        this.dateCreated = new Date()
        this.dateCompleted = dateCompleted
        this.isComplete = false
    }
}

module.exports = Chore