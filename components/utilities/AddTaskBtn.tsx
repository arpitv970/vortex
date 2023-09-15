'use client';
import { Dispatch, SetStateAction, useState } from 'react';
import InputTaskForm from '@/components/utilities/InputTaskForm';
import { CiCirclePlus } from 'react-icons/ci';
import { FormVisible, TaskState, Tasks } from '@/interfaces';

interface PropsTypes extends TaskState {
  handleNewTask: () => void,
};

const AddTaskBtn = ({ handleNewTask, tasks, setTasks }: PropsTypes) => {
  const [showForm, setShowForm] = useState(false);
  console.log(showForm);
  return (
    <section className='w-[100%] flex justify-center items-center mx-auto'>
      {
        showForm
          ? (<InputTaskForm tasks={tasks} setTasks={setTasks} showForm={showForm} setShowForm={setShowForm} />)
          : (
            <button onClick={(e) => {
              e.preventDefault();
              setShowForm(true);
            }}>
              <CiCirclePlus size={40} className='cursor-pointer hover:text-bluTxt transition-all duration-150 ease-in-out' />
            </button>)
      }
    </section>
  )
}

export default AddTaskBtn;
