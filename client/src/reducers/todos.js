const todosDefault = [];


export default (state = todosDefault, action) => {
    switch (action.type) {
        case "GET_TODOS":
            return action.todos;
        case "CREATE_TODO":
            return [...state, action.todo];
        case "DELETE_TODO":

            return state.filter(({ _id }) => _id !== action.id );
        case "EDIT_TODO":
            return state.map((todo) => {
                if (todo._id === action._id) {
                    return {
                        ...todo,
                        ...action.updates
                    };
                }
                else {
                    return todo;
                }
            });
        default:
            return state;
    }
};
