import '../../../styles/Task.css';

function Task() {
    function addTask() {

    }

    function cancelAddTask() {

    }

    return (
        <div>
            <span>&times;</span>
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
            <div>
                <button onClick={addTask}>Add Task</button>
                <button onClick={cancelAddTask} id="cancel-task">Cancel</button>
            </div>
        </div>
    );
}

export default Task;
