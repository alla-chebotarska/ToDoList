let TODO_LIST_KEY = "todoList";

var todoStorage = {
    getTodos: function(){
        var todoList = localStorage.getItem(TODO_LIST_KEY);
        if(todoList){
            return JSON.parse(todoList);
        }
        return [];
    },
    saveTodos: function(toDoList){
        localStorage.setItem(TODO_LIST_KEY, JSON.stringify(toDoList))
    }
}