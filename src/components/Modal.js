import React from "react";
import classes from "./Modal.module.scss";
import cn from "classnames";

function Modal({ title, url, active, setActive }) {
  return (
    <div
      className={active ? cn(classes.Modal, classes.active) : classes.Modal}
      onClick={() => setActive(false)}
    >
      <div
        className={classes.Modal__Block}
        onClick={(e) => e.stopPropagation()}
      >
        <img src={url} alt="Ditto" height="200px"></img>
        <div className={classes.Modal__Block__Text}>
          <h1 className={classes.Modal__Block__Text__title}>BULBASAUR</h1>
          <h2 className={classes.Modal__Block__Text__stat}>STATS</h2>
          <div className={classes.Modal__Block__Text__stat1}>
            <div>hp: 45</div>
            <div>attack: 45</div>
            <div>deffence: 49</div>
            <div>special attack: 65</div>
            <div>special deffence: 65</div>
            <div>speed: 45</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
