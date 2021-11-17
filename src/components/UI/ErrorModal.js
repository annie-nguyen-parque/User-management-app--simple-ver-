import React from 'react';
import ReactDOM from 'react-dom';

import Button from './Button';
import Card from './Card';
import classes from './ErrorModal.module.css';

function Backdrop(props) {
    return <div className={classes.backdrop} onClick={props.onConfirm}></div>
}

function ModalOverlay(props) {
    return (
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
    );
}

function ErrorModal(props) {

    return (
        <>
            {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm}/>, document.getElementById('backdrop-root'))}
            
            {ReactDOM.createPortal(<ModalOverlay onConfirm={props.onConfirm} errorType={props.errorType} errorMessage={props.errorMessage}/>, document.getElementById('overlay-root'))}
        </>
    );
}

export default ErrorModal;
