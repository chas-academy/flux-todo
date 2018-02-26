import Immutable from 'immutable';
import { ReduceStore } from 'flux/utils';

import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';

import Incrementer from './Incrementer';
import Todo from './Todo';

class TodoStore extends ReduceStore {
    constructor() {
        super(TodoDispatcher);
    }

    getInitialState() {
        return Immutable.OrderedMap()
    }

    reduce(state, action) {
        switch (action.type) {
            case TodoActionTypes.ADD_TODO:
                // Do something with the new todo
                if (!action.title) {
                    return state;
                }
                const id = Incrementer.increment();
                return state.set(id, new Todo(
                    {
                        id,
                        title: action.title,
                        completed: false
                    }
                ));
                break;
            case TodoActionTypes.DELETE_TODO:
                return state.delete(action.id);
                break;
            case TodoActionTypes.TOGGLE_TODO:
                return state.update(
                    action.id,
                    todo => todo.set('completed', !todo.completed)
                )
                break; 
            default:
                return state;
        }
    }
}

export default new TodoStore();