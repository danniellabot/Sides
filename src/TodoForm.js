import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { handleAddTodo, handleAddCategory } from './actions/todo';
import MenuItem from '@material-ui/core/MenuItem';
import _ from 'lodash'
import * as service from './services/todo'

//import useInputState from './useInputState';

// after submit, todocategory should return to blank 
// add todo category to actions and reducers 
// in the list showing, only show those with either work or todo in the todolist.js

class TodoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todo: '',
      todoCategory: ''
    }
  }
  handleChange(event) {
    const { name, value } = event.target

    this.setState({
      [name]: value
    })
  }


  submitMessage() {
    const { dispatch } = this.props
    if (this.state.todo !== "") {
      dispatch(handleAddTodo(this.state.todo, this.state.todoCategory))
    }
    this.setState({
      todo: '',
      todoCategory: 'Home'
    })
  }

  render() {
    const { todos } = this.props

    return (
      <div width="auto">
        <TextField
          style={{ margin: 8 }}
          fullWidth
          variant="outlined"
          placeholder="Add your todo"
          margin="normal"
          name="todo"
          onChange={this.handleChange.bind(this)}
          value={this.state.todo}
        >
        </TextField>
        <TextField
          select
          placeholder="Please select a todo category"
          variant="outlined"
          margin="normal"
          name="todoCategory"
          onChange={this.handleChange.bind(this)}
          value={this.state.todoCategory}
        >
          {_.map(todos, (a, todoCategory) => (
            <MenuItem key={todoCategory} value={todoCategory}>
              {todoCategory}
            </MenuItem>
          ))}
        </TextField>
        <div className="small-button">
          <Button variant="contained" color="primary" margin="normal" onClick={this.submitMessage.bind(this)}>
            Submit
                 </Button> 
                 {/* add if category blank, place submit button disabled */}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodoForm);