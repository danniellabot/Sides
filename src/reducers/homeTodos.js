//reducer code in here
import { ADD_TO_DO, DELETE_TO_DO, ADD_CATEGORY, DELETE_CATEGORY } from '../actions/todo'
import _, { result } from 'lodash';

// function todos(state = [{ id: "blah", todo: "blah", todoCategory: "Home" }], action) {
// function todos(state = { Work: [{ "todo": "blah", "id": "1" }], Home: [{ "todo": "sleep", "id": "2" }] }, action) 


//map function outside but here to loop through action.data 
// change action.data 


function todos(state = {}, action) {
    console.log("The action type is ", action.type)
    switch (action.type) {
        case ADD_TO_DO:
            const { todo, id, todoCategory } = action
            const categoryAlreadyExists = state[todoCategory]
            return (categoryAlreadyExists)
                ? { ...state, [todoCategory]: [...state[todoCategory], { todo, id }] }
                : { ...state, [todoCategory]: [{ todo, id }] }

        case DELETE_TO_DO:
            return _.mapValues(state, (todos, todoCategory) =>
                _.filter(todos, ({ id, todo }) => id !== action.id)
            )


        case DELETE_CATEGORY:
            console.log(action.todoCategory)
            return _.omit(state, action.todoCategory)


        case ADD_CATEGORY:
            console.log("The new list is called", action.todoCategory)
            const exampletodos = {
                ...state,
                [action.todoCategory]: []
            }
            console.log(exampletodos)
            return exampletodos

        default:
            return state
    }
}

export default todos



// pass todo category through to update state
// have the todo category from the drop down passed through so that in the console.log shows
// draw out what the data should look like
