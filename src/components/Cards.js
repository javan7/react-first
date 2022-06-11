import React from "react";
import classes from "./Cards.module.scss";
import cn from "classnames";

function Cards(props) {
  return (
    <div className={classes.Card} onClick={props.onClick}>
      <img className={classes.Card__Img} src={props.url} height="200px"></img>
      <p className={classes.Card__Name}>{props.title}</p>
    </div>
  );
}

export default Cards;
