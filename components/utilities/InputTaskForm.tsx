'use client';
import { FormVisible, TaskState } from '@/interfaces';
import React, { SyntheticEvent, useState } from 'react';
import { CiCircleRemove } from 'react-icons/ci';

interface PropsType extends FormVisible, TaskState { };

const InputTaskForm = ({ showForm, setShowForm, tasks, setTasks }: PropsType) => {
  const [inputTask, setInputTask] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    inputTask !== '' && (setTasks((prev) => [...prev, { task: inputTask, status: false }]))
    setShowForm(false);
    console.log('submitted!');
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTask(e.target.value);
  }
  return (
    <form className='task-form' onSubmit={(e) => handleSubmit(e)}>
      <input onChange={handleChange} className='px-3 py-2 rounded-xl text-black selection:text-darkTxt' type='text' placeholder='Jot down your new task' />
      <CiCircleRemove className='cursor-pointer hover:text-darkRed transition-all duration-150 ease-in-out' onClick={(e: SyntheticEvent) => {
        e.preventDefault();
        setShowForm(!showForm)
      }} size={40} />
    </form>
  )
}

export default InputTaskForm;
