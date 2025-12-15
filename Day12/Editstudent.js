import { useEffect, useState } from "react";
import { getStudentById, updateStudent } from "../api";
import { useNavigate, useParams } from "react-router-dom";

function EditStudent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  // ✅ FETCH STUDENT BY ID
  useEffect(() => {
    getStudentById(id).then((res) => {
      setName(res.data.name);
      setEmail(res.data.email);
    });
  }, [id]);

  const submit = async (e) => {
    e.preventDefault();

    const student = { name, email };

    await updateStudent(id, student);
    navigate("/");
  };

  return (
    <>
      <h1>Edit Student Page</h1>

      <form onSubmit={submit}>
        <label>Name</label><br />
        <input
          type="text"
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

        <button type="submit">Update</button>
      </form>
    </>
  );
}

export default EditStudent;
