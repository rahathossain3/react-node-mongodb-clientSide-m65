import React from 'react';

const AddUser = () => {

    const handleAddUser = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;

        const user = { name, email };

        // send data to the server
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            //after fetch
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                //successfully data send to server
                alert('users added successfully!!!');
                event.target.reset();
            })

    }

    return (
        <div>
            <h2>Please add a User</h2>

            <form onSubmit={handleAddUser}>
                <input type="text" name="name" placeholder='Name' required />
                <br />
                <input type="email" name="email" placeholder='Email' required />
                <br />
                <input type="submit" value='Add User' />

            </form>

        </div>
    );
};

export default AddUser;