export interface Task {
  id: string;
  title: string;
  description: string;
  status: string; //TaskStatus;
}

export enum TaskStatus {
  OPEN = 'OPEN',
  DONE = 'DONE',
}