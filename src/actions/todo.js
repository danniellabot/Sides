import * as service from '../services/todo'
import _ from 'lodash'

export const LOAD_ALL_TODOS = 'LOAD_ALL_TODOS'
export const ADD_TO_DO = 'ADD_TO_DO'
export const DELETE_TO_DO = 'DELETE_TO_DO'
export const ADD_CATEGORY = 'ADD_CATEGORY'
export const DELETE_CATEGORY = 'DELETE_CATEGORY'

export const loadTodos = (todo, id, todoCategory) => {
    return {
        type: LOAD_ALL_TODOS,
        id,
        todo,
        todoCategory
    }
}


export const addTodo = (todo, id, todoCategory) => {
    return {
        type: ADD_TO_DO,
        id,
        todo,
        todoCategory
    }
}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TO_DO,
        id

    }
}

export const addCategory = (todoCategory) => {
    return {
        type: ADD_CATEGORY,
        todoCategory
    }
}

export const deleteCategory = (todoCategory, id) => {
    return {
        type: DELETE_CATEGORY,
        todoCategory,
        id
    }
}


export const generateId = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}



export const receiveTodos = () => async (dispatch) => {
    const results = await service.getAllTodos()

    _.map(results.data, (item) => {
        dispatch(addTodo(item.todo, item._id, item.category))
    })
}


export const handleAddTodo = (todo, todoCategory) => (dispatch) => {
    const id = generateId()
    console.log(id)
    const items = {
        todo: todo,
        _id: id,
        category: todoCategory
    }
    service.postTodos(items)
    dispatch(addTodo(todo, id, todoCategory))

}

export const handleDeleteTodo = (id) => async (dispatch) => {
    console.log(id)
    service.deleteTodos(id)
    dispatch(deleteTodo(id))
}

export const handleAddCategory = (todoCategory) => async (dispatch) => {
    dispatch(addCategory(todoCategory))
}

export const handleDeleteCategory = (todoCategory) => async (dispatch) => {
    dispatch(deleteCategory(todoCategory))
}