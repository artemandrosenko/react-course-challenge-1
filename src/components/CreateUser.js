import styles from './CreateUser.module.css';
import React, { useState } from 'react';

const CreateUser = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const nameHandler = (event) => {
        setName(event.target.value);
    }

    const ageHandler = (event) => {
        setAge(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const userData = {
            name: name,
            age: age,
        };

        console.log('userData = ', userData);
    }

    return (
        <form className={`${styles['create-user__form']}`} onSubmit={submitHandler}>
            <div>
                <label>Name:</label>
                <input type='text' placeholder='Enter name here' onChange={nameHandler}/>
                <label>Age:</label>
                <input type='number' placeholder='Enter age' onChange={ageHandler} />
                <button type='submit'>Add new user</button>
            </div>

        </form>
    )

}

export default CreateUser;