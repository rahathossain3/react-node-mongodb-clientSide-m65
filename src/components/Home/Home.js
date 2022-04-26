import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    // get user-------
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    // for delate user-----------
    const handleUserDelete = id => {

        const proceed = window.confirm('Are you sure want to delete');
        if (proceed) {
            console.log('deleting user with id', id);
        }

    }

    return (
        <div>
            <Link to='/user/add'>Add User</Link>

            <h2>Available User: {users.length}</h2>

            <ul>
                {
                    users.map(user => <li key={user._id}>{user.name}:: {user.email}
                        <button onClick={() => handleUserDelete(user._id)}>X</button>
                    </li>)
                }
            </ul>

        </div>
    );
};

export default Home;