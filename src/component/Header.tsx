import React, {useState}from 'react'
import { NavLink } from "react-router-dom";
import { useSearchParams } from "react-router-dom";



const Header = () => {
  const[active, setActive] = useState()
  const [searchParams] = useSearchParams();
  const isUrlActive = searchParams.get("todo")
  return (
    <>
    <nav className='mt-[3.5rem] '>
      <ul className=' flex justify-between '>
        <li>
          <NavLink to="/" className={`${isUrlActive === null? 'border-blue-500 border-b-4':''} tracking-widest font-outfit font-[500] text-xl`}>All</NavLink>
        </li>
        <li>
          <NavLink to="/?todo=active" className={`${isUrlActive === 'active'? 'border-blue-500 border-b-4':''} tracking-widest font-outfit font-[500] text-xl`}>Active </NavLink>
        </li>
        <li>
          <NavLink to="/?todo=completed" className={`${isUrlActive === 'completed'? 'border-blue-500 border-b-4':'' } 
          tracking-widest font-outfit font-[500] text-xl`}>Completed</NavLink>
        </li>
      </ul>
    </nav>

    <div className='h-[1px] bg-gray-200'></div>
    </>

  )
}

export default Header
