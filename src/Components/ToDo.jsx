import React,{useState,useEffect} from 'react';
import {Link,Route} from 'react-router-dom'
import { Router } from 'react-router-dom';
import { Redirect } from 'react-router';



export default function ToDo(){

    const [name,setName] = useState("");
    const [description,setdescripton] = useState("");
    const [todos, settodos] = useState([]);
    
    const add = (event) => {
        event.preventDefault();
        if(name === "" || description === ""){
            alert("Both Fields are necessary.");
            return;
        }
        let id = Math.floor(Math.random()*10000);
        id++;
        settodos([...todos,{name,description,id}])
        console.log(todos)
        renderList;
        setdescripton("")
        setName(""); 
    }



    
        const renderList = todos.map((todo) => {
            return (
                <div>
                    <ul style={{display:"inline"}}><li> <strong>Task : </strong> {todo.name} </li><small><strong>Description : </strong>{todo.description}</small></ul> 
                    <button onClick={()=>deleteContactHandler(todo.id)} style={{display:"inline", position:"relative", left:"100px", borderRadius:"10px", backgroundColor:"red"}} className="primary" >Delete</button>
                </div>
            )
        })
  
   


        const deleteContactHandler = (id)=>{
            const newTodos = todos.filter(todo=>{ 
              return todo.id != id;
            })
            settodos(newTodos);
            renderList;
        }



        useEffect(() =>{
            const  items = JSON.parse(localStorage.getItem("MyToDos"));
            if(items){ settodos(items); renderList;  }
          },[])
        
          useEffect(() =>{
            localStorage.setItem("MyToDos", JSON.stringify(todos))
          },[todos])


    return (

        <div className="container" style={{ backgroundColor:"#fff", maxWidth:"80%", borderRadius:"10px", marginTop:"5%", padding:"30px"}}>

        <form onSubmit={add}>

            <h1>TODos</h1>
            
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Task</label>
                <input type="text " className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="Enter Task ToDo"  onChange={(event) => setName(event.target.value)} value={name}/>
            </div>
            
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Description</label>
                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Description" onChange={(event) => setdescripton(event.target.value)} value={description} />
            </div>
            
            {/* <Link to="/"><button type="submit" className="btn btn-primary">Add</button></Link> */}
            <button type="submit" className="btn btn-primary mb-5">Add</button>
        
        </form>


        <div>
       {renderList}
        </div>


        </div>



    )
}

