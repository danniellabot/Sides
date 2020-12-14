import axios from 'axios'
import todos from '../reducers/homeTodos'

export const getAllTodos = () => {
   return axios.get('http://localhost:9000/all', {crossDomain:true}) // excluding todoid, category
}

export const postTodos = (items) => {
   return axios.post('http://localhost:9000/new', items)
}

export const deleteTodos = (id) => {
   return axios.delete(`http://localhost:9000/${id}`)
}


//get all the categories 
// all the todos in the categories available 
// talk to delete function connect from ui to backend 
// 