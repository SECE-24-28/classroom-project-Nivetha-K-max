import { useState } from "react";
import { createStudent } from "../api";
import { useNavigate } from "react-router-dom";

function AddStudent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    await createStudent({ name, email });

    navigate("/"); 
  };

  return (
    <>
      <h1>Add Student Page</h1>

      <form onSubmit={submit}>
        <label>Name</label><br />
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br />

        <label>Email</label><br />
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />

        <button type="submit">Save</button>
      </form>
    </>
  );
}

export default AddStudent;