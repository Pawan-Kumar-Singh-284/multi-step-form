import React from "react";
import styles from "./ProfilePage.module.css";
import Button from "./Button";
import { stepAction } from "../../store";
import { useDispatch } from "react-redux";

function ProfilePage() {
  const dispatch=useDispatch();

  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(stepAction.increment())
  }
  return (

    <>
      <div>
        <h1 className="formTitle">Personal Info</h1>
        <p className="formInfo">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="e.g. Martin Scorsese" required />
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" placeholder="e.g. 123@gmail.com" required />
        <label htmlFor="phone">Phone Number</label>
        <input type="phone" id="phone" placeholder="e.g. +1234567890"  required/>

        <div className={styles.flexParent}>
          <div className={styles.buttonWrapper}>
            <Button id="next" buttonInfo="Next Step" />
          </div>
        </div>
      </form>
    </>
  );
}

export default ProfilePage;
