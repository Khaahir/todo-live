import React, { useState } from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import Button from "../Components/button";
import { toggleMenu } from "../Redux/TodoAppSlice";
import { useDispatch } from "react-redux";
const tasks = [
  { title: "Uppgift 1", time: "12 Apr 2025", image: "link1.jpg" },
  { title: "Uppgift 2", time: "13 Apr 2025", image: "link2.jpg" },
];

function Main() {
  const [isOpen, setIsOpen] = useState();
  const dispatch = useDispatch();

  const handleBtn = () => {
    setIsOpen(!isOpen);
    dispatch(toggleMenu());
  };
  return (
    <>
      <section className="bg-gradient-to-r from-blue-500 to-white h-screen ">
        <Button
          children={
            <img
              className="h-10"
              src={isOpen ? "src/assets/appopen.png" : "src/assets/app.png"}
              alt=""
            />
          }
          classname={"m-1 lg:hidden"}
          onClick={handleBtn}
        />
        <Navbar className={"hidden lg:block"} />

        <main>
          <h1 className="text-4xl font-bold mt-10">Att Göra:</h1>
          <div className="w-screen h-full bg-amber-100"></div>
          {tasks.map((task, index) => (
            <div key={index} className="mb-4 p-4 bg-white rounded shadow-md">
              <p className="text-2xl font-bold">{task.time}</p>
              <h2 className="text-1xl font-bold">{task.title}:</h2>
              <img
                src={task.image}
                alt=""
                className="mt-2 w-10 h-10 object-cover"
              />
            </div>
          ))}
        </main>
      </section>
    </>
  );
}

export default Main;
