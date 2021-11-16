import React from 'react';

import Button from './Button';
import Card from './Card';
import classes from './ErrorModal.module.css';

function ErrorModal(props) {

    return (
        <>
            <div className={classes.backdrop} onClick={props.onConfirm}></div>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.errorType}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.errorMessage}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClickHandler={props.onConfirm} content='Okay'></Button>
                </footer>
            </Card>
        </>
    );
}

export default ErrorModal;
