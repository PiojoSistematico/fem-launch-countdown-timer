import { useState } from "react";
import bgStars from "./assets/images/bg-stars.svg";
import bgHills from "./assets/images/pattern-hills.svg";

import { IconFacebook, IconInstagram, IconPinterest } from "./components/Icons";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="bg-gradient-to-b from-neutral-4 to bg-neutral-3 relative h-screen text-sm text-neutral-1 font-RedHatText overflow-hidden">
        <section className="pt-40 flex flex-col gap-20 items-center">
          <picture className="absolute object-contain">
            <img src={bgStars} alt="stars-background" />
          </picture>
          <h1 className="text-xl text-neutral-1 uppercase tracking-widest">
            We're launching soon
          </h1>
          <div className="flex flex-row items-center gap-8">
            <div className="flex flex-col gap-4 items-center">
              <span className="text-primary-2 text-3xl p-4 rounded-md bg-neutral-2">
                08
              </span>
              <span className="text-primary-1 text-[8px] uppercase tracking-[0.2em]">
                Days
              </span>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <span className="text-primary-2 text-3xl p-4 rounded-md bg-neutral-2">
                23
              </span>
              <span className="text-primary-1 text-[8px] uppercase tracking-[0.2em]">
                Hours
              </span>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <span className="text-primary-2 text-3xl p-4 rounded-md bg-neutral-2">
                55
              </span>
              <span className="text-primary-1 text-[8px] uppercase tracking-[0.2em]">
                Minutes
              </span>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <span className="text-primary-2 text-3xl p-4 rounded-md bg-neutral-2">
                41
              </span>
              <span className="text-primary-1 text-[8px] uppercase tracking-[0.2em]">
                Seconds
              </span>
            </div>
          </div>
        </section>

        <footer className=" w-full p-8 absolute bottom-0 left-0 z-10 flex flex-row justify-center items-center gap-8">
          <a href="#" className="text-primary-1">
            <IconFacebook></IconFacebook>
          </a>
          <a href="#" className="text-primary-1">
            <IconPinterest></IconPinterest>
          </a>
          <a href="#" className="text-primary-1">
            <IconInstagram></IconInstagram>
          </a>
        </footer>
        <picture className="absolute bottom-0 left-0">
          <img src={bgHills} alt="hills-background" />
        </picture>
      </main>
    </>
  );
}

export default App;
