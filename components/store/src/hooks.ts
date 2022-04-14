import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppRootStateType } from './store';

export const useAppDispatch = () => useDispatch();
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> =
  useSelector;
