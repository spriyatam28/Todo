import '../../../styles/Header.css';
import Task from "./Task.jsx";
import {useState} from "react";
import TaskItem from "./TaskItem.jsx";
import Calendar from "react-calendar";

function Header() {
    const [showCreateTask, setShowCreateTask] = useState(false);
    const [tasks, setTasks] = useState([]);

    function addTask() {
        const newTask = document.getElementById('task').value;
        const newDescription = document.getElementById('description').value;
        const newTaskStatus = document.getElementById('status').value;
        const newTasks = {
            title: newTask,
            description: newDescription,
            status: newTaskStatus === "Completed",
        };
        setTasks(prevTasks => [
            ...prevTasks,
            newTasks
        ]);
        setShowCreateTask(false);
    }

    function cancelAddTask() {
        setShowCreateTask(false);
    }

    function createTask() {
        setShowCreateTask(!showCreateTask);
    }

    return (
        <div id="header">
            <div id="tasks-header">
                <div>
                    <button onClick={createTask}>Add Task</button>
                </div>
                <div>
                    <label htmlFor="sort"/>
                    <select name="sort" id="sort">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="incompleted">Incomplete</option>
                    </select>
                </div>
            </div>
            <div id="tasks">
                {
                    showCreateTask ?
                        <Task
                            addTask={addTask}
                            cancelTask={cancelAddTask}
                        />
                        : tasks.length > 0 ? (
                                <div id="task">
                                    <ol>
                                        {tasks.map((task, idx) => (
                                            <TaskItem
                                                key={idx}
                                                title={task.title}
                                                description={task.description}
                                                createdOn={Date()}
                                            />
                                        ))}
                                    </ol>
                                </div>
                            ) :
                            (
                                <div id="no-tasks">
                                    <p>No Tasks</p>
                                </div>
                            )
                }
            </div>
        </div>
    );
}

export default Header;
