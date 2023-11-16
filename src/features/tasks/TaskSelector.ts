import { selector } from 'recoil'
import { tasksState } from './TaskAtoms'
import type { Task } from '../../types'

export const uncompletedTasksSelector = selector<Task[]>({
  key: 'uncompleted_tasks',
  get: ({ get }) => {
    return get(tasksState).filter((task) => {
      return task.progressOrder !== 4
    })
  },
})

export const waitingTasksSelector = selector<Task[]>({
  key: 'waiting_tasks',
  get: ({ get }) => {
    return get(tasksState).filter((task) => {
      return task.progressOrder === 3; // Assuming 3 is the progressOrder for "In Review / Waiting"
    });
  },
});

export const inProgressTasksSelector = selector<Task[]>({
  key: 'in_progress_tasks',
  get: ({ get }) => {
    return get(tasksState).filter((task) => {
      return task.progressOrder === 2; // Assuming 2 is the progressOrder for "In Progress"
    });
  },
});

export const notStartedTasksSelector = selector<Task[]>({
  key: 'not_started_tasks',
  get: ({ get }) => {
    return get(tasksState).filter((task) => {
      return task.progressOrder === 1; // Assuming 1 is the progressOrder for "Not Started"
    });
  },
});

export const completedTasksSelector = selector<Task[]>({
  key: 'completed_tasks',
  get: ({ get }) => {
    return get(tasksState).filter((task) => {
      return task.progressOrder === 4
    })
  },
})