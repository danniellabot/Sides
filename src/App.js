import React from 'react';
import Typography from '@material-ui/core/Typography';
import './styles.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import * as todoActions from './actions/todo';
import { connect } from 'react-redux'
//import {handleAddTodo, ADD_TO_DO, addTodo} from './actions/todo'


class App extends React.Component {
  componentDidMount() {
    const { receiveTodos } = this.props
    receiveTodos()
  }
  render() {
    return (
      <div className="App">
        <Typography component="h1" variant="h2">
          TO DO LIST
        </Typography>
        <TodoForm />
        <TodoList />

      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    todos: state.todo
  }
}


export default connect(mapStateToProps, {...todoActions})(App);

