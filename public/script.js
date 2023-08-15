$(document).ready(() => {
    ajaxGetRequest();

    $("#todoInput").on("keypress", (event) => {
        if(event.key == "Enter") {
            ajaxPostRequest();
        }
    });
    $(".list").on("click", "span", function(event) {
        event.stopPropagation();
        deleteTodo($(this).parent())
    });
    $(".list").on("click", "li", function () {
        updateTodo($(this));
    })

});


function handleError(error) {
    console.log(error);
}

function updateTodo(todo) {
    requestOptions = {
        url: "api/todos/" + todo.data("id"),
        method: "PUT",
        dataType: "json",
        data: {completed: !todo.data("completed")}
    }
    $.ajax(requestOptions)
        .done(data => {
            console.log(data);
            todo.toggleClass("done");
        })
        .fail(err => console.log(err.message))
}

function ajaxPostRequest() {
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

function deleteTodo(todo) {
    const deleteId = todo.data("id");
    const requestOptions = {
        url: "/api/todos/" + deleteId,
        method: "DELETE"
    }
    $.ajax(requestOptions)
        .done(deleted => console.log(deleted))
        .fail(err => console.log(err.message));
    todo.remove();
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
    let newTodo = $("<li class='task'>" + todo.name + "<span>X</span></li>");
    $(newTodo).data("id", todo._id);
    $(newTodo).data("completed", todo.completed);
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