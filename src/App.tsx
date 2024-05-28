import { useEffect, useState } from "react";
import bgStars from "./assets/images/bg-stars.svg";
import bgHills from "./assets/images/pattern-hills.svg";

import { IconFacebook, IconInstagram, IconPinterest } from "./components/Icons";

function App() {
  /* seconds in 14 days */
  const [count, setCount] = useState(1209600);

  const days = Math.floor(count / 86400);
  const hours = Math.floor((count - days * 86400) / 3600);
  const minutes = Math.floor((count - days * 86400 - hours * 3600) / 60);
  const seconds = Math.floor(
    count - days * 86400 - hours * 3600 - minutes * 60
  );

  useEffect(() => {
    setTimeout(() => setCount(count - 1), 1000);
  }, [count]);

  return (
    <>
      <main className="bg-gradient-to-b from-neutral-3 to-neutral-3 relative h-screen text-sm text-neutral-1 font-RedHatText overflow-hidden">
        <section className="pt-40 flex flex-col gap-20 items-center">
          <picture className="absolute">
            <img
              src={bgStars}
              alt="stars-background"
              className="object-cover h-screen"
            />
          </picture>
          <h1 className="text-3xl text-neutral-1 uppercase text-center tracking-widest md:text-4xl">
            We're launching soon
          </h1>
          <div className="flex flex-row items-center gap-4">
            <div className="flex flex-col gap-4 items-center">
              <span className="text-primary-2 text-3xl p-4 rounded-md bg-neutral-2 w-20 h-20 flex flex-row items-center justify-center md:h-32 md:w-32 md:text-5xl">
                {days}
              </span>
              <span className="text-primary-1 text-[8px] uppercase tracking-[0.2em] md:text-sm">
                Days
              </span>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <span className="text-primary-2 text-3xl p-4 rounded-md bg-neutral-2 w-20 h-20 flex flex-row items-center justify-center md:h-32 md:w-32 md:text-5xl">
                {hours}
              </span>
              <span className="text-primary-1 text-[8px] uppercase tracking-[0.2em] md:text-sm">
                Hours
              </span>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <span className="text-primary-2 text-3xl p-4 rounded-md bg-neutral-2 w-20 h-20 flex flex-row items-center justify-center md:h-32 md:w-32 md:text-5xl">
                {minutes}
              </span>
              <span className="text-primary-1 text-[8px] uppercase tracking-[0.2em] md:text-sm">
                Minutes
              </span>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <span className="text-primary-2 text-3xl p-4 rounded-md bg-neutral-2 w-20 h-20 flex flex-row items-center justify-center md:h-32 md:w-32 md:text-5xl">
                {seconds}
              </span>
              <span className="text-primary-1 text-[8px] uppercase tracking-[0.2em] md:text-sm">
                Seconds
              </span>
            </div>
          </div>
        </section>

        <footer className=" w-full p-12 absolute bottom-0 left-0 z-10 flex flex-row justify-center items-center gap-12">
          <a
            href="#"
            className="text-primary-1 hover:text-primary-2 transform scale-150"
          >
            <IconFacebook></IconFacebook>
          </a>
          <a
            href="#"
            className="text-primary-1 hover:text-primary-2 transform scale-150"
          >
            <IconPinterest></IconPinterest>
          </a>
          <a
            href="#"
            className="text-primary-1 hover:text-primary-2 transform scale-150"
          >
            <IconInstagram></IconInstagram>
          </a>
        </footer>
        <picture className="absolute bottom-0 left-0">
          <img
            src={bgHills}
            alt="hills-background"
            className="h-[200px] w-screen"
          />
        </picture>
      </main>
    </>
  );
}

export default App;
