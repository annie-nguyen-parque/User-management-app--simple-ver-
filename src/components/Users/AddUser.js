import React, { useState } from 'react';

import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

function AddUser(props) {

    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');

    const [error, setError] = useState();

    function onChangeUsernameHandler(event) {
        setUsername(event.target.value);
    }

    function onChangeAgeHandler(event) {
        setAge(event.target.value);
    }

    function onSubmitHandler(event) {
        event.preventDefault();

        if(username.trim().length === 0 || age.trim().length === 0) {
            setError({
                type: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).',
            })
            return;
        }

        if(+age < 0) {
            setError({
                type: 'Invalid age',
                message: 'Please enter a valid age (> 0).',
            })
            return;
        }

        props.onSaveUserData(username, age);

        setUsername('');
        setAge('');
    };

    function onConfirm() {
        setError(null);
    }

    return (
        <>
            {error && <ErrorModal errorType={error.type} errorMessage={error.message} onConfirm={onConfirm}/>}
            <Card className={classes.input}>
                <form onSubmit={onSubmitHandler}>
                    <label htmlFor='username'>Username</label>
                    <input id='username' type='text' value={username} onChange={onChangeUsernameHandler} />

                    <label htmlFor='age'>Age (years)</label>
                    <input id='age' type='number' value={age} onChange={onChangeAgeHandler} />

                    <Button type='submit' content='Add user'></Button>
                </form>
            </Card>
        </>
    );
}

export default AddUser;