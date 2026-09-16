$(document).ready(function() {
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

    $('#newBtn').click(function() {
        let task = prompt('Enter a new TO DO:');
        if (task && task.trim() !== '') {
            addTodo(task);
            saveTodos();
        }
    });

    function addTodo(text) {
        let $div = $('<div></div>').text(text);
        $div.click(function() {
            if (confirm('Remove?')) {
                $(this).remove();
                saveTodos();
            }
        });
        $('#ft_list').prepend($div);
    }

    function saveTodos() {
        let todos = [];
        $('#ft_list div').each(function() {
            todos.push($(this).text());
        });
        document.cookie = "todo=" + encodeURIComponent(JSON.stringify(todos)) + "; expires=Thu, 18 Dec 2030 12:00:00 UTC; path=/";
    }
});
