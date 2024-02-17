import React, { useState } from "react";
import styles from "./SidebarItem.module.css"
import { useSelector } from "react-redux";

function SidebarItem({index, stepInfo}) {

  const {stepVal} = useSelector((store)=>store.stepCounter)

    function active(stepVal, index){
        if(stepVal === index) return true;
    }

    const isActive = active(stepVal, index);
  return (
    <div className={styles.itemWrapper}>
      <span  className={isActive ? `${styles.index} ${styles.active}` : styles.index}>{index}</span>
      <div className={styles.stepWrapper}>
        <span>step {index}</span>
        <span>{stepInfo}</span>
      </div>
    </div>
  );
}

export default SidebarItem;
