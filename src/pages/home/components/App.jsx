import '../../../styles/App.css';
import Header from "./Header.jsx";
import Tasks from "./Tasks.jsx";

function App() {
    return (
        <div>
            <h1>Tasks</h1>
            <main>
                <Header/>
                <Tasks/>
            </main>
        </div>
    );
}

export default App
