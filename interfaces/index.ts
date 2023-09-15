import { Dispatch, SetStateAction } from 'react';

/* Tasks */
export interface Tasks {
  task: string,
  status: boolean,
}

/* form booleans */
export interface FormVisible {
  showForm: boolean,
  setShowForm: Dispatch<SetStateAction<boolean>>
}

export interface TaskState {
  tasks: Tasks[],
  setTasks: Dispatch<SetStateAction<Tasks[]>>,
}
