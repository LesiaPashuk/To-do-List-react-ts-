import React from 'react';
import './App.css';
import { ListAndTasks } from './components/ListAndTasks/ListAndTasks';
/*import Task from './components/Task/Task';
import { title } from 'process';
import { TaskType, PropsType } from './components/Task/Task';
import { useState } from 'react';
import { v1 } from 'uuid';
import { TypeFormatFlags } from 'typescript';

export type TypeForButton="typeAll"|"typeActive"|"typeDone";*/
function App() {
  /*const  firstTask=[
    {id:v1(), title:"Css", isDone:true},
    {id:v1(), title:"html", isDone:false},
    {id:v1(), title: "lol", isDone:true},
    {id:v1(), title:"pop", isDone:false}
  ]
const[buttonStatus, setButtonStatus]=useState<TypeForButton>("typeAll")
const[task, setTask]=useState(firstTask )
const[isDone1, setIsDone1]=useState(false);
const[constTask, setConstTask]=useState(firstTask )
function removeTask(id:string){
  let arr= task.filter(task=>task.id!=id)
  setTask(arr);
  setConstTask(arr);
}
function completedTask(){
  let arrComleted= constTask.filter(task=>task.isDone===true)
  setTask(arrComleted);
  setButtonStatus("typeDone")
} 
function activeTask(){
  let arrActive=constTask.filter(task=>task.isDone==false);
  setTask(arrActive);
  setButtonStatus("typeActive")
}
function allTask(){
  setTask(constTask);
  setButtonStatus("typeAll")
}
function changeIsDoneStatus(idTask:string, isDone:boolean){
  let task = constTask.find(t=> t.id===idTask);
  if(task){
    task.isDone=isDone;
  }
  setConstTask([...constTask]);
  setTask([...constTask]);
}
//мой ввод 
function inputValue(newTitle:string){
  let newTask = {id:v1(), title:newTitle, isDone:isDone1};
  let newTasks=[newTask, ...constTask];
  setTask(newTasks);
  setConstTask(newTasks);
  console.log(typeof(buttonStatus))
}*/
  return (
    <ListAndTasks></ListAndTasks>
    /*
    <div className="App">
     <Task title="lol" 
     tasks={task} 
     removeTask={removeTask} 
     completedTask={completedTask} 
     activeTask={activeTask}
     allTask={allTask}
     inputValue={inputValue}
     changeIsDoneStatus={changeIsDoneStatus}
     buttonStatus={buttonStatus}
     ></Task>
    </div>*/
  );
}

export default App;
