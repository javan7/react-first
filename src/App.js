import classes from "./App.module.scss";
import logo from "./images/pokemon.png";
import Cards from "./components/Cards.js";
import image1 from "./images/Group1.png";
import image2 from "./images/Group2.png";
import image3 from "./images/Group3.png";
import image4 from "./images/Group4.png";

function App() {
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
        <Cards title="Ditto" url={image1} />
        <Cards title="Bulbasaur" url={image2} />
        <Cards title="Weedle" url={image3} />
        <Cards title="Beedrill" url={image4} />
      </section>
    </div>
  );
}

export default App;
