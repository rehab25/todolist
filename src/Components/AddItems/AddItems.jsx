import React, { Component } from 'react'

export default class AddItems extends Component {

  
  state={
    name:'',
    age:''
}
   ChangeData = (e) =>{
     this.setState({
      [e.target.id] : e.target.value
      

     })

  } 


preventsubmit=(e)=>{
  e.preventDefault();

// console.log(this.props.AddItem(  this.state    ))

  this.props.AddItem(    this.state   )
  this.setState({
    name : '',
    age :''
  })
}

  render() {
    //  console.log(this.props)     
   return (<>
         <form onSubmit={this.preventsubmit} className='d-flex'>
  
      <h4 className="col-8 m-0 border border-2">  <input type='text' placeholder='your name...' className='form-control' id='name' onChange={this.ChangeData} value={this.state.name} />  </h4>
      <h4 className="col-3 m-0 border border-2">  <input type='number' placeholder='your age...' className='form-control' id='age'  onChange={this.ChangeData} value={this.state.age} />  </h4>
      <h4 className="col-1 m-0 border border-2 bg-info"><button className='btn'>add</button></h4>
    







{/* 
           <input type='text' placeholder='enter your name...' id='name' onChange={this.ChangeData} value={this.state.name} />
           <input type='number' placeholder='enter your age...' id='age'  onChange={this.ChangeData} value={this.state.age} />
          <input type='submit' value='add Item' /> */}


           {/* <button onClick={this.AddSingleItem}>add Item</button> */}
           
         </form>


         </>

    )
  }
}
