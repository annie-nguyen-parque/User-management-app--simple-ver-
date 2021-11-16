import React from 'react';

import Card from '../UI/Card';
import classes from './UserList.module.css';

function UserList(props) {
    return (
        <Card className={classes.users}>
            {props.data.map(user =>
                (<li key={user.id}>
                    {user.username} ({user.age} years old)
                </li>))}
        </Card>
    );
}

export default UserList;