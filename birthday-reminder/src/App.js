import "./App.css";
import List from "./List.js";
import data from "./data.js";
import { useState } from "react";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h2>{people.length} birthdays today</h2>
        <List people={people}></List>
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;
