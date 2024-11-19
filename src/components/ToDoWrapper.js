import React, { useState } from 'react'
import { TodoForm } from './TodoForm'
import {v4 as uuidv4} from 'uuid';
import { Todo } from './Todo';
import { EditTodoForm } from './EditToDoForm';
uuidv4();

export const ToDoWrapper = () => {
    const[todos,setTodo]=useState([])
    const addTodo=todo=>{
        setTodo([...todos, {id:uuidv4(),task:todo,completed:false,isEditing:false}])
        
    }
    const toggleComplete=id=>{
        setTodo(todos.map(todo=>todo.id===id? {...todo, completed: !todo.completed} :todo))
    }
    const deleteTask=id=>{
        setTodo(todos.filter(todo =>todo.id!==id ));
    }
    const editTodo=id=>{
        setTodo(todos.map(todo=>(todo.id===id ? {...todo,isEditing: !todo.isEditing} :todo)));
    }
    const editTask=(task,id)=>{
        setTodo(todos.map(todo=>(todo.id===id? {...todo,task,isEditing:!todo.isEditing}:todo)));
    }

    return(
        <div className='TodoWrapper'>
            <h1>GET THINGS DONE!</h1>
            <TodoForm addTodo={addTodo}/>
            {todos.map((todo,index)=> 
            (todo.isEditing ?(
                <EditTodoForm editTodo={editTask} task={todo}/>
            ): (
                <Todo task={todo} key={index} 
                toggleComplete={toggleComplete} 
                deleteTask={deleteTask} 
                editTodo={editTodo}/>
            )
            ))}
        </div>
    )
}