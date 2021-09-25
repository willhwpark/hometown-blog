import React, { useState, useEffect } from "react";

const RegisterAdmin = () => {
  const [newAdmin, setNewAdmin] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <>
      <h1>Admin Registration</h1>
      <div>
        <label htmlFor="">Admin Username</label>
        <input type="text" name="" id="" />
      </div>
      <label htmlFor="">Admin Password</label>
      <input type="text" name="" id="" />
      <div>
        <label htmlFor="">Confirm Password</label>
        <input type="text" name="" id="" />
      </div>
      <button>submit</button>
      <footer>
        <button onClick={(e) => (window.location.href = "/")}>Home</button>
      </footer>
    </>
  );
};

export default RegisterAdmin;
