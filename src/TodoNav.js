// first add an icon 
// next is on click 
// console.log
// next is open an input box with hello 

import React from 'react';
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import { handleAddCategory } from './actions/todo'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Dialog } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';



class NewCategory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            popup: false,
            todoCategory: ''
        }
    }

    handleClickOpen = (popup) => {
        this.setState({
            popup: !this.state.popup
        })
    }

    handleClose = (popup) => {
        this.setState({
            popup: false,
            todoCategory: ''
        })
    }

    handleChange(event) {
        const { value } = event.target
        this.setState({
            todoCategory: value
        })
    }

    
    submitMessage() {
        console.log(this.state.todoCategory)
        const { dispatch } = this.props
        if (this.state.todoCategory !== "") {
            dispatch(handleAddCategory(this.state.todoCategory))
        }
    }

    comboButton() {
        this.submitMessage()
        this.handleClose()
    }

    render() {
        const { popup, todoCategory } = this.state
        console.log(popup)
        console.log(todoCategory)
        return (
            <div>
                <Fab color="primary" aria-label="add">
                    <AddIcon onClick={this.handleClickOpen} />
                </Fab>
                <Dialog open={popup} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Add a New List Category</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="normal"
                            id="name"
                            label="Enter new list name here"
                            type="email"
                            fullWidth
                            variant="outlined"
                            name="todoCategory"
                            onChange={this.handleChange.bind(this)}
                            value={this.state.todoCategory}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.comboButton.bind(this)} color="primary">
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(NewCategory);