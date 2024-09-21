import '../../../styles/Task.css';

function Task(props) {
    return (
        <div id="task-modal">
            <button id="close-btn" onClick={props.cancelTask}>&times;</button>
            <h3>Task Details:</h3>
            <form action="">
                <label htmlFor="task">Task</label>
                <br/>
                <input type="text" id="task" name="task"/>
                <br/>
                <label htmlFor="description">Description</label>
                <br/>
                <input type="text" id="description" name="description"/>
                <br/>
                <label htmlFor="status">Status</label>
                <br/>
                <select name="status" id="status">
                    <option value="incomplete">Incomplete</option>
                    <option value="completed">Completed</option>
                </select>
            </form>
            <div id="add-cancel-btn">
                <button onClick={props.addTask}>Add Task</button>
                <button id="cancel-task" onClick={props.cancelTask}>Cancel</button>
            </div>
        </div>
    );
}

export default Task;
