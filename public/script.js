$(document).ready(() => {
    ajaxGetRequest();

    $("#todoInput").on("keypress", (event) => {
        if(event.key == "Enter") {
            let newTodo = $("#todoInput").val();
            const requestOptions = {
                url: "/api/todos",
                method: "POST",
                dataType: "json",
                data: { name: newTodo}
            };
            $.ajax(requestOptions)
            .done((todo) => {
                addTodo(todo);
                $("#todoInput").val("");
            })
            .fail(handleError);
        }
    });
});

function handleError(error) {
    console.log(error);
}

function ajaxGetRequest() {
    const requestOptions = {
        url: "/api/todos",
        method: "GET",
        dataType: "json"
    }
    $.ajax(requestOptions)
    .done(addTodos)
    .fail(handleError);
}

function addTodo(todo) {
    let newTodo = $("<li class='task'>" + todo.name + "</li>");
    if (todo.completed) {
        $(newTodo).addClass("done");
    }
    $(".list").append(newTodo);
}

function addTodos(todos) {
    todos.forEach((todo) => {
       addTodo(todo);
    })
}