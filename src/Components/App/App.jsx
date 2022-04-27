import React, { Component } from 'react'
import './App.css';
import AddItems from '../AddItems/AddItems';
import TodoList from '../TodoList/TodoList';

export default class App extends Component {

  
state ={
  Items : [
      { id:1,name:'ali', age :29  },
      { id:2, name:'ahmed', age :44  },
      { id:3, name:'abdo', age :32  },
  ]
}

deleteItem =(id) =>{
  console.log(id);
 let items = this.state.Items.filter(  (item)=> {
          return    item.id  !== id 
 }
  )
  this.setState({Items:items})

}

AddItem =(singleItem)=>{
  let ee =this.state.Items.length
  ee++
  console.log(this.state.Items.length)
 singleItem.id = ee
  let Items = this.state.Items;
  Items.push(singleItem);
     this.setState({ Items : Items     })
}
  render() {



    return (
      <div className="w-50 m-auto text-center pt-5">
        <h1 className='pt-5 pb-3'>Todo List</h1>
          <TodoList Items={this.state.Items} deleteItem={this.deleteItem} />
    <AddItems  AddItem={this.AddItem} />
    </div>
    )
  }
}
