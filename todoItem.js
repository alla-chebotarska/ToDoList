Vue.component('todo-item', {
    props: ['todo'],
    template: "<li v-bind:class='{ done: todo.isDone }'> \
                    <input class='toggle' type='checkbox' v-model='todo.isDone'>{{ todo.text }} \
               </li>"
}) 