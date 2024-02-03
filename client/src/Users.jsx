import { useState } from "react";
import {Link} from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([{
    Id: 1, Name: "Wilson Nshizi", Email: "wilsonnshi1@gmail.com", Age: 18
  }]);
  return (
    <div className="flex h-screen bg-blue-500 justify-center  items-center  ">
        <div className="w-2/4 bg-white rounded-md p-3">
          <Link to="/create" className="px-4 py-2 text-white bg-green-500 rounded-md">Add User</Link>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map(user => (
                  <tr key={user.id}>
                    <td>{user.Name}</td>
                    <td>{user.Email}</td>
                    <td>{user.Age}</td>
                    <td>
                      <Link to="/update" className="px-4 py-2 text-white bg-blue-500 rounded-md">Update</Link>
                      <Link to="/create" className="px-4 py-2 text-white bg-red-500 rounded-md">Delete</Link>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default Users
