import React, { useState } from "react";
import Arcade from "../../assets/images/icon-arcade.svg";
import Advanced from "../../assets/images/icon-advanced.svg";
import Pro from "../../assets/images/icon-pro.svg";
import styles from "./Plan.module.css";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { planActions, stepAction, toggleAction } from "../../store";

export const planOptions = [
  {
    Arcade: {
      monthPrice: 9,
      yearPrice: 90,
    },
  },
  {
    Advanced: {
      monthPrice: 12,
      yearPrice: 120,
    },
  },
  {
    Pro: {
      monthPrice: 15,
      yearPrice: 150,
    },
  },
];

function Plan() {
  const svgMapping = {
    Arcade,
    Advanced,
    Pro,
  };
  const dispatch = useDispatch();

  const { value } = useSelector((store) => store.toggle);
  const {planValue} = useSelector((store) => store.plan);


  const handle = () => {
    dispatch(stepAction.increment());
  };
  const handles = () => {
    dispatch(stepAction.decrement());
  };

  const handleChange = (e) => {
    dispatch(toggleAction.toggleHandle({ num: e.target.checked }));
  };

  const handleClick=(e)=>{
    dispatch(planActions.handlePlan(e.currentTarget.id))
    
  }

  return (
    <>
      <div>
        <h1 className="formTitle">Select your plan</h1>
        <p className="formInfo">
          You have the option of monthly or yearly billing.
        </p>
      </div>

      <div className={styles.planWrapper}>
        {planOptions.map((item) => {
          const SvgComponent = svgMapping[Object.keys(item)];
          const isPlanSelected = planValue.includes(Object.keys(item));
      
          return (
            <div
              className={
                isPlanSelected
                  ? `${styles.planItem} ${styles.active} `
                  : `${styles.planItem}`
              }
              onClick={handleClick}
              id={Object.keys(item)}
            >
              <img src={SvgComponent} alt="" />

              <div>
                <h2>{Object.keys(item)}</h2>
                {value ? (
                  <>
                    <p>${item[Object.keys(item)].yearPrice}/mo</p>
                    <span>2 months free</span>
                  </>
                ) : (
                  <p>${item[Object.keys(item)].monthPrice}/mo</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.durationWrapper}>
        <span className={value ? "" : styles.active}>Monthly</span>

        <label className="switch" htmlFor="toggle-button">
          <input
            type="checkbox"
            onChange={handleChange}
            id="toggle-button"
            name="toggle-button"
            checked={value}
          />
          <span className="slider"></span>
        </label>

        <span className={value ? styles.active : ""}>Yearly</span>
      </div>

      <div className={styles.flexParent}>
        <div className={styles.buttonWrapper}>
          <Button onClick={handles} id="back" buttonInfo="Go Back" />
          <Button onClick={handle} id="next" buttonInfo="Next Step" />
        </div>
      </div>
    </>
  );
}

export default Plan;
