// import uuid from "uuid";
import axios from 'axios';

let url = "http://simple-todo-app-api-danish903.c9users.io:8081/api/todos";

export const getTodos = () => {
    return async(dispatch) => {
        const res = await axios.get(url);
        const todos = res.data;
        dispatch({ type: "GET_TODOS", todos });
    };
};

export const createTodo = ({ _id, name = "", completed = false } = {}) => {
    return {
        type: "CREATE_TODO",
        todo: {
            _id,
            name,
            completed
        }
    };
};

export const startCreateTodo = (todo) => {
    return async(dispatch) => {
        const res = await axios.post(url, todo);
        dispatch(createTodo(res.data))
    }
};

export const deleteTodo = ({ id } = {}) => {

    return {
        type: "DELETE_TODO",
        id
    };
};
export const startDeleteTodo = ({ id }) => {
    return async (dispatch) => {
    
        await axios.delete(`${url}/${id}`);
        dispatch(deleteTodo({ id }));
    };
};
export const editTodo = (_id, updates) => ({
    type: "EDIT_TODO",
    _id,
    updates

});

export const startEditTodo = (_id, updates) => {
    return async (dispatch) => {
        //console.log("id: ", _id);
        //console.log("updates", updates);
        const res = await axios.put(`${url}/${_id}`, updates);
        dispatch(editTodo(_id, res.data));
    };
};
