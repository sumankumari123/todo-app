import React, { useEffect, useState } from "react";
import { useTodo } from "./store/Todos";
import { useParams } from 'react-router-dom';
import { useSearchParams } from "react-router-dom";


const ShowAndDelete = () => {
  const {todos, toggleCompletedStatus, deleteIndividualButton} = useTodo()
  

  let [searchParams] = useSearchParams();
  let todoUrl = searchParams.get("todo")

  const handleCheckboxChange = (id: string) => {
    toggleCompletedStatus(id);
  };

  let filterTodo = todos;
if(todoUrl ==='active'){
  // filterTodo = filterTodo.filter((value)=>value.completed === false)

  filterTodo = filterTodo.filter((value)=>!value.completed)
}

if(todoUrl ==='completed'){
  // filterTodo = filterTodo.filter((value)=> !value.completed === true )
  filterTodo = filterTodo.filter((value)=> value.completed)

 }
   
  
  return (
    <>
    {filterTodo.map((dispr, index)=>{

        
      return(
    <>
      <div className=" flex my-4  justify-between" key={index}>
        <div className="flex items-start text-left mt-2 ">
          <input
            id={`total-${dispr.id}`}
            type="checkbox"
            checked={dispr.completed} 
            onChange={() => handleCheckboxChange(dispr.id)} 
            className={`w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`}
          />
          <label className={`ms-2 text-lg leading-5 font-medium text-gray-500 dark:text-gray-300 ${dispr.completed?'line-through decoration-red-600 decoration-2 ':''}`}>
          {dispr.task}
          </label>
        </div>
       { dispr.completed && 
        <div className="flex items-end text-right ">
       <button
       type="button"
       onClick={()=>deleteIndividualButton(dispr.id)}
       className="focus:outline-none flex items-end text-white bg-red-700 hover:bg-red-800       
focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600
dark:hover:bg-red-700 dark:focus:ring-red-900"
     >
       Delete
     </button>
     </div>
       }     

      </div>
      <div className="h-[1px] bg-gray-200"></div>
      </>

    )})}
    </>
  );
};

export default ShowAndDelete;
