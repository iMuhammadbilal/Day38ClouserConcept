// todoList ek closure banayenge
function createTodoList() {
    let todos = []; // hidden private variable

    return {
        addTodo: function(item) {
            todos.push(item);
            console.log(`✅ Added: ${item}`);
        },
        removeTodo: function(index) {
            if (index >= 0 && index < todos.length) {
                const removed = todos.splice(index, 1);
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
myTodos.getTodos();
myTodos.removeTodo(0);
myTodos.getTodos();
