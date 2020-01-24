Vue.component('todo-item', {
    props: ['todo'],
    template: "<li v-bind:class='{ done: todo.isDone }' class = 'col-md-11'> \
                    <input class='toggle' type='checkbox' v-model='todo.isDone'>{{ todo.text }} \
                    </li>"
}) 