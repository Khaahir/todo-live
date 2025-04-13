import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Redux/TodoAppSlice";
import Button from "../Components/button";

function AddWork() {
  const dispatch = useDispatch();
  return (
    <>
      <section className="bg-gradient-to-r from-blue-500 to-white h-full flex flex-col  ">
        <Button
          children={<img className="h-10" src="src/assets/app.png" alt="" />}
          classname={"mb-5 mt-2 "}
          onClick={() => dispatch(toggleMenu())}
        />
        <div className="h-full mx-4 flex flex-col items-center">
          <span className="text-3xl font-bold my-4 w">Lägg till arbete</span>
          <div className="flex flex-col bg-white-100 h-[30rem] w-full rounded-2xl ">
            <span className="m-2 font-bold">Uppgift:</span>
            <form onSubmit={""}>
              <textarea
                className="h-[25rem] w-full overflow-auto resize-none p-2 focus:outline-none"
                placeholder="Vad ska göras?"
                rows="4"
              />
            </form>
          </div>
          <div className="flex gap-4 mt-4 flex-col ">
            <Button
              children={"Lägg till bild"}
              classname={
                "bg-sky-700 w-screen  font-bold p-1 rounded mb-2 text-white"
              }
            />
            <Button
              classname={
                "bg-sky-700 w-full font-bold p-1 rounded mb-2 text-white"
              }
              children={"lägg till Arbete"}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default AddWork;
