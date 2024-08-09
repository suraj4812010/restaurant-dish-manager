import React, { useState,useEffect } from 'react'
import ToggleButton from './ToggleButton';
import DeleteButton from './DeleteButton';
import AddDish from './AddDish';


function Dashboard() {

    const [dishes,setDishes] = useState([]);

    
  // handler for fetching data from database
  const getHandler = async (e) =>{
    
    const response = await fetch("http://localhost:8080/api/getdishes", {
      method:'GET', 
    });

    const data = await response.json();
    // console.log(data.dishes);
    setDishes(data.dishes);
   
  }

  useEffect(() => {
    getHandler();
  }, [dishes])
  

 

  return (
    <>
    <div className='flex flex-col h-full bg-slate-500'>
    
     <h1 className="text-4xl py-5 text-center mb-5 bg-gray-700 text-green-50">Dashboard</h1>
  
    <AddDish></AddDish>

      <div className=' my-8 mx-2 h-full text-black font-semibold '>
        <table className="w-full text-center  table-auto ">
          <thead className=' w-full  border-spacing-6 text-black'>
            <tr className='text-xl my-4'>
              <th>Dish Id</th>
              <th>Dish Name</th>
              <th className='text-left'>Dish Image</th>
              <th>Is published</th>
            </tr>
          </thead>

         <tbody className='my-2'>
          {
            dishes.map((dish,index) => {
                return (
                    <tr
                        className='text-lg '
                        key={dish.dishId}>
                        <td>{dish.dishId}</td>
                        <td>{dish.dishName}</td>
                        <td><img  src={dish.imageUrl} width={80} height={60} loading='lazy'  /></td>
                        <td><ToggleButton dishId = {dish.dishId} isPublished={dish.isPublished}></ToggleButton></td> 
                        <td><DeleteButton dishId = {dish.dishId}></DeleteButton></td>
                    </tr>
                )
            })
          }
          </tbody>
         
           
        </table>
      </div>
    </div>
    </>
   
  )
}

export default Dashboard
