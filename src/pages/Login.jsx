import React from "react";
import Button from "../Components/button";
function Login() {
  return (
    <>
      <main className="flex h-screen flex-col items-center justify-center bg-[linear-gradient(to_bottom,_#A9DDF3,_#77628D)]">
        <h2 className="text-6xl">Välkommen</h2>

        <section className="grid h-72 w-200 grid-cols-8 grid-rows-8 rounded-md border-2 gap-x-2.5 bg-gray-200">
          <input
            className=" row-start-3 row-end-3 col-start-3 col-end-8 h-10 w-80 text-3xl underline underline-offset-3 focus:outline-none justify-self-center"
            type="text"
            placeholder="Användarnamn"
            onChange={"state"}
          />
          <input
            className=" row-start-5 col-start-3 col-end-8 underline- in w font- h-10 w-80 text-3xl underline underline-offset-3 focus:outline-none justify-self-center"
            type="password"
            placeholder="Lösenord"
            onChange={"state"}
          />
          <Button
            classname="col-start-3 col-end-5 row-start-7 bg-blue-500 text-2xl gap-2 w-40 rounded-2xl"
            children={"Logga in"}
          ></Button>
          <Button
            classname="col-start-4 col-end-7 row-start-7 row-end-7 bg-blue-500 text-2xl w-40 justify-self-center rounded-2xl"
            children={"Skapa Konto"}
          ></Button>
        </section>
      </main>
    </>
  );
}

export default Login;
