window.onload = function() {
    let cookie = document.cookie;
    if (cookie.includes('todo=')) {
        let savedData = cookie.split('todo=')[1].split(';')[0];
        if (savedData) {
            let todos = JSON.parse(decodeURIComponent(savedData));
            for (let i = todos.length - 1; i >= 0; i--) {
                addTodo(todos[i]);
            }
        }
    }
};

document.getElementById('newBtn').onclick = function() {
    let task = prompt('Enter a new TO DO:');
    if (task && task.trim() !== '') {
        addTodo(task);
        saveTodos();
    }
};

function addTodo(text) {
    let div = document.createElement('div');
    div.innerHTML = text;
    div.onclick = function() {
        if (confirm('Remove?')) {
            this.remove();
            saveTodos();
        }
    };
    document.getElementById('ft_list').prepend(div);
}

function saveTodos() {
    let todos = [];
    let list = document.getElementById('ft_list').children;
    for (let i = 0; i < list.length; i++) {
        todos.push(list[i].innerHTML);
    }

    document.cookie = "todo=" + encodeURIComponent(JSON.stringify(todos)) + "; expires=Thu, 18 Dec 2030 12:00:00 UTC; path=/";
}
