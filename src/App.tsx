
import './App.css'
import Header from './component/Header'
import ShowAndDelete from './component/ShowAndDelete'
import Todo from './component/Todo'

function App() {

  return (
    <div className='mx-auto  text-center w-[50%] my-4'>
     <h1 className='text-4xl text-green-700 font-bold'>TODO REACT + TYPE SCRIPT</h1>
     <Header/>
     <Todo/>
     <div className='h-[1px] bg-gray-200 my-5'></div>

     <ShowAndDelete/>
    </div>
  )
}

export default App
