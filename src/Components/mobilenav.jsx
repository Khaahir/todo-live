import React from "react";
import { Link } from "react-router-dom";
import { toggleMenu } from "../Redux/TodoAppSlice";

import { useSelector, useDispatch } from "react-redux";
function Mobilenav() {
  const isOpen = useSelector((state) => state.toggle.isOpen);
  const dispatch = useDispatch();

  return (
    <>
      {isOpen && (
        <nav className="h-[25rem] w-[15rem] absolute top-12  bg-blue-300 flex flex-col justify-around text-3xl text-white ml-1 rounded-2xl p-3">
          <Link to={"/add"} onClick={() => dispatch(toggleMenu())}>
            Lägg till arbete
          </Link>
          <Link>Inställningar</Link>
          <Link to={"/main"} onClick={() => dispatch(toggleMenu())}>
            Att Göra
          </Link>
          <Link>Egen Lista</Link>
        </nav>
      )}
    </>
  );
}

export default Mobilenav;
