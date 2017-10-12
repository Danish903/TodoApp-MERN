import React from 'react';
import TodoItem from "./TodoItem";
import { connect } from "react-redux";
import { getTodos } from "../actions";
class ListTodo extends React.Component {
    renderTodoItem = (todos) => {
        return todos.map((todo) => {
        
            return <TodoItem key={todo._id} {...todo}/>;
        });
    };
    componentDidMount() {
        this.props.getTodos();
    }

    render() {
        const { todos } = this.props;
        return (
            <div className="list">
                {this.renderTodoItem(todos)}
            </div>
        );
    }
}
const mapStateToProps = ({ todos }) => ({ todos })

export default connect(mapStateToProps, { getTodos })(ListTodo);
