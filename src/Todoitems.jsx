import { useState } from "react";

function App(props) {
  const [line,setLine] = useState(true);
  const cutit = ()=>{
    setLine(!line);
  }
  return (
    <li className="todoitem">
      <p style={{textDecoration:!line?'line-through':'none'}}>{props.id + 1}.</p>
      <p style={{textDecoration:!line?'line-through':'none'}}> {props.task}</p>
      <button onClick={()=>{props.deleteitem(props.id)}}><i className="fa fa-times"></i></button>
      <button onClick={cutit}><i className="fa fa-check"></i></button>
    </li>
  );
}

export default App;
