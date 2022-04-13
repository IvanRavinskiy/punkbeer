import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { createGlobalStore } from './store';

const { store } = createGlobalStore();

export type AppRootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> =
  useSelector;
