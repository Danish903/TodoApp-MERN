import React from 'react';
import CreateTodo from "./CreateTodo";
import ListTodo from "./ListTodo";
class App extends React.Component {
    render() {
        return (
            <div>
                <header>
                <h1>Todo <span> List </span> </h1>
                <h2>A simple todo list app built with MERN</h2>
                </header>
                <CreateTodo />
                <ListTodo />
            </div>
        );
    }
}
export default App;
