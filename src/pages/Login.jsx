import React from "react";
import Button from "../Components/button";

function Login() {
  return (
    <>
      <main className="bg-gradient-to-r from-blue-500 to-yellow-500 h-screen grid grid-cols-12 grid-rows-12">
        <h2 className="text-4xl col-start-1 col-end-13 row-start-3 text-center content-center sm:text-5xl md:text-8xl ">
          Välkommen
        </h2>

        <section className=" col-start-1 col-end-13 row-start-5 text-2xl  sm:text-3xl ">
          <div className="flex flex-col items-center  gap-4">
            <input
              className=" w-[15rem] text-center focus:outline-none border-b-2 "
              type="text"
              placeholder="Användarnamn"
              onChange={"state"}
            />

            <input
              className="text-center focus:outline-none w-[15rem]  border-b-2 mb-4"
              type="password"
              placeholder="Lösenord"
              onChange={"state"}
            />

            <Button
              classname={"bg-blue-600 font-extrabold p-2 rounded text-white "}
              children={"Logga in"}
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default Login;
