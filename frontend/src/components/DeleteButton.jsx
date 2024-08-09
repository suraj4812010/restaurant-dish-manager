import React from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";


function DeleteButton({dishId}) {

    const deleteHandler = async () => {
        // console.log(dishId);
        const  body = {dishId};

       if(confirm("Are you sure you want to Delete this Dish")){

            const response = await fetch("http://localhost:8080/api/deletedishes", {
            method:'DELETE', 
            body: JSON.stringify(body),
              headers:{
              'Content-Type':'application/json'
              },
           
          })
        //   console.log(response);

        if(response.status === 500){
          toast.error("Dish Not Deleted!")
        }
        else{
          toast.success("Dish Deleted Successfully!")
        }

       }

    }

  return (
    <div>
        <button className='text-2xl text-white hover:text-red-500 ' onClick={deleteHandler}><MdDeleteOutline /></button>
    </div>
  )
}

export default DeleteButton
