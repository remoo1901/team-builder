import React, { useState } from "react";

const Form = props => {
  const [member, setMember] = useState({
    id: Date.now(),
    name: "",
    email: "",
    role: ""
  });

  const handleChanges = e => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addNewMember(member);
    setMember({ name: "", email: "", role: "" });
  };

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
        <br /> <br />

        <label htmlfor="email">Email</label>
        <input
          type="text"
          id="email"
          placeholder="email"
          name="email"
          onChange={handleChanges}
          required
        />
        <br /> <br />

        <label htmlfor="role">Role</label>
        <input
          type="text"
          id="role"
          placeholder="role"
          name="role"
          onChange={handleChanges}
          required
        />
        <br /> <br />

        <input htmlfor="addMember">add Member</input>
        <button type="submit" id="addMember" >Submit</button>
        <br /> <br />

      </form>
    </div>
  );
};

export default Form;
