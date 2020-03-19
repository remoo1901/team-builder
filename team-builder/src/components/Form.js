import React, { useState } from 'react';
import '../App.css';

const Form = (props) => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        role: ""
    }
    )
    const changeHandler = e => {
        setFormState({ ...formState, [e.target.name]: e.target.value })
    }

    const submitHandler = e => {
        e.preventDefault();
        props.addMember({
            ...formState,
            id: Date.now()
        })

        setFormState({
            name: "",
        email: "",
        role: ""
          });

    }

    return (

        <form onSubmit={submitHandler}>
            <label className="tag">Name</label>
            <input
                name="name"
                placeholder='full name'
                value={formState.name}
                onChange={changeHandler}
            />

            <label className="tag">Email</label>
            <input
                name="email"
                placeholder='Email'
                value={formState.email}
                onChange={changeHandler}

            />

            <label className="tag">Role</label>
            <input
                name="role"
                placeholder='Role'
                value={formState.role}
                onChange={changeHandler}

            />

            <button className="submit">Submit</button>
        </form>


    );
}

export default Form;