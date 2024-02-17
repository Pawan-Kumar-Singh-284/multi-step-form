import React from "react";
import styles from "./Summary.module.css";
import { useDispatch, useSelector } from "react-redux";
import { planOptions } from "./Plan";
import { stepAction, toggleAction } from "../../store";
import { options } from "./AddOns";
import Button from "./Button";

function Summary() {
  const dispatch = useDispatch();



  const handle = () => {
    dispatch(stepAction.increment());
  };
  const handles = () => {
    dispatch(stepAction.decrement());
  };
  const { planValue } = useSelector((store) => store.plan);
  const { value } = useSelector((store) => store.toggle);
  const { checkVal } = useSelector((store) => store.addOn);
  console.log(checkVal);
  const filterPlan = planOptions.filter((item) =>
    Object.keys(item).includes(planValue)
  )[0][planValue];
  console.log(filterPlan);

  const addOnsFiltered = options.filter((item) => checkVal.includes(item.name));

  const handleClick = (e) => {
    dispatch(toggleAction.changePlan({ num: true }));
  };

  const addOnsSum = addOnsFiltered.reduce((a, b) => {
    if (value) {
      return a + b.pricePerYear;
    } else {
      return a + b.pricePerMonth;
    }
  }, 0);
  return (
    <>
      <div>
        <h1 className="formTitle">Finishing up</h1>
        <p className="formInfo">
          Double check everything looks OK before confirming.
        </p>
      </div>

      <div className={styles.summaryWrapper}>
        <div className={styles.planPriceWrapper}>
          <div>
            <h2>
              {planValue} {value ? "(Yearly)" : "(Monthly)"}
            </h2>
            <button onClick={handleClick}>Change</button>
          </div>
          <span className={styles.planPrice}>
            {value
              ? `$${filterPlan.yearPrice}/yr`
              : `$${filterPlan.monthPrice}/mo`}
          </span>
        </div>

        {checkVal.length ? (
          <div className={styles.addOnsWrapper}>
            {addOnsFiltered.map((item) => (
              <div key={item.name} className={styles.addOnsItemWrapper}>
                <p>{item.name}</p>
                <span>
                  {value
                    ? `+$${item.pricePerYear}/yr`
                    : `+$${item.pricePerMonth}/mo`}
                </span>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div className={styles.finalPriceWrapper}>
        <p>Total {value ? "(per year)" : "(per month)"} </p>
        <span>
          {value
            ? `$${addOnsSum + filterPlan.yearPrice}/yr`
            : `$${addOnsSum + filterPlan.monthPrice}/mo`}
        </span>
      </div>
      <div className={styles.flexParent}>
        <div className={styles.buttonWrapper}>
          <Button
            onClick={handles}
            id="back"
            buttonInfo="Go Back"
          />
          <Button
             onClick={handle}
            id="next"
            buttonInfo="Confirm"
          />
        </div>
      </div>
    </>
  );
}

export default Summary;
