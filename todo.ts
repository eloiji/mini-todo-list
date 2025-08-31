// TIL : interface is a defined structure of data that you can use again and again in your code.
interface Todo {
    title: string;
    completed: boolean;
}

let todos: Todo[] = [];

// TIL : define funtion parameters and return types
function addTodo(title: string): void {
    todos.push({ title, completed: false });
}

function markCompleted(index: number): void {
    if (todos[index]) {
        todos[index].completed = true;
    }
}

addTodo("Learn TypeScript");
markCompleted(0);

console.log(todos);

// TIL : Use typescript to catch errors at compile time and not at runtime