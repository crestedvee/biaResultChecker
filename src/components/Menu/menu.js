import React from "react";
import { NavLink } from "react-router-dom";
import styles from './menu.module.css';

function Menu() {
  return (
    <>
      <div className={styles.mainMenu}>
        <NavLink to='./home' className={styles.navLink} style={({ isActive }) => {
          return isActive ? { color: "brown" } : {};
        }}>Home</NavLink>
        <NavLink to='./about' className={styles.navLink} style={({ isActive }) => {
          return isActive ? { color: "brown" } : {};
        }}>About</NavLink>
        <NavLink to='/contact' className={styles.navLink} style={({ isActive }) => {
          return isActive ? { color: "brown" } : {};
        }}>Contact</NavLink>
      </div>
    </>
  );
}

export default Menu;
