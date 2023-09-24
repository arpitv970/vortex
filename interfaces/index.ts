import { SessionState } from 'http2';
import { Session } from 'inspector';
import { SessionOption } from 'mongoose';
import { BuiltInProviders } from 'next-auth/providers/index';
import { ClientSafeProvider } from 'next-auth/react';
import { Dispatch, ReactNode, SetStateAction } from 'react';

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


/* next-auth providers */
export interface ProvidersType {
  providers: any,
  // setProviders: (res: any) => void
}

/* Session providers */
export interface SessionProps {
  children: ReactNode,
  session: any,
}
