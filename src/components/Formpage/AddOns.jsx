import React from "react";
import styles from "./AddOns.module.css";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { addOnActions, stepAction } from "../../store";

export const options = [
  {
    name: "Online service",
    description: "Access to multiplayer games",
    pricePerMonth: 1,
    pricePerYear: 10,
  },
  {
    name: "Larger storage",
    description: "Extra 1TB of cloud save",
    pricePerMonth: 2,
    pricePerYear: 20,
  },
  {
    name: "Customizable Profile",
    description: "Custom theme on your profile",
    pricePerMonth: 2,
    pricePerYear: 20,
  },
];
function AddOns() {
  const dispatch = useDispatch();
  const handle = () => {
    dispatch(stepAction.increment());
  };
  const handles = () => {
    dispatch(stepAction.decrement());
  };

  const selectAddOn = ({ target }) => {
    dispatch(
      addOnActions.addAddOn({ num: target.checked, num2: target.value })
    );
    
  };
  const { value } = useSelector((store) => store.toggle);
  const {checkVal}=useSelector((store)=>store.addOn)
  return (
    <>
      <div>
        <h1 className="formTitle">Pick add-ons</h1>
        <p className="formInfo">Add-ons help enhance your gaming experience.</p>
      </div>

      {options.map((option, index) => {
        const isChecked = checkVal.includes(option.name);
        return (
          <label
            key={option.name}
            htmlFor={index}
            className={styles.checkboxWrapper}
          >
            <input
              id={index}
              type="checkbox"
              onChange={selectAddOn}
              value={option.name}
              checked={isChecked}
            ></input>
            <div>
              <h2>{option.name}</h2>
              <p>{option.description}</p>
            </div>
            <span>
              {value
                ? `+$${option.pricePerYear}/yr`
                : `+$${option.pricePerMonth}/mo`}
            </span>
          </label>
        );
      })}
      <div className={styles.flexParent}>
        <div className={styles.buttonWrapper}>
          <Button onClick={handles} id="back" buttonInfo="Go Back" />
          <Button onClick={handle} id="next" buttonInfo="Next Step" />
        </div>
      </div>
    </>
  );
}

export default AddOns;
