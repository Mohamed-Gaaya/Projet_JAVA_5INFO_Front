import { Link } from "react-router-dom";
import './Admin.css'; // Import the CSS file for styling

const Admin = () => {
    return (
        <section className="container mt-5 admin-panel">
            <h2>Welcome to Admin Panel</h2>
            <hr />
            <div className="options-container">
                <Link to={"/existing-rooms"} className="option-link">
                    <div className="option">
                        <span>Manage Rooms</span>
                    </div>
                </Link>
                <Link to="http://localhost:8080/usersa" className="option-link">
                    <div className="option">
                        <span>Manage Users</span>
                    </div>
                </Link>
                <Link to={"/existing-bookings"} className="option-link">
                    <div className="option">
                        <span>Manage Bookings</span>
                    </div>
                </Link>
            </div>
        </section>
    );
};

export default Admin;
