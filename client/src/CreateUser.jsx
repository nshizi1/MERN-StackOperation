import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function CreateUser() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/createUser", {name, email, age})
    .then(result => {
      console.log(result)
      navigate("/");
    })
    .catch(err => console.log(err))
  }
  return (
    <div className="flex h-screen bg-blue-500 justify-center items-center ">
      <div className="w-1/2 bg-white rounded-md p-3">
        <form onSubmit={Submit}>
          <h2>Add User</h2>
          <div className="mb-2 flex gap-3">
            <label htmlFor="">Name</label>
            <input type="text" className="p-2 border-2 rounded-sm " onChange={(e) => setName(e.target.value)} placeholder="Enter your names" />
          </div>
          <div className="mb-2 flex gap-3">
            <label htmlFor="">Email</label>
            <input type="email" className="p-2 border-2 rounded-sm " onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
          </div>
          <div className="mb-2 flex gap-3">
            <label htmlFor="">Age</label>
            <input type="text" className="p-2 border-2 rounded-sm " onChange={(e) => setAge(e.target.value)} placeholder="Enter your age" />
          </div>
          <button className="px-4 py-2 text-white bg-green-500 rounded-md">Add User</button>
        </form>
      </div>
    </div>
  )
}

export default CreateUser
