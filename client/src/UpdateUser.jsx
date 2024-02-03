
function UpdateUser() {
  return (
    <div className="flex h-screen bg-blue-500 justify-center items-center ">
      <div className="w-1/2 bg-white rounded-md p-3">
        <form>
          <h2>Update User</h2>
          <div className="mb-2 flex gap-3">
            <label htmlFor="">Name</label>
            <input type="text" className="p-2 border-2 rounded-sm " placeholder="Enter your names" />
          </div>
          <div className="mb-2 flex gap-3">
            <label htmlFor="">Email</label>
            <input type="email" className="p-2 border-2 rounded-sm " placeholder="Enter your email" />
          </div>
          <div className="mb-2 flex gap-3">
            <label htmlFor="">Age</label>
            <input type="text" className="p-2 border-2 rounded-sm " placeholder="Enter your age" />
          </div>
          <button className="px-4 py-2 text-white bg-green-500 rounded-md">Update</button>
        </form>
      </div>
    </div>
  )
}

export default UpdateUser
