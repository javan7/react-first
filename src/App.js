import { useState, useEffect } from "react";
import classes from "./App.module.scss";
import logo from "./images/pokemon.png";
import Cards from "./components/Cards.js";
import Modal from "./components/Modal.js";
import image1 from "./images/Group1.png";
import image2 from "./images/Group2.png";
import image3 from "./images/Group3.png";
import image4 from "./images/Group4.png";

function App() {
  const [modalActive, setModalActive] = useState(true);
  const [first, setfirst] = useState([]);
  const [second, setsecond] = useState([]);
  const [third, setthird] = useState([]);
  const [four, setfour] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((res) => res.json())
      .then((res) => setfirst(res));
  }, []);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur")
      .then((res) => res.json())
      .then((res) => setsecond(res));
  }, []);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/weedle")
      .then((res) => res.json())
      .then((res) => setthird(res));
  }, []);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/beedrill")
      .then((res) => res.json())
      .then((res) => setfour(res));
  }, []);

  const handlClick = () => {
    setModalActive(true);
  };
  return (
    <div className={classes.App}>
      <header className={classes.Header}>
        <img
          className={classes.Header__logo}
          src={logo}
          alt="logo"
          height={"103px"}
          width={"257px"}
        ></img>
      </header>
      <section className={classes.Search}>
        <input
          className={classes.Search__Inp}
          placeholder="Find pokemon"
        ></input>
        <button className={classes.Search__Btn}>Search</button>
      </section>
      <section className={classes.Cards}>
        <Cards title={first.name} url={image1} onClick={handlClick} />
        <Cards title={second.name} url={image2} onClick={handlClick} />
        <Cards title={third.name} url={image3} onClick={handlClick} />
        <Cards title={four.name} url={image4} onClick={handlClick} />
      </section>
      <Modal
        title="Ditto"
        url={image2}
        active={modalActive}
        setActive={setModalActive}
      />
    </div>
  );
}

export default App;
