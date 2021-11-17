import React, { useState, useRef } from 'react';

import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

function AddUser(props) {

    const usernameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();

    function onSubmitHandler(event) {
        event.preventDefault();

        // Ref is better than state in this case bacause we just wanna read some values from user. Usually it's not okay to use Ref to change/manipulate DOM
        const enteredUsername = usernameInputRef.current.value
        const enteredAge = ageInputRef.current.value

        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                type: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).',
            })
            return;
        }

        if (+enteredAge < 0) {
            setError({
                type: 'Invalid age',
                message: 'Please enter a valid age (> 0).',
            })
            return;
        }

        props.onSaveUserData(enteredUsername, enteredAge);

        usernameInputRef.current.value = '';
        ageInputRef.current.value = '';
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
                    <input 
                        id='username' 
                        type='text' 
                        ref={usernameInputRef}/> 
                        {/* This become uncontrolled component because we are not controling the state of this input element */}
                        {/* The useState approach like we use before makes this component a controlled component */}

                    <label htmlFor='age'>Age (years)</label>
                    <input 
                        id='age' 
                        type='number' 
                        ref={ageInputRef}/>

                    <Button type='submit' content='Add user'></Button>
                </form>
            </Card>
        </>
    );
}

export default AddUser;