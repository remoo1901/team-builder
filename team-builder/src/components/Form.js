import React, { useState } from 'react';

const Form = (props) => {

    const [member, setMember] = useState({
        id: Date.now(),
        name: "",
        email: "",
        role: ""
    }
    );

    const handleChanges = e => {
        setMember({ ...member, [e.target.name]: e.target.value
        })
    }


    return (

        <div>
            <form>

                <label htmlfor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    placeholder="First and Last Name"
                    name="name"
                    onChange={handleChanges}

                    required
                />


            </form>

        </div>


    );
}

export default Form;