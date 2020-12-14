import React from 'react';
import List from '@material-ui/core/List';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ListIcon from '@material-ui/icons/List';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'
import { ListItemSecondaryAction, ListItem, ListItemText, CardContent, Card } from '@material-ui/core';
import { handleDeleteTodo, handleDeleteCategory, testBackend} from './actions/todo';
import _ from 'lodash'
import NewCategory from './TodoNav'




class TodoList extends React.Component {

  submitDelete(id) {
    const { dispatch } = this.props
    dispatch(handleDeleteTodo(id))
  }

  deleteCategory(todoCategory) {
    const { dispatch } = this.props
    dispatch(handleDeleteCategory(todoCategory))
  }


  render() {
    
    const { todos } = this.props
    const getAllCategories = _.map(todos, (todosInCategory, todoCategory) => {
      const todosList = _.map(todosInCategory, (todo, key) => (

        <Card variant="outlined">
          <CardContent>
            <ListItem key={todo.id}>
              <Checkbox tabIndex={-1} disableRipple />
              <ListItemText
                primary={todo.todo} />
              <ListItemSecondaryAction>
                <IconButton aria-label="Delete" onClick={() => this.submitDelete(todo.id)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem >
          </CardContent>
        </Card>


      ))

      return (
        <div key={todoCategory}>
          <div className="HomeList">
            <Typography variant="h5" style={{ margin: 10 }}>
              <Checkbox onClick={() => this.deleteCategory(todoCategory)} />
              {todoCategory}
            </Typography>
          </div>
          {todosList}
        </div>
      )
    })


    return (
      <div className="List" >
        <List>
          {getAllCategories}
        </List>
        <NewCategory />
      </div>
    )
  }
}






// <List>
//   <div>
//     {getAll}
//   </div>
// </List>

// <List>
//   <div className="HomeList">
//     <Typography variant="h4">
//       <HomeTwoToneIcon />
//   HOME
// </Typography>
//     {homeTodos.map(item => (
//       <ListItem key={item.id} dense button>
//         <Checkbox tabIndex={-1} disableRipple />
//         <ListItemText primary={item.todo} />
//         <ListItemSecondaryAction>
//           <IconButton aria-label="Delete" onClick={() => this.submitDelete(item.id)}>
//             <DeleteIcon />
//           </IconButton>
//         </ListItemSecondaryAction>
//       </ListItem>
//     ))}
//   </div>
//   <div className="WorkList">
//     <Typography variant="h4">
//       <LaptopMacTwoToneIcon />
//   WORK
// </Typography>
//     {workTodos.map(item => (
//       <ListItem key={item.id} dense button>
//         <Checkbox tabIndex={-1} disableRipple />
//         <ListItemText primary={item.todo} />
//         <ListItemSecondaryAction>
//           <IconButton aria-label="Delete" onClick={() => this.submitDelete(item.id)}>
//             <DeleteIcon />
//           </IconButton>
//         </ListItemSecondaryAction>
//       </ListItem>
//     ))}
//   </div>
//   <div className="LeisureList">
//     <Typography variant="h4">
//       <BeachAccessTwoToneIcon />
//   LEISURE
// </Typography>
//     {leisureTodos.map(item => (
//       <ListItem key={item.id} dense button>
//         <Checkbox tabIndex={-1} disableRipple />
//         <ListItemText primary={item.todo} />
//         <ListItemSecondaryAction>
//           <IconButton aria-label="Delete" onClick={() => this.submitDelete(item.id)}>
//             <DeleteIcon />
//           </IconButton>
//         </ListItemSecondaryAction>
//       </ListItem>
//     ))}
//   </div>
// </List>


const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodoList);

