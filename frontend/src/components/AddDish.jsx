import React, { useState } from 'react'
import { toast } from "react-toastify";

function AddDish() {

   const [form, setForm] = useState();

   const changeHandler = (e) => { 
    //  console.log(e.target.value,e.target.name);
     setForm({
      ...form,
      [e.target.name] : e.target.value,
     })
  }

  // handler for submitting form data to database
  const submitHandler = async (e) =>{
    e.preventDefault();
    // console.log(form)

    const response = await fetch("http://localhost:8080/api/createdishes", {
      method:'POST',
      body: JSON.stringify(form),
      headers:{
        'Content-Type':'application/json'
      }
    });

    // const data = await response.json();
    // console.log(response);

    if(response.status === 400){
      toast.error("All Field Must be Filled!")
    }
    else if(response.status === 500){
      toast.error("Dish with this Id Already Exist!")
    }
    else{
      toast.success("Dish Added Successfully!")
    }

  }

  return (
    <div className='w-full flex flex-row my-6 mx-auto justify-center px-4'>
      <form onSubmit={submitHandler}>
        <label htmlFor="dishId">Dish Id</label>
        <input type="number" name='dishId' id='dishId' onChange={changeHandler} />

        <label htmlFor="dishName">Dish Name</label>
        <input type="text" name='dishName' id='dishName' onChange={changeHandler} />

        <label htmlFor="imageUrl">Image Url</label>
        <input type="text" name='imageUrl' id='imageUrl' onChange={changeHandler}/>

        <label htmlFor="isPublished">Published</label>
        <input type="radio" name="isPublished" id="isPublished" value={true} onChange={changeHandler} />

        <label htmlFor="notPublished">Not Published</label>
        <input type="radio" name="isPublished" id="notPublished" value={false} onChange={changeHandler}/>

        <button className='border mx-6 border-gray-50 rounded-lg p-1 w-[7rem] bg-blue-500 hover:bg-blue-400'>Add Dish</button>
      </form>
    </div>
  )
}

export default AddDish;
