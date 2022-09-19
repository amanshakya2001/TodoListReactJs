import { useState } from "react";
import Todoitems from "./Todoitems";
function App() {
  const [tasks,setTasks] = useState([]);
  const [newtask,setNewtask] = useState("");
  const newitem = (event)=>{
    setNewtask(event.target.value);
  }
  const additems = (event) =>{
    setTasks([...tasks,newtask]);
    setNewtask("");
  }
  const deleteitem = (id)=>{
    console.log("deleted");
    console.log(id);
    setTasks((oldItems)=>{
      console.log(oldItems)
      return oldItems.filter((arrElem,index)=>{
        return index!==id
      })
    })
  }
  const keypressed = (e)=>{
    if(e.key === "Enter"){
      additems();
    }
  }
  return (
    <section className="todolist">
      <div className="container">
        <h1 className="text-center">To-Do List</h1>
        <div className="form mt-3">
          <input type="text" name="input" value={newtask} onKeyUpCapture={keypressed} placeholder = "Enter Your Task" onChange={newitem} />
          <button className="btn" onClick={additems}>Add</button>
        </div>
        <div className="todoitems">
          <ul>
            <li className="todoitem">
              <p>Sr no.</p>
              <p>Task</p>
              <p>Delete</p>
              <p>Work Done</p>
            </li>
            <hr />
            {tasks.map((task,index) => (
              <Todoitems key={index} id={index} task={task} deleteitem = {deleteitem} tasks={tasks} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default App;
