var todos = [];
function addTodo(title) {
    todos.push({ title: title, completed: false });
}
function markCompleted(index) {
    if (todos[index]) {
        todos[index].completed = true;
    }
}
addTodo("Learn TypeScript");
markCompleted(0);
console.log(todos);
