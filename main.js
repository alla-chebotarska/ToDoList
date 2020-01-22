
var app = new Vue({
    el: '#app',
    data: {
        toDoList: todoStorage.getTodos(),
        fromInput: "",
        visibility: "all"
    },
    computed: {
        calculateAllItems: function () {
            return this.toDoList.length;
        },
        isAllItemsDone: {
            get: function () {
                for (var i = 0; i < this.toDoList.length; i++) {
                    if(this.toDoList[i].isDone == false){
                        return false;
                    }
                }
                return true;
            },
            set: function (isDone) {
                this.toDoList.forEach(function(item){
                    item.isDone = isDone;
                })
            }
        },
        activeItems: function () {
            if (this.visibility === "all") {
                return this.toDoList;
            }
            if (this.visibility == "active") {
                return filterOut(this.toDoList, false);
            }
            if (this.visibility == "completed") {
                return filterOut(this.toDoList, true);
            }
        }
    },
    watch:{
        toDoList: {
            handler: function (todos) {
              todoStorage.saveTodos(todos)
            },
            deep: true
          }
    },
    methods: {
        addItem: function () {
            this.toDoList.push({ text: this.fromInput, isDone: false });
            this.fromInput = "";
        },
        deleteItem: function (item) {
            console.log("delete item function");
            this.toDoList.splice(this.toDoList.indexOf(item), 1);
        },
        clearCompleated: function () {
            var i = 0;
            while (i < this.toDoList.length) {
                if (this.toDoList[i].isDone) {
                    this.toDoList.splice(i, 1);
                } else {
                    i++;
                }
            }
        }
    }
})

var filterOut = function(toDoList, isCompleted) {
    var tmp = [];
    for (var i = 0; i < toDoList.length; i++) {
        if (toDoList[i].isDone == isCompleted) {
            tmp.push(toDoList[i]);
        }
    }
    return tmp;
}