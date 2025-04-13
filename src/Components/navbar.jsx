import React from "react";
import { Link } from "react-router-dom";

function Navbar({ className }) {
  return (
    <>
      <section
        className={`  h-[5rem] bg-blue-300 text-white flex items-center justify-between flex-row-reverse ${className}`}
      >
        <span className="mr-4 text-5xl">Välkommen {"Användare"}</span>

        <nav className=" ml-4  text-3xl flex gap-14">
          <Link>Lägg till arbete</Link>
          <Link>Inställningar</Link>
          <Link>Bild-arkiv</Link>
          <Link>Egen Lista</Link>
        </nav>
      </section>
    </>
  );
}

export default Navbar;
