import '../../../styles/Header.css';

function Header() {
    return (
        <div id="header">
            <div>
                <button>Add Task</button>
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
    );
}

export default Header;
