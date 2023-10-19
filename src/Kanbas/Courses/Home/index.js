import ModuleList from "../Modules/ModuleList";
import './index.css';

function Home() {
    const sidebar = ["Import Existing Content", "Import From Commons", "Choose Home Page", "View Course Stream", "New Announcement", "New Analytics", "View Course Notifications"];
    const todo = ["Grade A1 - ENV + HTML", "Grade A2 - CSS + Bootstrap"];
    return (
        <div>
            <div className="row">
                <div className="col-12">
                <h2>Home</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-8">
                    <ModuleList />
                </div>
                <div className="col-4">
                    <ul className="list-group p-4">
                    {sidebar.map((sidebar, index) => (
                        <li key={index} className="list-group-item p-2">
                        <h6>{sidebar}</h6>
                      </li>
                    ))}
                    </ul>
                    <div className="p-4 wd-list">
                        <h5>To Do</h5>
                        <hr/>
                        <ul className="list-group">
                    {todo.map((todo, index) => (
                        <li key={index} className="list-group-item p-2">
                        <h6>{todo}</h6>
                        Points: 100
                      </li>
                    ))}
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;
