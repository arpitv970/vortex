'use client';
import React, { SyntheticEvent, useEffect, useState } from 'react';
import AddTaskBtn from '@/components/utilities/AddTaskBtn';
// import DropDown from '@/components/utilities/DropDown';
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';
import { CiCircleMore } from 'react-icons/ci';
// import { IoPencil } from 'react-icons/io';

import { Tasks } from '@/interfaces';

const ToDoSection = () => {
  // TODO: implement local storage of tasks, later implement it to proper backend!!
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

    const newData = [...tasks];
    newData[i] = { ...newData[i], status: !newData[i].status }
    localStorage.setItem('vortex-todo', JSON.stringify(newData));
  };

  // NOTE: Fetching data
  useEffect(() => {
    const fetchData = async () => {
      const data = await localStorage.getItem('vortex-todo');
      if (data) {
        const item = await JSON.parse(data);
        await setTasks(item);
        console.log(item);
      }
      else {
        console.log('No local data found!!')
      }
    }

    fetchData();

  }, [])
  // console.log(tasks);
  return (
    <div className='todo-div'>
      <section className='todo-sec'>
        {/* check if tasks is empty prompt add new task button, else show add new prompt below previous task */}
        {
          tasks.length !== 0 ? (tasks.map((task, i) => (
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
          )))
            : (
              <p>No pending tasks...</p>
            )
        }
      </section>
      <AddTaskBtn tasks={tasks} setTasks={setTasks} handleNewTask={handleNewTask} />
    </div>)
}

export default ToDoSection;
