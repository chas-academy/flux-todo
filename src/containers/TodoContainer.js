import TodoView from '../views/TodoView';
import { Container } from 'flux/utils';
import TodoStore from '../data/TodoStore';
import TodoActions from '../data/TodoActions';
import TodoDispatcher from '../data/TodoDispatcher';

function getStore() {
    return [
        TodoStore
    ];
}

function getState() {
    return {
        todos: TodoStore.getState(),

        onDeleteTodo: TodoActions.deleteTodo,
        onToggleTodo: TodoActions.toggleTodo
    }
}

export default Container.createFunctional(TodoView, getStore, getState);