'use client';
import React, { SyntheticEvent, useState } from 'react';
import AddTaskBtn from '@/components/utilities/AddTaskBtn';
// import DropDown from '@/components/utilities/DropDown';
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';
import { CiCircleMore } from 'react-icons/ci';
// import { IoPencil } from 'react-icons/io';

import { Tasks } from '@/interfaces';

const ToDoSection = () => {
  const [tasks, setTasks] = useState<Tasks[]>([]);

  const handleNewTask = () => {
    console.log('Add New Task');
  };

  const handleTodo = (e: React.SyntheticEvent, i: number) => {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[i] = { ...newTasks[i], status: !newTasks[i].status };
      return newTasks;
    });
  };

  console.log(tasks);
  return (
    <div className='todo-div'>
      <section className='todo-sec'>
        {/* check if tasks is empty prompt add new task button, else show add new prompt below previous task */}
        {
          tasks && tasks.map((task, i) => (
            <p key={i} className='todo-list'>
              {/* <DropDown icon={CiCircleMore} list={menuList}  /> */}
              {
                task.status
                  ? (
                    <ImCheckboxChecked className='check-icon' onClick={(e: SyntheticEvent) => handleTodo(e, i)} />
                  )
                  : (
                    <ImCheckboxUnchecked className='check-icon' onClick={(e: SyntheticEvent) => handleTodo(e, i)} />
                  )
              }
              <span className={`task ${task.status ? 'line-through italic' : ''}`}>
                {task.task}
              </span>
            </p>
          ))
        }
      </section>
      <AddTaskBtn tasks={tasks} setTasks={setTasks} handleNewTask={handleNewTask} />
    </div>)
}

export default ToDoSection;
