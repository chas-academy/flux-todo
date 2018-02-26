import React from 'react';

const TodoView = (props) => {
    return (
        <ul id="todo-list">
            {
                [...props.todos.values()].map(todo => (
                    <li key={todo.id}>
                        <div className="view">
                            <input
                                className="toggle"
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => props.onToggleTodo(todo.id)}
                            />
                            <label>{todo.title}</label>
                            <button
                                className="destroy"
                                onClick={() => props.onDeleteTodo(todo.id)}
                            />
                        </div>
                    </li>
                ))
            }
        </ul>
    );
}

export default TodoView;
