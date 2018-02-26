import Immutable from 'immutable';

const Todo = Immutable.Record({
    id: '',
    completed: false,
    title: ''
});

export default Todo;