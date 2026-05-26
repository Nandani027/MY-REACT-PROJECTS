import React,{useState} from 'react'

function TodoList(){
    const[tasks,setTasks] =useState([]);
    const[newTask, setnewTask]=useState("");

    function handleInputChange(event){
        setnewTask(event.target.value);
    }

    function addTask(){

        if(newTask.trim()!==""){
        setTasks(t=>[...t,newTask]);
        setnewTask("");
        }

    }

    function deleteTask(index){

        const updatedTasks=tasks.filter((_,i)=> i!==index);
        setTasks(updatedTasks);

    }

    function moveTaskUp(index){
        if(index>0){
            const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }

    function moveTaskDown(index){
         if(index<tasks.length-1){
            const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
        
    }

    return(<div className='to-do-list'>
        <h1> My Task Planner</h1>
        <div>
            <input type="text" placeholder='Enter a task' value={newTask} onChange={handleInputChange}/>
       
        <button className='add-button' onClick={addTask}>Add</button>
        </div>
        <ol>
            {tasks.map((task,index)=>
                 <li key={index}>
                    <span className="text">{task}</span>
                    <button 
    className='delete-button' 
    onClick={() => deleteTask(index)}
>
    Delete
</button>
<button 
    className='move-up' 
    onClick={() => moveTaskUp(index)}
>
    ⬆
</button>

<button 
    className='move-down' 
    onClick={() => moveTaskDown(index)}
>
    ⬇
</button>

                </li>
            )}
        </ol>
    </div>);
}

export default TodoList