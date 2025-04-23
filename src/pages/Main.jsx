import React, { useEffect, useState } from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import Button from "../Components/button";
import { toggleMenu } from "../Redux/TodoAppSlice";
import { useDispatch } from "react-redux";

function Main() {
  const [dataTodo, setDataTodo] = useState([]);
  const getTodos = async () => {
    try {
      const resp = await fetch("http://localhost:8080/api/todos");
      const data = await resp.json();
      setDataTodo(data.todos);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteTodo = async (todoId) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/todos/${todoId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      if (data.success) {
        console.log("Todo deleted successfully!");
        setDataTodo((prevData) =>
          prevData.filter((todo) => todo._id !== todoId)
        );
      } else {
        console.log("Error deleting todo:", data.Message);
      }
    } catch (error) {
      console.log("An error occurred while deleting the todo:", error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);
  const [isOpen, setIsOpen] = useState();
  const dispatch = useDispatch();

  const handleBtn = () => {
    setIsOpen(!isOpen);
    dispatch(toggleMenu());
  };
  return (
    <>
      <section className="bg-gradient-to-r from-blue-500 to-white min-h-screen ">
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

        <h1 className="text-4xl font-bold mt-10">Att Göra:</h1>
        <main className=" h-full overflow-y-auto">
          {dataTodo.map((todo) => (
            <div
              key={todo._id}
              className="mb-4 p-4 bg-white rounded shadow-md grid "
            >
              <h2 className="text-1xl font-bold">{todo.uppgift}</h2>
              <img
                src={"src/assets/app"}
                alt=""
                className="mt-2 w-10 h-10 object-cover"
              />
              <p className="text-[0.6rem] font-bold mt-4">
                {" "}
                skapad:{todo.time}
              </p>
              <Button
                children={"Delete"}
                onClick={() => deleteTodo(todo._id)} // Delete the todo by ID
                classname="bg-red-500 text-white p-2 rounded mt-2"
              />
            </div>
          ))}
        </main>
      </section>
    </>
  );
}

export default Main;
