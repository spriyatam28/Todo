function TaskItem(props) {
    return (
        <li>
            <div className="task-bar">
                <div className="task-title">{props.title}</div>
                <div>Complete by: {props.dueDate}</div>
            </div>
            <ul>
                <li>{props.description}</li>
                <li>{props.createdOn}</li>
            </ul>
        </li>
    );
}

export default TaskItem;
