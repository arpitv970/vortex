'use client'
import React, { useState } from 'react';
import ToDoSection from '@/components/ToDo/ToDoSection';
import TaskFlow from '@/components/Flow/TaskFlow';

const ToggleTasks = () => {
  return (
    <section className='w-[100%]'>
      <ToDoSection />
    </section>
  )
}

export default ToggleTasks;
