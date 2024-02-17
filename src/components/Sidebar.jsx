import React from "react";
import SidebarItem from "./SidebarItem";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <section className={styles.section}>
      <SidebarItem index={1} stepInfo="Your info" />
      <SidebarItem index={2} stepInfo="Select plan" />
      <SidebarItem index={3} stepInfo="Add-ons" />
      <SidebarItem index={4} stepInfo="Summary" />
    </section>
  );
}

export default Sidebar;
