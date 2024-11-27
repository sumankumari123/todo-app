import React, {useState, ChangeEvent, FormEvent} from "react";
import { useTodo } from "./store/Todos";


const Todo = () => {
const [currentValue, setCurrentValue]=  useState("")
const {todos, handleAddTodo} = useTodo();

const getInputValue = (e: ChangeEvent<HTMLInputElement>)=>{
  setCurrentValue(e.target.value)
}
const handleSubmitData = (e: FormEvent<HTMLFormElement>)=>{
  e.preventDefault()
  handleAddTodo(currentValue)
  setCurrentValue("")

}

  return (
    <form onSubmit={handleSubmitData} className="my-10 flex justify-between" >
      <input
        type="text"
        id="add-text"
        className="bg-gray-50 w-[65%] border border-gray-300 text-gray-900 
                text-sm rounded-lg
                 focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600
                  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={currentValue}
                  onChange={getInputValue}
                  placeholder="Add text"   
      />

      <button
        type="submit"
        className="focus:outline-none text-white bg-green-700
 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg 
 text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700
  dark:focus:ring-green-800"
      >
        ADD
      </button>
    </form>
  );
};

export default Todo;
