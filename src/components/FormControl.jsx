import React from "react";
import styles from "./FormControl.module.css";
import ProfilePage from "./Formpage/ProfilePage";
import Plan from "./Formpage/Plan";
import { useSelector } from "react-redux";
import AddOns from "./Formpage/AddOns";
import Summary from "./Formpage/Summary";
import Thanks from "./Formpage/Thanks";

function FormControl() {
  const { stepVal } = useSelector((store) => store.stepCounter);
  console.log(stepVal);
  switch (stepVal) {
    case 1:
      return (
        <section className={styles.formWrapper}>
          <ProfilePage />
        </section>
      );
    case 2:
      return (
        <section className={styles.formWrapper}>
          <Plan />
        </section>
      );
    case 3:
      return (
        <section className={styles.formWrapper}>
          <AddOns />
        </section>
      );
    case 4:
      return (
        <section className={styles.formWrapper}>
          <Summary />
        </section>
      );
    case 5:
      return (
        <section className={styles.formWrapper}>
          <Thanks />
        </section>
      );
  }
}

export default FormControl;
