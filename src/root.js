import React from 'react';
import ReactDOM from 'react-dom';

import TodoContainer from './containers/TodoContainer';

ReactDOM.render(<TodoContainer />, document.getElementById('fluxtodo'));

// REMOVE ME LATER
import TodoActions from './data/TodoActions';

TodoActions.addTodo('Tvätta');
TodoActions.addTodo('Städa');
TodoActions.addTodo('Lära mig Flux');