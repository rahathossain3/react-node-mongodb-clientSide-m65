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

    // for delate user-------------------------
    const handleUserDelete = id => {

        const proceed = window.confirm('Are you sure want to delete');
        if (proceed) {

            console.log('deleting user with id', id);

            const url = `http://localhost:5000/user/${id}`;
            //declare fetch operation
            fetch(url, {
                method: 'DELETE'
            })
                // after delete
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                    //if successful delete data
                    if (data.deletedCount > 0) {
                        console.log('deleted');

                        //show client side after delete data
                        const remaining = users.filter(user => user._id !== id);
                        setUsers(remaining);

                    }

                })

        }

    }

    return (
        <div>
            <Link to='/user/add'>Add User</Link>
            {/* <Link to='/update/:id'>Update user</Link> */}

            <h2>Available User: {users.length}</h2>

            <ul>
                {
                    users.map(user => <li
                        key={user._id}
                    >{user.name}:: {user.email}

                        {/*--------------- for update ------------------- */}
                        <Link to={`/update/${user._id}`}> <button>Update</button> </Link>

                        {/* -------------- for delete ------------------- */}
                        <button onClick={() => handleUserDelete(user._id)}>X</button>
                    </li>)
                }
            </ul>

        </div>
    );
};

export default Home;