import { useState } from "react";
import bgStars from "./assets/images/bg-stars.svg";
import bgHills from "./assets/images/pattern-hills.svg";

import instagram from "./assets/images/icon-instagram.svg";
import pinterest from "./assets/images/icon-pinterest.svg";
import facebook from "./assets/images/icon-facebook.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <picture>
          <img src={bgStars} alt="stars-background" />
        </picture>

        <section>
          <h1>We're launching soon</h1>
          <div>
            <span>08</span>
            <span>23</span>
            <span>55</span>
            <span>41</span>
            <span>Days</span>
            <span>Hours</span>
            <span>Minutes</span>
            <span>Seconds</span>
          </div>
        </section>

        <footer>
          <a href="#">
            <img src={facebook} alt="facebook-icon" />
          </a>
          <a href="#">
            <img src={pinterest} alt="pinterest-icon" />
          </a>
          <a href="#">
            <img src={instagram} alt="instagram" />
          </a>
        </footer>
        <picture>
          <img src={bgHills} alt="hills-background" />
        </picture>
      </main>
    </>
  );
}

export default App;
