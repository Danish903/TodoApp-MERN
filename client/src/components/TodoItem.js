import React from 'react';
import { connect } from 'react-redux';
import { startDeleteTodo } from "../actions";
import { startEditTodo } from "../actions";

const TodoItem = (props) => {
    function removeItem(e) {
        e.stopPropagation();
        props.startDeleteTodo({ id: props._id });
    }

    function handleEditTodo() {
        let completed = !props.completed;
        props.startEditTodo(props._id, { completed });
    }
    
    const done = props.completed ? "task done" : "task";
    return (
        <li className={done} onClick={handleEditTodo}> 
            {props.name} 
            <span 
            onClick={removeItem}
            >
                X
            </span>
        </li>
    );
};
export default connect(null, { startDeleteTodo, startEditTodo })(TodoItem);
