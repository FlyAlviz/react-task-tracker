import { useState } from 'react'

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Addtask from './components/Addtask';

function App() {
  const [showAddTask, setShowAddTask] = useState(true)
  const [tasks, setTasks] = useState([{
    id:1,
    text:'Doctors Appointshit',
    day: 'birthday ni crush',
    reminder: true,
 },
 {
    id:2,
    text:'Do asdwadctoras Appointshit',
    day: 'birthdadaefay ni crush',
    reminder: false,
 },
 {
    id:3,
    text:'Doctogedadars Appointshit',
    day: 'birthday ni crua273849387sh',
    reminder: true,
 }])


//  addTask
const addTask = (task) => {
  const id = Date.now();
  task.id = id;
  setTasks([...tasks,task])
}

//  Delete Task
 const deleteTask = (id) => {
   setTasks(tasks.filter((task) => task.id !== id))
 }

//  Toggle Reminder
 const toggleReminder = (id) => {
   setTasks(tasks.map((task) => task.id ===id ? {...task, reminder: !task.reminder} : task))
 }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
     {showAddTask && <Addtask onAdd={addTask}/>}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : ('No Tasks to show')}
    </div>
  );
}


export default App;
