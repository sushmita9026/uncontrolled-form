import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
function Form() {
  const name = useRef();
  const email = useRef();
  const massege = useRef();
  const navigate = useNavigate();

  function submit(e) {
    e.preventDefault();
    navigate("/Data", {
      state: {
        Name: name.current.value,
        Email: email.current.value,
        Massege: massege.current.value,
      },
    });
  }
  return (
    <>
      <h1> Uncontrolled Form</h1>
      <div className="container">
        <form onSubmit={submit}>
          <label>
            Name:
            <input type="text" ref={name} required></input>
          </label>
          <label>
            Email:
            <input type="email" ref={email} required></input>
          </label>
          <label>
            massege:
            <input type="text" ref={massege} required></input>
          </label>
          <button type="submit">submit</button>
        </form>
      </div>
    </>
  );
}
export default Form;
