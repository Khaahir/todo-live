import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Redux/TodoAppSlice";
import Button from "../Components/button";

function AddWork() {
  const [task, setTask] = useState("");

  const sendTodo = async () => {
    try {
      const req = await fetch("http://localhost:8080/api/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uppgift: task }),
      });

      const data = await req.json();
      setTask("");
    } catch (error) {
      console.log(error);
    }
  };

  const dispatch = useDispatch();
  return (
    <>
      <section className="bg-gradient-to-r from-blue-500 to-white min-h-screen flex flex-col  ">
        <Button
          children={<img className="h-10" src="src/assets/app.png" alt="" />}
          classname={"mb-5 mt-2 "}
          onClick={() => dispatch(toggleMenu())}
        />
        <div className="h-full mx-4 flex flex-col items-center ">
          <span className="text-3xl font-bold my-4 w">Lägg till arbete</span>
          <div className="flex flex-col bg-white-100 h-[30rem] w-full rounded-2xl ">
            <span className="m-2 font-bold">Uppgift:</span>
            <form>
              <textarea
                className="h-[25rem] w-full overflow-auto resize-none p-2 focus:outline-none"
                placeholder="Vad ska göras?"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                rows="4"
              />
            </form>
          </div >
         
            <Button
              children={"Lägg till bild"}
              classname={
                "bg-sky-700 w-full  font-bold p-1 rounded mb-2 text-white "
              }
            />
            <Button
              onClick={() => sendTodo()}
              classname={
                "bg-sky-700 w-full font-bold p-1 rounded mb-2 text-white"
              }
              children={"lägg till Arbete"}
            />
          
        </div>
      </section>
    </>
  );
}

export default AddWork;
