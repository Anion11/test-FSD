import { createStore, combine, createEffect, createEvent } from 'effector';
import { normalize, schema } from 'normalizr';
import { typicodeApi } from '../../../shared/api';
import type { Task } from '../../../shared/api';

export type QueryConfig = {
  completed?: boolean;
  userId?: number;
};

const setQueryConfig = createEvent<QueryConfig>();

// В каждом эффекте так же может быть своя доп. обработка
const getTasksListFx = createEffect(
  (params?: typicodeApi.GetTasksListParams) => {
    return typicodeApi.getTasksList(params);
  },
);
const getTaskByIdFx = createEffect((params: typicodeApi.GetTaskByIdParams) => {
  return typicodeApi.getTaskById(params);
});

// Можно вынести нормализацию на уровне API
export const taskSchema = new schema.Entity('tasks');
export const normalizeTask = (data: Task) => normalize(data, taskSchema);
export const normalizeTasks = (data: Task[]) => normalize(data, [taskSchema]);

// В рамках демо некритично, но можно хранить и в виде массива без нормализации
export const tasksInitialState: Record<number, Task> = {};
export const $tasks = createStore(tasksInitialState)
  .on(
    getTasksListFx.doneData,
    (_, payload) => normalizeTasks(payload.data).entities.tasks,
  )
  .on(getTaskByIdFx.doneData, (state, payload) => ({
    ...state,
    ...normalizeTask(payload.data).entities.tasks,
  }));

// Можно вынести в отдельную директорию (для хранения нескольких моделей)
export const $queryConfig = createStore<QueryConfig>({}).on(
  setQueryConfig,
  (_, payload) => payload,
);

// Можно добавить потенциально debounce логику
export const $tasksListLoading = getTasksListFx.pending;
export const $taskDetailsLoading = getTaskByIdFx.pending;

/**
 * "Список" задач
 */
export const $tasksList = combine($tasks, (tasks) => Object.values(tasks));

export const events = { setQueryConfig };

export const effects = {
  getTaskByIdFx,
  getTasksListFx,
};
