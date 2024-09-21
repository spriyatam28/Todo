import '../../../styles/Tasks.css';
import {useState} from "react";
import Task from "./Task.jsx";

function Tasks() {
    const [showTask, setShowTask] = useState(false);

    function createTask() {
        setShowTask(true);
    }

    return (
        <div id="tasks">
            <div>
                {
                    showTask ? <Task/> : <button onClick={createTask}>No Tasks</button>
                }
            </div>
        </div>
    );
}

export default Tasks;
