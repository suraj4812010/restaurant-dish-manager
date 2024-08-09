import React from 'react'
import { toast } from "react-toastify";


function ToggleButton({dishId,isPublished}) {

    const body = {
        dishId,isPublished
    }

    const changeIsPublished = async (e) => {
        e.preventDefault();
        
        const response = await fetch("http://localhost:8080/api/updateIsPublished", {
          method:'PUT', 
          body: JSON.stringify(body),
            headers:{
            'Content-Type':'application/json'
            },
         
        })
        console.log(response);

        if(response.status === 500){
          toast.error("Dish Updation Failed!")
        }
        else{
          toast.success("Dish Updated Successfully!")
        }
      }

  return (
    <div>
      <button onClick={changeIsPublished} className={`border rounded-lg p-1 w-[7rem] hover:text-white border-black ${isPublished ? "bg-green-500" : "bg-red-500"}`}>{isPublished ? "Yes" : "No"}</button>
    </div>
  )
}

export default ToggleButton
