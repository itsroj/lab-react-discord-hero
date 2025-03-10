// src/App.jsx
import './App.css';
import discordlogo from "./assets/discord-logo-white.png"
import burgerlogo from "./assets/menu-icon.png"
import people from "./assets/discord-background.png"

function App() {
  return (
    <div className="App">
      <div className="logos">
        <img src={discordlogo} alt="discordlogo"/> 
        <img src={burgerlogo} alt="burgerlogo"/>
      </div>
      <section>
        <h1>IMAGINE A <br></br> PLACE...</h1>
        <p>...where you can belong to a school club, a gaming group, or a <br></br>  worldwide art community. Where just you and a handful of <br></br> friends can spend time together. A place that makes it easy to <br></br> talk every day and hang out more often.</p>
      </section>
      <section className="buttons">
        <button id="firstButton">Download for Mac</button>
        <button id="secondButton">Open Discord in your browser</button>
      </section>
      <section className="lastPicture">
        <img src={people} alt="people" id="peopleimg"/>
      </section>
    </div>
  );
}

export default App;