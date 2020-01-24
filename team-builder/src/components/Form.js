import React, { useState } from "react";

const Form = (props) => {
  const [member, setMember] = useState({
   
    name: "",
    email: "",
    role: ""
  });

  const handleChanges = e => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newMember = {...member,  id: Date.now() };
    props.addNewMember(newMember);
    setMember({ name: "", email: "", role: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="First and Last Name"
          name="name"
          onChange={handleChanges}
          required
        />
        <br /> <br />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          placeholder="email"
          name="email"
          onChange={handleChanges}
          required
        />
        <br /> <br />
        <label htmlFor="role">Role</label>
        <input
          type="text"
          id="role"
          placeholder="role"
          name="role"
          onChange={handleChanges}
          required
        />
        <br /> <br />
        <button type="submit" id="addMember">
          Submit
        </button>
        <br /> <br />
      </form>
    </div>
  );
};

export default Form;
