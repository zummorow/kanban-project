import { selector } from 'recoil'
import { tasksState } from './TaskAtoms'
import type { Task } from '../../types'
import {SelectorKeys} from '../../constans/recoilKeys'

export const uncompletedTasksSelector = selector<Task[]>({
  key: SelectorKeys.UNCOMPLETED_TASKS,
  get: ({ get }) => {
    return get(tasksState).filter((task) => {
      return task.progressOrder !== 4
    })
  },
})

export const waitingTasksSelector = selector<Task[]>({
  key: SelectorKeys.WAITING_TASKS,
  get: ({ get }) => {
    return get(tasksState).filter((task) => {
      return task.progressOrder === 3; // Assuming 3 is the progressOrder for "In Review / Waiting"
    });
  },
});

export const inProgressTasksSelector = selector<Task[]>({
  key: SelectorKeys.IN_PROGRESS_TASKS,
  get: ({ get }) => {
    return get(tasksState).filter((task) => {
      return task.progressOrder === 2; // Assuming 2 is the progressOrder for "In Progress"
    });
  },
});

export const notStartedTasksSelector = selector<Task[]>({
  key: SelectorKeys.NOT_STARTED_TASKS,
  get: ({ get }) => {
    return get(tasksState).filter((task) => {
      return task.progressOrder === 1; // Assuming 1 is the progressOrder for "Not Started"
    });
  },
});

export const completedTasksSelector = selector<Task[]>({
  key: SelectorKeys.COMPLETED_TASKS,
  get: ({ get }) => {
    return get(tasksState).filter((task) => {
      return task.progressOrder === 4
    })
  },
})