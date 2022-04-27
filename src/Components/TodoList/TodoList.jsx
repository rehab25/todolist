import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function TodoList(props) {


    console.log(props.Items)
    // console.log(props.deleteItem)
  return (

    <>
      <div className='bg-info text-white d-flex'>
         <h4 className='col-8 p-1 m-0 border border-2'>Name</h4>
         <h4 className='col-3 p-1  m-0 border border-2'>Age</h4>
         <h6 className='col-1 p-1 pt-2 m-0 border border-2'>Action</h6>
      </div>

 {
   props.Items.length > 0 ? (
        props.Items.map(   (Item) =>

    <div key={Item.id} className='d-flex'>
      <h6 className='col-8 py-2 m-0 border border-2'>{Item.name}</h6>
      <h6 className='col-3 py-2 m-0 border border-2'>{Item.age} </h6>
      <h6 className='col-1 py-2 m-0 border border-2 text-danger'  onClick={ ()=>   props.deleteItem(Item.id)   }>&times;</h6>
    </div>
   
        )
                ) :   <h6  colSpan={4} className='text-center fs-3'> No Items</h6>
              }


</>
  
  )
}
