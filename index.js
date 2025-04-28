// todoList ek closure banayenge
function createTodoList() {
    let todos = []; // hidden private variable
    let accessArray = 0;

    return {
        addTodo: function(item) {
            todos.push(item);
            console.log(`✅ Added: ${item}`);
        },
        removeTodo: function(index) {
            if (index >= 0 && index < todos.length) {
                const removed = todos.splice(2, 1);
                console.log(`🗑️ Removed: ${removed}`);
            } else {
                console.log("❌ Invalid index!");
            }
        },
        getTodos: function() {
            console.log("📋 Your Todos:");
            console.log(todos);
        }
    };
}

// Create Todo Manager
const myTodos = createTodoList();
// Test it
myTodos.addTodo("Learn Closures");
myTodos.addTodo("Upload project to GitHub");
myTodos.addTodo("Example of closures in JS");
myTodos.addTodo("Learn about OOPS");
myTodos.getTodos();
myTodos.removeTodo(0);
myTodos.getTodos(); // dot mean object
