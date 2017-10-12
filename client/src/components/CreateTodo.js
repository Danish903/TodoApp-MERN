import React from 'react';
import { startCreateTodo } from "../actions";
import { connect } from "react-redux";

class CreateTodo extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.todo.value.trim();
        this.props.startCreateTodo({ name });
        e.target.todo.value = "";
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}> 
                <input type="text" name="todo" placeholder="Insert your task here..." />
            </form>

        );
    }
}

export default connect(null, { startCreateTodo })(CreateTodo);
